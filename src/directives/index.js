import { useIntersectionObserver } from '@vueuse/core'


    export const lazyPlugin = {
        install(app){
        // 定义全局指令
        app.directive('img-lazy',{
        mounted (el, binding) {
        // console.log(el.src,binding.value)
        const {stop} =useIntersectionObserver(
            el,
            ([{isIntersecting}]) =>{
                if (isIntersecting){
                    console.log(isIntersecting)
                    el.src = binding.value
                    stop()
                    }
                }
            )
        }
    })
  }
}