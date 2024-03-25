//创建分片
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    //分片名称
    name: "auth",
    //基础数据
    initialState: {
        isLogend: false,
        token: '',
        user: null
    },
    //方法
    reducers: {
        login(state, action) {
            state.isLogend = true
            state.token = action.payload.token
            state.user = action.payload.user
        },
        logout(state) {
            state.isLogend = false
            state.token = ''
            state.user = null
        }
    }
})

//按需导出方法
export const { login, logout } = authSlice.actions