from django.shortcuts import render
from .models import OrderItem, Order
from .forms import OrderCreateF
from cart.cart import Cart



def order_create(request):
    cart = Cart(request)
    if request.method == 'POST':
        form = OrderCreateF(request.POST)
        if form.is_valid():
            order = Order.objects.create(**form.cleaned_data)
            for item in cart:
                OrderItem.objects.create(order=order,
                                         product=item['product'],
                                         price=item['price'],
                                         quantity=item['quantity'])
            # очистка корзины
            cart.clear()
            return render(request, 'order/created.html',
                          {'order': order})
    else:
        form = OrderCreateF
    return render(request, 'order/create.html',
                  {'cart': cart, 'form': form})



















# def order_create(request):
#     cart = Cart(request)
#     if request.method == 'POST':
#         form = OrderCreateForm(request.POST)
#         if form.is_valid():
#             order = form.save()
#             for item in cart:
#                 OrderItem.objects.create(order=order,
#                                          product=item['product'],
#                                          price=item['price'],
#                                          quantity=item['quantity'])
#             # очистка корзины
#             cart.clear()
#             return render(request, 'order/created.html',
#                           {'order': order})
#     else:
#         form = OrderCreateForm
#     return render(request, 'order/create.html',
#                   {'cart': cart, 'form': form})
