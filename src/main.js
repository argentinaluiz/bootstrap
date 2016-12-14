import Vue from 'vue'
import {Time} from './time';

require('style-loader|css-loader|bootstrap/dist/css/bootstrap.min.css');
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
