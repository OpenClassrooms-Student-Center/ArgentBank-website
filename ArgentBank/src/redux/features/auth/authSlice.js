import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    token: null,        // pour stocker le token d'authentification
    userId: null,    // Ajout de l'ID utilisateur
    isLoading: false,   // pour gérer l'état de chargement
    error: null,         // pour stocker les messages d'erreur
    userProfile: null,  // Nouveau champ pour stocker les infos du profil
    isAuthenticated: false, // permet de voir si une identification est en cours
};

// Action asynchrone pour la connexion
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (!response.ok) {
                return rejectWithValue(data.message || 'Échec de la connexion');
            }

            return data; // On retourne la réponse complète
        } catch (error) {
            return rejectWithValue('Erreur réseau: ' + error.message);
        }
    }
);

// Action asynchrone pour récupérer le profil
export const getUserProfile = createAsyncThunk(
    'auth/getUserProfile',
    async (_, { getState, rejectWithValue }) => {
        try {
            const token = getState().auth.token;

            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if (!response.ok) {
                return rejectWithValue(data.message || 'Échec de la récupération du profil');
            }

            return data;
        } catch (error) {
            return rejectWithValue('Erreur réseau: ' + error.message);
        }
    }
);

// action assynchrone pour la modification du userName :
export const updateUserName = createAsyncThunk(
    'auth/updateUserName',
    async ({ userName }, { getState, rejectWithValue }) => {
        try {
            const token = getState().auth.token;
            const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ userName }),
            });

            const data = await response.json();

            if (!response.ok) {
                return rejectWithValue(data.message || 'Échec de la mise à jour');
            }

            return data;
        } catch (error) {
            return rejectWithValue('Erreur réseau: ' + error.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            state.userId = null;
            state.userProfile = null;
            state.isAuthenticated = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.body.token;
                state.error = null;
                state.isAuthenticated = true; // Mettre à jour l'état d'authentification
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getUserProfile.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userProfile = action.payload.body;
                state.userId = action.payload.body.id;
                state.error = null;
                state.isAuthenticated = true; // Confirmer l'état d'authentification
            })
            .addCase(getUserProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateUserName.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updateUserName.fulfilled, (state, action) => {
                state.isLoading = false;
                // Mettre à jour à la fois userProfile et les autres champs pertinents
                state.userProfile = {
                    ...state.userProfile,
                    userName: action.payload.body.userName
                };
                state.error = null;
            })
            .addCase(updateUserName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { logout } = authSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUserName = (state) => state.auth.userProfile?.userName;

export default authSlice.reducer;