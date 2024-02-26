import httpInstance from '@/utils/http'

export function getmbxAPI(id){
    return httpInstance({
        url:'/category',
        params:{
            id
        }
    })
}