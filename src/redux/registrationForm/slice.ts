import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationState {
    Name: string;
    password: string;
    isAuth: boolean;
}

const initialState: RegistrationState = {
    Name: '',
    password: '',
    isAuth: false
};

export const registrationFormSlice = createSlice({
    name: 'registrationForm',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.Name = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setAuth: (state) => {
            // Проверяем, заполнены ли поля Name и password
            if (state.Name && state.password) {
                state.isAuth = true;
            }
        }
    }
});

export const { setName, setPassword, setAuth } = registrationFormSlice.actions;


      
