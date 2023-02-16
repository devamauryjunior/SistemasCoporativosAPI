import { Navigate } from "react-router-dom"


export const ProtectedRoutes = ({ children }) =>{
    const Auth = localStorage.getItem('meusite.com.br') !== null
    if(!Auth){
        return <Navigate to='/login' />
    }
    return children
}