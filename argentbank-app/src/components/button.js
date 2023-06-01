import './components.css';

export function Button({ buttonText, onClick, classStyle }) {
	return (
		<button className={classStyle} onClick={onClick}>
			{buttonText}
		</button>
	);
}
