import logo from '../assets/img/argentBankLogo.png';
import './components.css';

export function Header({ children }) {
	return (
		<nav class="main-nav">
			<a class="main-nav-logo" href="./index.html">
				<img
					class="main-nav-logo-image"
					src={logo}
					alt="Argent Bank Logo"
				/>
				<h1 class="sr-only">Argent Bank</h1>
			</a>
			<div>{children}</div>
		</nav>
	);
}
