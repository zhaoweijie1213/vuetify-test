/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import * as PIXI from 'pixi.js'

// Composables
import { createApp } from 'vue'
// import { Assets } from '@pixi/assets'

window.PIXI = PIXI
const app = createApp(App)
registerPlugins(app)
app.mount('#app')
