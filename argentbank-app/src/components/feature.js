import './components.css';

export function Feature({ iconSrc, iconAlt, motto, description }) {
	return (
		<div class="feature-item">
			<img src={iconSrc} alt={iconAlt} class="feature-icon" />
			<h3 class="feature-item-title">{motto}</h3>
			<p>{description}</p>
		</div>
	);
}
