//引入创建 store 钩子 configureStore
import { configureStore } from "@reduxjs/toolkit";
//引入RTKQ接口 分片
import authApi from "./api/authApi";
import studentApi from "./api/studentApi";
//引入reducer 分片
import { authSlice } from "./reducer/authSlice"
//监听更新
import { setupListeners } from "@reduxjs/toolkit/query";


const store = configureStore({
    //结合分片
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [studentApi.reducerPath]: studentApi.reducer,
        auth: authSlice.reducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(authApi.middleware, studentApi.middleware)
});

setupListeners(store.dispatch)


export default store
