export const selectLogin = (state) => state.login;

export const selectCredentials = (state) => state.credentials;

export const selectIsConnected = () => {
	return (state) => state.login.isConnected;
};

export const selectUser = (state) => state.user;