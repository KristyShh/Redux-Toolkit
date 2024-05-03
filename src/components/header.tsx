import { useThemeContext } from "../theme/useThemeContext"
import { NavLink } from "react-router-dom"
export const Header = () => {
    const { toggleTheme } = useThemeContext()
    return (
        <header>
        <div className={`container`}>
            <h2>logo</h2>
            <ol>
                <li>
                    <NavLink to="/">Posts</NavLink>
                </li>
                <li>
                    <NavLink to="/counter">Counter</NavLink>
                </li>
                <li>
                    <NavLink to="/UserPage">UserInfo</NavLink>
                </li>
                <li>
                    <NavLink to="/Private Info">Private</NavLink>
                </li>
            </ol>

            
            <button onClick={toggleTheme}>change theme</button>
            <button>
                <NavLink to="/login">LogIn</NavLink>
                </button>
        </div>
    </header>
    )
}