var app = new Vue({
    el: '#app',
    data: {
        productName: '',
        cart: []
    },
    methods: {
        addProduct: function () {
            if (this.productName == '') {
                alert('Нет названия товара');
            } else {
                this.cart.push(this.productName);
                this.productName = '';
            }
        }
    },
})