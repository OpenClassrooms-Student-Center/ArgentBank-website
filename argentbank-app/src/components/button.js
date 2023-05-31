import './components.css';

export function Button({ buttonText, onClick, classStyle }) {
	return (
		<button class={classStyle} onClick={onClick}>
			{buttonText}
		</button>
	);
}
