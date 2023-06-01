import './components.css';

export function Feature({ iconSrc, iconAlt, motto, description }) {
	return (
		<div className="feature-item">
			<img src={iconSrc} alt={iconAlt} className="feature-icon" />
			<h3 className="feature-item-title">{motto}</h3>
			<p>{description}</p>
		</div>
	);
}
