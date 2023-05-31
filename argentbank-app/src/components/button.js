import './components.css';

export function Button({ buttonText, onClick }) {
	return (
		<button class="sign-in-button" onClick={onClick}>
			{buttonText}
		</button>
	);
}
