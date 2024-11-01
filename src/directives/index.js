//定义懒加载插件
import {useIntersectionObserver} from "@vueuse/core";

export const lazyPlugin={
  install(app){
    //懒加载指令逻辑
    app.directive('img-lazy',{
      mounted(el,binding){
        //el代表指令绑定元素 img
        //binding是指令对象，binding.value表示指令等号后面绑定表达式的值
        const { stop } = useIntersectionObserver(
          el,
          ([{isIntersecting}])=>{
            // console.log(isIntersecting)
            if(isIntersecting){
              el.src=binding.value
              stop()
            }
          }
        )
      }
    })
  }
}
