var app = new Vue({
    el: '#app',
    data: {
        number_1: 0,
        number_2: 0,
        response: null

    },

    methods: {

        sum() {
            this.response = this.number_1 + this.number_2;

        },

        subtract() {
            this.response = this.number_1 - this.number_2;
        },

        multiply() {
            this.response = this.number_1 * this.number_2;
        },

        divide() {

            if (this.number_2 == 0) {
                this.response = "No se puede dividir por 0 crack!"
            } else {

                this.response = this.number_1 / this.number_2;
            }
        }



    },
});