import React from 'react';
import '../components/components.css';
import { Features } from '../components/features';
import { Banner } from '../components/banner';

export function Home() {
	return (
		<div className="App">
			<Banner />
			<Features />
		</div>
	);
}
