import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {useIntersectionObserver} from '@vueuse/core'

import "@/styles/common.scss"

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.mount('#app')

app.directive('img-lazy',{
  mounted(el,binding){
    //el代表指令绑定元素 img
    //binding是指令对象，binding.value表示指令等号后面绑定表达式的值
    useIntersectionObserver(
      el,
      ([{isIntersecting}])=>{
        if(isIntersecting){
          el.src=binding.value
        }
      }
    )
  }
})
