var app = new Vue({
    el: '#app',
    data: {
        firstNames: '',
        lastNames: '',
        email: '',
        loanAmount: 0,
        loanType: 0,
        finalInterest: 0,
        loanInterests: 0,
        loanPeriod: 0,
        loanMonthlyPayments: 0,
        greeting: '',
        loanSummary: '',


    },

    methods: {

        loanQuote() {
            this.greeting = `Estimad@ ${this.firstNames} ${this.lastNames}`;
            this.getLoanQuote();
            this.loanSummary = `El préstamo que usted quiere solicitar con el Banco de la Región se le otorga con un interés fijo de ${(this.finalInterest * 100).toFixed(2)}% por ${this.loanPeriod} cuotas mensuales de $${this.formatNumber((this.loanMonthlyPayments).toFixed(2))} COL pesos.`;
        },

        getLoanQuote() {
            if ((this.loanType == 1) && (this.loanPeriod < 6)) {
                this.finalInterest = 0.023;
                this.loanMonthlyPayments = this.getMonthlyPayments(this.loanAmount, this.loanPeriod, 0.023);
            } else if (this.loanType == 1 && this.loanPeriod > 12 && this.loanPeriod < 24) {
                this.finalInterest = 0.021;
                this.loanMonthlyPayments = this.getMonthlyPayments(this.loanAmount, this.loanPeriod, 0.021);
            } else if (this.loanType == 1 && this.loanPeriod > 24) {
                this.finalInterest = 0.018;
                this.loanMonthlyPayments = this.getMonthlyPayments(this.loanAmount, this.loanPeriod, 0.018);
            } else if ((this.loanType == 1) && ((this.loanPeriod > 6) && (this.loanPeriod < 12))) {
                this.finalInterest = 0.025;
                this.loanMonthlyPayments = this.getMonthlyPayments(this.loanAmount, this.loanPeriod, 0.025);
            }

            if (this.loanType == 2 && this.loanPeriod < 6) {
                this.finalInterest = 0.027;
                this.loanMonthlyPayments = this.getMonthlyPayments(this.loanAmount, this.loanPeriod, 0.027);
            } else if (this.loanType == 2 && this.loanPeriod > 12 && this.loanPeriod < 24) {
                this.finalInterest = 0.025;
                this.loanMonthlyPayments = this.getMonthlyPayments(this.loanAmount, this.loanPeriod, 0.025);
            } else if (this.loanType == 2 && this.loanPeriod > 24) {
                this.finalInterest = 0.022;
                this.loanMonthlyPayments = this.getMonthlyPayments(this.loanAmount, this.loanPeriod, 0.022);
            } else if ((this.loanType == 2) && ((this.loanPeriod > 6) && (this.loanPeriod < 12))) {
                this.finalInterest = 0.029;
                this.loanMonthlyPayments = this.getMonthlyPayments(this.loanAmount, this.loanPeriod, 0.029);
            }
        },


        getMonthlyPayments(amount, period, interest) {
            let interests = amount * interest;
            return (this.loanAmount + interests) / period;
        },

        formatNumber(num) {
            if (!num || num == 'NaN') return '-';
            if (num == 'Infinity') return '&#x221e;';
            num = num.toString().replace(/\$|\,/g, '');
            if (isNaN(num))
                num = "0";
            sign = (num == (num = Math.abs(num)));
            num = Math.floor(num * 100 + 0.50000000001);
            cents = num % 100;
            num = Math.floor(num / 100).toString();
            if (cents < 10)
                cents = "0" + cents;
            for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
                num = num.substring(0, num.length - (4 * i + 3)) + '.' + num.substring(num.length - (4 * i + 3));
            return (((sign) ? '' : '-') + num + ',' + cents);

        }

    }

});