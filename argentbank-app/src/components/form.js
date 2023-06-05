import './components.css';
import { Button } from '../components/button';
import { logUser } from '../features/login/user';
import { store } from '../utils/store';
import { Navigate } from 'react-router-dom';

function log(event) {
	event.preventDefault();
	logUser(store);
	<Navigate to="/User" />;
}

export function Form() {
	return (
		<section className="sign-in-content">
			<i className="fa fa-user-circle sign-in-icon"></i>
			<h1>Sign In</h1>
			<form>
				<div className="input-wrapper">
					<label for="username">Username</label>
					<input type="text" id="username" required />
				</div>
				<div className="input-wrapper">
					<label for="password">Password</label>
					<input type="password" id="password" required />
				</div>
				<div className="input-remember">
					<input type="checkbox" id="remember-me" />
					<label for="remember-me">Remember me</label>
				</div>
				<Button
					buttonText={'Sign in'}
					onClick={log}
					classStyle={'sign-in-button'}
				/>
			</form>
		</section>
	);
}
