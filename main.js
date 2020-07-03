import Vue from 'vue'
import App from './App'
import uniPopup from '@/components/uni-popup/uni-popup.vue'
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
import pageHead from '@/components/page-head.vue'
// import './static/css/iconfont.css'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.component('uniPopup', uniPopup)
Vue.component('uniPopupMessage', uniPopupMessage)
Vue.component('uniPopupDialog', uniPopupDialog)
Vue.component('pageHead', pageHead)


const app = new Vue({
	...App,
})
app.$mount()
