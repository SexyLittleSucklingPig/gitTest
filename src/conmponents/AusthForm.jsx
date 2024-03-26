import React, { useRef } from 'react'
//redux触发器
import { useDispatch } from "react-redux"
//RTKQ接口引入
import { useRegisterMutation, useLoginMutation } from '../store/api/authApi'
//redux 数据引入
import { login } from "../store/reducer/authSlice"
//路由跳转
import { useNavigate } from 'react-router-dom'


export default function AusthForm() {

    const [isloging, setIsloging] = React.useState(false)
    //注册接口 通过RTKQ引入结构获取到 regFn方法 ,以及其他响应数据 
    const [regFn, { error: regError }] = useRegisterMutation()
    //登录接口
    const [logFn, { error: logError }] = useLoginMutation()

    //dispatch触发器
    const dispatch = useDispatch()


    //路由跳转
    const navigate = useNavigate()

    //通过 useRef 获取输入框
    const userNameInp = useRef()
    const pwdInp = useRef()
    const emailInp = useRef()

    //按钮点击事件
    const submitHandel = (e) => {
        //取消表单默认提交
        e.preventDefault()
        //获取输入框内容
        const username = userNameInp.current.value
        const password = pwdInp.current.value
        //是否登录
        if (isloging) {
            //触发登录接口
            logFn({ identifier: username, password }).then(res => {
                if (!res.error) {
                    //触发redux触发器 修改redux数据分片内的数据
                    dispatch(login({
                        token: res.data.jwt,
                        user: res.data.user,
                    }))
                    //跳转路由
                    navigate('/', { replace: true })
                }
            })
        } else {
            //触发注册接口
            const email = emailInp.current.value
            regFn({ username, password, email }).then((res) => {
                if (!res.error) {
                    setIsloging(true)
                    pwdInp.current.value = ''
                }
            })
        }
    }

    return (
        <div>
            <h1>21121</h1>
            {/* <h2>
                {isloging ? '登录' : '注册'}嗨害嗨
            </h2> */}
            <p style={{ color: 'red' }}>
                {regError ? regError.data.error.message : ''}
            </p>
            <from>
                <div>
                    <input ref={userNameInp} placeholder='用户名'></input>
                </div>
                <div>
                    <input ref={pwdInp} placeholder='密码'></input>
                </div>
                {!isloging && <div>
                    <input ref={emailInp} placeholder='注册'></input>
                </div>}
                <div>
                    <button onClick={submitHandel}> {isloging ? '登录' : '注册'}</button>
                    <a href='#' onClick={event => {
                        event.preventDefault()
                        setIsloging(!isloging)
                    }}>
                        {isloging ? '没有账号？去注册' : '已有账号？去登录'}
                    </a>

                </div>
            </from>
        </div >
    )
}
