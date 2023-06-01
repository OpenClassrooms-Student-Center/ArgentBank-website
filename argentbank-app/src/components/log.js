import './components.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Log() {
	const [logged, setLogged] = useState(false);
	return logged ? (
		<div>
			<Link to={''}>
				<i className="fa fa-user-circle"></i>
				Tony
			</Link>
			<Link to={''}>
				<i className="fa fa-sign-out"></i>
				Sign Out
			</Link>
		</div>
	) : (
		<Link to={'Login'}>
			<i className="fa fa-user-circle"></i>
			Sign In
		</Link>
	);
}
