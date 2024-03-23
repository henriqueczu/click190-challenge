// plugins/google-maps.js

import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAQVx9M7Z1Sb4GUl8ePtiwwaoEuAZ_YLyw',
    libraries: 'places', // Se necessário, adicione outras bibliotecas
  },
})