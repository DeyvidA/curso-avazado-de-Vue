Vue.component('coinDetail', {

    props: ['coin'], 

    data () {
        return {
            showPrices: false,
            value: 0
        }
    },

    computed: {
        title() {
            return `${this.coin.name} - ${this.coin.Symbol}`
        },

        convertedValue () {
            if (!this.value) {
                return 0
            }

            return this.value / this.coin.price;
        },
    },

    method: {
        toggleShowPrices() {
            this.showPrices = !this.toggleShowPrices

            this.$emit('change-color', 
            this.showPrices ? 'FF96C8' : '3D3D3D')
            // this.color = this.color.split('').reverse().join('');
        }
    },

    created () {
        console.log('Mounted...');
    },
    mounted () {
        console.log('Mounted...');
    },
    template: `
        <div>
            <img 
                v-on:mouseover="toggleShowPrices"
                v-on:mouseout="toggleShowPrices"
                v-bind:src="coin.img" v-bind:alt="coin.name"
            />


            <h1 v-bind:class="coin.changePercent > 0 ? 'verde' : 'rojo' ">
                {{ title }}
                <span v-if="coin.changePercent > 0">😄</span>
                <span v-else-if="coin.changePercent < 0">F</span>
                <span v-else>eu</span>

                <span v-on:click="toggleShowPrices">
                    {{ showPrices ? 'siu' : 'nou' }}
                </span>
            </h1>

            <input type="number" v-model="value">
            <span> {{ convertedValue }}</span>

            <slot name="text"></slot>
            <slot name="link"></slot>

            <ul v-show="showPrices">     
                <li
                class="mayuscula"
                v-bind:class="{ naranja: p.value == coin.price, rojo: p.value <  coin.price, verde: p.value > coin.price}"
                v-for="(p , i) in coin.pricesWithDays"
                :key='p.day'>
                    {{ i }} = {{ p.day }} - {{ p.value }}
                </li>
            </ul>

        </div>
    `
})

new Vue ({
    el: '#app',

    data () {
        return {
            btc: {
                name: 'Bitcoin',
                Symbol: 'BTC',
                img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                changePercent: 0,
                price: 8400,
                pricesWithDays: [
                    { day: 'Lunes', value: 8400 },
                    { day: 'Martes', value: 7900 },
                    { day: 'Miercoles', value: 8200 },
                    { day: 'Jueves', value: 9000 },
                    { day: 'Viernes', value: 9400 },
                    { day: 'Sabado', value: 10000 },
                    { day: 'Domingo', value: 10200 },
                ],
            },            

            color: 'f4f4f4',
        }
    },
    created () {
        console.log('Mounted...');
    },
    mounted () {
        console.log('Mounted...');
    },
    methods: {
        updateColor(color) {
            this.color = color || this.color
            .split('')
            .reverse()
            .join('');
        }
    }
})