export async function Login(e) {
	e.preventDefault();
	const settings = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: 'tony@stark.com',
			password: 'password123',
		}),
	};
	try {
		const response = await fetch(
			'http://localhost:3001/api/v1/user/login',
			settings
		);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}
