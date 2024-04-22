
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAppSelector } from "../../redux/store"

export const PrivateRoute = () => {
    const form = useAppSelector((state) => state.form);
    const location = useLocation();

    return form.isAuth ? (
         <Outlet />
    ) : (
         <Navigate to="/registrationForm" state={{ from: location }} replace/>
    );
};

  