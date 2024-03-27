import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './conmponents/pages/HomePage';
import ProFilePage from './conmponents/pages/ProFilePage';
import AuthForm from './conmponents/pages/AuthFrom';
import LayLout from './conmponents/LayLout';
import Needauth from './conmponents/Needauth';
import useAutoLogout from './hooks/useAutoLogout'
import Students from './conmponents/pages/students';


function App() {

	useAutoLogout()

	return (
		<LayLout>
			<Routes>
				<Route path={'/'} element={<HomePage />}></Route>

				<Route path={'/profile'} element={
					<Needauth>
						< ProFilePage />
					</Needauth>
				}></Route>
				<Route path={'/auth-from'} element={<AuthForm />}></Route>
				<Route path={'/students'} element={<Needauth><Students /></Needauth>}></Route>
			</Routes>
		</LayLout >
	);
}

export default App;
