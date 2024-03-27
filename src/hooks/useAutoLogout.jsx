import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/reducer/authSlice'
const useAutoLogout=()=>{
    const auth = useSelector(state => state.auth)
	const dispath = useDispatch()
	//自动登出
	useEffect(() => {
		const timeout = auth.expirationTime - Date.now()
		if (timeout < 60000) {
			dispath(logout())
			return
		}
		const timer = setTimeout(() => {
			dispath(logout())
		}, timeout)
		return () => {
			clearTimeout(timer)
		}
	}, [auth])
}
export default useAutoLogout