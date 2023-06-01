import './components.css';
import { Button } from '../components/button';
import { Login } from '../features/login/Login';

export function Form() {
	return (
		<section className="sign-in-content">
			<i className="fa fa-user-circle sign-in-icon"></i>
			<h1>Sign In</h1>
			<form>
				<div className="input-wrapper">
					<label for="username">Username</label>
					<input type="text" id="username" />
				</div>
				<div className="input-wrapper">
					<label for="password">Password</label>
					<input type="password" id="password" />
				</div>
				<div className="input-remember">
					<input type="checkbox" id="remember-me" />
					<label for="remember-me">Remember me</label>
				</div>
				<Button
					buttonText={'Sign in'}
					onClick={Login}
					classStyle={'sign-in-button'}
				/>
			</form>
		</section>
	);
}
