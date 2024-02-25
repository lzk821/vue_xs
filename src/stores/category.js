import {defineStore} from 'pinia'
import {ref} from 'vue'
import {getCategoryAPI} from '@/apis/layout'
export const usecategoryStore = defineStore('category',()=>{
  //导航列表数据
  let getCategoryList = ref([])
  //action获取导航数据的方法
  const getCategory =async ()=>{
  const res =await getCategoryAPI()
  getCategoryList.value = res.result
}
 return {
    getCategoryList,
    getCategory
 } 
})