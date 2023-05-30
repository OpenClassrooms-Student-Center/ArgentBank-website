import './components.css';
import { useState } from 'react';

export function Log() {
	const [logged, setLogged] = useState(false);
	return logged ? (
		<div>
			<a class="main-nav-item" href="./user.html">
				<i class="fa fa-user-circle"></i>
				Tony
			</a>
			<a class="main-nav-item" href="./index.html">
				<i class="fa fa-sign-out"></i>
				Sign Out
			</a>
		</div>
	) : (
		<a class="main-nav-item" href="./sign-in.html">
			<i class="fa fa-user-circle"></i>
			Sign In
		</a>
	);
}
