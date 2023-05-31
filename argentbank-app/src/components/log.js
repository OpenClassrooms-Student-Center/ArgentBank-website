import './components.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Log() {
	const [logged, setLogged] = useState(false);
	return logged ? (
		<div>
			<Link to={''}>
				<i class="fa fa-user-circle"></i>
				Tony
			</Link>
			<Link to={''}>
				<i class="fa fa-sign-out"></i>
				Sign Out
			</Link>
		</div>
	) : (
		<Link to={'Login'}>
			<i class="fa fa-user-circle"></i>
			Sign In
		</Link>
	);
}
