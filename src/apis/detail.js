import httpInstance from '@/utils/http'

export function GetDetail(id){
    return httpInstance({
        url:'/goods',
        params:{
            id
        }
    })
}