

import { createApp } from 'vue'
import "primeflex/themes/primeone-light.css";
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import PrimeVue from 'primevue/config';
import InputGroup from 'primevue/inputgroup';
import router from "@/router/router.js";
import 'primeicons/primeicons.css'
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';



import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.component('pv-card', Card)
app.component('pv-button', Button)
app.component('pv-input-group', InputGroup)
app.component('pv-input-text', InputText)
app.mount('#app')
