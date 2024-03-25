//RTKQ 
import { createApi, fetchBaseQuery, setupListeners } from "@reduxjs/toolkit/query/react";
const authApi = createApi({
    //分片名称
    reducerPath: 'authApi',
    //请求根路径
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),
    //具体接口
    endpoints(bind) {   //端点，bind为构建器
        return {
            //注册+
            register: bind.mutation({ //请求接口
                query(user) {
                    return {
                        url: 'auth/local/register',
                        method: 'post',
                        body: user
                    }
                }
            }),
            //登录
            login: bind.mutation({
                query(user) {
                    return {
                        url: 'auth/local',
                        method: 'post',
                        body: user //identifier
                    }
                }
            })
        }
    }
})
//导出接口命名
export const { useRegisterMutation, useLoginMutation } = authApi
export default authApi


