import logo from '../assets/img/argentBankLogo.png';
import './components.css';
import { Link } from 'react-router-dom';

export function Header({ children }) {
	return (
		<nav class="main-nav">
			<Link to={''}>
				<img
					class="main-nav-logo-image"
					src={logo}
					alt="Argent Bank Logo"
				/>
				<h1 class="sr-only">Argent Bank</h1>
			</Link>
			<div>{children}</div>
		</nav>
	);
}
