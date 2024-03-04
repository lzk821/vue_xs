import httpInstance from '@/utils/http'

export const loginAPI = ({account,password}) =>
  httpInstance({
    url: '/login',
    method: 'POST',
    data:{
      account,
      password
    }
  })