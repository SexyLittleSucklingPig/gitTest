import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './conmponents/pages/HomePage';
import ProFilePage from './conmponents/pages/ProFilePage';
import AuthForm from './conmponents/pages/AuthFrom';
import LayLout from './conmponents/LayLout';
function App() {
	return (
		<LayLout>
			<Routes>
				<Route path={'/'} element={<HomePage />}></Route>
				<Route path={'/profile'} element={<ProFilePage />}></Route>
				<Route path={'/auth-from'} element={<AuthForm />}></Route>
			</Routes>
		</LayLout>
	);
}

export default App;
