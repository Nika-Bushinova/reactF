
import axios from 'axios';
const url = 'https://social-network.samuraijs.com/api/1.0/'
const instance=axios.create({//базовые настройки axios
   withCredentials: true,
   baseURL:'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '7ce0a521-e4ad-4dd6-ae14-27843ba810f9'
   }

})
export const UsersAPI={
   getUsers: (currentPage, pageSize) => {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
         return response.data
      })
   }
}
export const ProfileAPI={

  getDatas: async (userId)=>{
      debugger
      let response = await fetch(url+'profile/' + userId, {
         method: 'GET',
         headers: { 'Content-type': 'application/json; charset=utf-8' }
      })
      let data = await response.json()
      return data
   }
}
 
export const AuthAPI={
  
   getloginF:() => instance.get(`auth/me`).then((response) => { return response.data })
}


export const FollowAPI={
 setUnFollowF:(el)=>{
   
   return instance.delete(`follow/${el.id}`).then((response) => { return response.data })
},
setFollowF:(el)=>{
   return  instance.post(`follow/${el.id}`, null).then((response) => { return response.data })
}
}

