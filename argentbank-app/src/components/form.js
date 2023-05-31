import './components.css';
import { Button } from '../components/button';

export function Form() {
	return (
		<section class="sign-in-content">
			<i class="fa fa-user-circle sign-in-icon"></i>
			<h1>Sign In</h1>
			<form>
				<div class="input-wrapper">
					<label for="username">Username</label>
					<input type="text" id="username" />
				</div>
				<div class="input-wrapper">
					<label for="password">Password</label>
					<input type="password" id="password" />
				</div>
				<div class="input-remember">
					<input type="checkbox" id="remember-me" />
					<label for="remember-me">Remember me</label>
				</div>
				<Button
					buttonText={'Sign in'}
					onClick={''}
					classStyle={'sign-in-button'}
				/>
			</form>
		</section>
	);
}
