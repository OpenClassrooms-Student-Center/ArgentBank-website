import produce from 'immer';

const initialState = {
	status: 'void',
	data: null,
	error: null,
};

const FETCHING = 'login/fetching';
const RESOLVED = 'login/resolved';
const REJECTED = 'login/rejected';

const loginFetching = () => ({ type: FETCHING });
const loginResolved = (data) => ({ type: RESOLVED, payload: data });
const loginRejected = (error) => ({ type: REJECTED, payload: error });

export async function logUser(store) {
	const status = store.getState().user.status;

	if (status === 'pending' || status === 'updating') {
		return;
	}
	store.dispatch(loginFetching());
	const email = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const settings = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: email,
			password: password,
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
		store.dispatch(loginResolved(profileData));
	} catch (error) {
		store.dispatch(loginRejected(error));
	}
}

export default function userReducer(state = initialState, action) {
	return produce(state, (draft) => {
		switch (action.type) {
			case FETCHING: {
				if (draft.status === 'void') {
					draft.status = 'pending';
					return;
				}
				if (draft.status === 'rejected') {
					draft.error = null;
					draft.status = 'pending';
					return;
				}
				if (draft.status === 'resolved') {
					draft.status = 'updating';
					return;
				}
				return;
			}
			case RESOLVED: {
				if (draft.status === 'pending' || draft.status === 'updating') {
					draft.data = action.payload;
					draft.status = 'resolved';
					return;
				}
				return;
			}
			case REJECTED: {
				if (draft.status === 'pending' || draft.status === 'updating') {
					draft.error = action.payload;
					draft.data = null;
					draft.status = 'rejected';
					return;
				}
				return;
			}
			default:
				return;
		}
	});
}
