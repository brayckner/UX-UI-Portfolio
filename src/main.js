import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/main.scss'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  head.meta.push(
      { chartset: 'utf-8'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    )
}
