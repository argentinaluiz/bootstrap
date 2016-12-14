import Vue from 'vue'
import {Time} from './time';

require('bootstrap/d');
require('bootstrap');

new Vue({
    el: '#app',
    data: {
        times: [
            new Time('Atlético PR' , require('./assets/atletico-pr_60x60.png')),
            new Time('Atlético MG' , require('./assets/atletico_mg_60x60.png')),
            new Time('América MG' , require('./assets/america_mg_60x60.png'))
        ]
    }
})
