import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
export const Error = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate ('/' , {replace: true});
        }, 3000)
        } , [])

        
    return (
        <div>
            <h1>Error</h1>
        </div>
    )
}