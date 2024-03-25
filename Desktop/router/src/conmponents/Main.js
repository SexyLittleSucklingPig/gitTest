import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from "../store/reducer/authSlice"


export default function MainPage() {

    const auth = useSelector((state) => state.auth);


    const dispatch = useDispatch()
    return (
        <div>

            <ul>
                <li>
                    <Link to={'/'}>首页</Link>
                </li>
                {!auth.isLogend && <li>
                    <Link to={'/auth-from'}>登录</Link>
                </li>}
                {auth.isLogend && <>
                    <li>
                        <Link to={'/profile'}>{auth.user.username}</Link>
                    </li>
                    <li><Link to={'/auth-from'} onClick={() => dispatch(logout())}>登出</Link></li>
                </>}
            </ul>
        </div>
    )
}
