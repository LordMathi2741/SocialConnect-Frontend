

import { createApp } from 'vue'
import "primeflex/themes/primeone-light.css";
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import Card from 'primevue/card';
import Button from 'primevue/button';


import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue)
app.component('pv-card', Card)
app.component('pv-button', Button)
app.mount('#app')
