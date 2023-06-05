import '../components/components.css';
import { Form } from '../components/form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export function Login() {
	const userLog = useSelector((state) => state.user.data);
	const navigate = useNavigate();

	useEffect(() => {
		if (userLog !== null) {
			navigate('/User');
		}
	});

	return (
		<>
			<main className="main bg-dark">
				<Form />
			</main>
		</>
	);
}
