//创建分片
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    //分片名称
    name: "auth",
    //基础数据
    initialState: () => {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')
        if (!token) {
            return {
                isLogend: false,
                token: null,
                user: null,
                expirationTime: 0 //失效时间
            }
        }
        return {
            isLogend: true,
            token,
            user: JSON.parse(user),
            expirationTime: +localStorage.getItem('expirationTime')

        }
    },
    //方法
    reducers: {
        login(state, action) {
            state.isLogend = true
            state.token = action.payload.token
            state.user = action.payload.user

            //获取当前时间戳
            const currenItem = Date.now()

            const time = 1000 * 60 * 60 * 24 * 7

            state.expirationTime = currenItem + time

            localStorage.setItem('token', state.token)
            localStorage.setItem('user', JSON.stringify(
                state.user))
            localStorage.setItem('expirationTime', state.expirationTime)
        },
        logout(state) {
            state.isLogend = false
            state.token = ''
            state.user = null

            localStorage.removeItem('token')
            localStorage.removeItem('user')
        }
    }
})

//按需导出方法
export const { login, logout } = authSlice.actions