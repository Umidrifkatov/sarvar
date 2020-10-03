from django import forms
from .models import Order


# class OrderCreateForm(forms.ModelForm):
#     class Meta:
#         model = Order
#         fields = ['first_name', 'last_name', 'email', 'address', 'postal_code', 'city']


class OrderCreateF(forms.Form):
    first_name = forms.CharField(label='', widget=forms.TextInput(attrs={'calss': 'form-order order-form1',
                                                                        'placeholder': "First name",}))
    last_name = forms.CharField(label='', widget=forms.TextInput(attrs={'calss': 'form-order order-form2',
                                                                        'placeholder': "Last name",}))
    email = forms.EmailField(label='', widget=forms.TextInput(attrs={'calss': 'form-order order-form3',
                                                                        'placeholder': "Email",}))
    address = forms.CharField(label='', widget=forms.TextInput(attrs={'calss': 'form-order order-form4',
                                                                        'placeholder': "Adress",}))
    postal_code = forms.CharField(label='', widget=forms.TextInput(attrs={'calss': 'form-order order-form5',
                                                                        'placeholder': "Postal code",}))
    city = forms.CharField(label='', widget=forms.TextInput(attrs={'calss': 'form-order order-form6',
                                                                        'placeholder': "City",}))

