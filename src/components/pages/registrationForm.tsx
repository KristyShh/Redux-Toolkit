import React from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setAuth, setName, setPassword } from "../../redux/registrationForm/slice";
import { useNavigate, useLocation } from 'react-router-dom';

export const RegistrationForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.state?.from?.pathname || '/';

    const { Name, password } = useAppSelector((state) => state.form);

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(event.target.value));
    };

    const onPassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(event.target.value));
    };

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (Name && password) {
            dispatch(setAuth( )); 
            
            navigate(path, { replace: true });
        } else {
            alert("Please fill in both Name and Password fields.");
        }
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={Name}
                    onChange={onNameChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onPassChange}
                />
                <button type="submit">Login </button>
            </form>
        </div>
    );
};
