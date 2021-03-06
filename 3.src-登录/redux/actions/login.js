//引入type常量
import {SAVE_USER_INFO,SIGNOUT} from '@/redux/action-types'
//暴露action常量并暴露 --- login组件
export const saveUserInfo = userObj => {
  const {token,user} = userObj
  //用户登录信息存储在localStorage中
  localStorage.setItem('TOKEN',token)
  localStorage.setItem('USERINFO',JSON.stringify(user))
  return {type:SAVE_USER_INFO,data:userObj}
}
//退出登录 --- admin组件
export const signOut = () => {
  // 清除本地存储
  localStorage.clear()
  return {type:SIGNOUT}
}