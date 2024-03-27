import React from 'react'
import { useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Needauth(props) {
    const auth =useSelector(state=>state.auth)
    const location=useLocation()
    return auth.isLogend ? props.children : <Navigate to='/auth-from' replace state={{preLocation:location} } ></Navigate>
}
