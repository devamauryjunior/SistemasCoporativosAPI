import {createBrowserRouter, Navigate} from 'react-router-dom'
import { ProtectedRoutes } from './hooks/ProtectedRoutes'
import { Auth } from './hooks/Auth'


//pages
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPag'
import { RegisterPage } from './pages/RegisterPage'

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/login',
        element: !Auth ? <LoginPage/> : <Navigate to='/painel'/>
    },
    {
        path: '/register',
        element: !Auth ? <RegisterPage/> : <Navigate to='/painel'/>
    },
    {
        path: '/clientes',
        element: <ProtectedRoutes>
            <div>Usuarioesta logado.</div>
        </ProtectedRoutes>
    },
    {
        path: '/painel',
        element: <ProtectedRoutes>
            <div>Usuario na rota painel.</div>
        </ProtectedRoutes>
    }

])

export default myRouter