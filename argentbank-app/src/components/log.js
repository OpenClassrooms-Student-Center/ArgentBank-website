import './components.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Log() {
	const [logged, setLogged] = useState(false);
	return logged ? (
		<div>
			<Link to={'user.html'}>
				<i class="fa fa-user-circle"></i>
				Tony
			</Link>
			<Link to={'index.html'}>
				<i class="fa fa-sign-out"></i>
				Sign Out
			</Link>
		</div>
	) : (
		<Link to={'sign-in.html'}>
			<i class="fa fa-user-circle"></i>
			Sign In
		</Link>
	);
}
