export async function LogUser(event) {
	event.preventDefault();
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
		const token = data.body.token;
		const newSettings = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};
		const getProfile = await fetch(
			'http://localhost:3001/api/v1/user/profile',
			newSettings
		);
		const profileData = await getProfile.json();
		console.log(profileData);
	} catch (error) {
		console.log(error);
	}
}
