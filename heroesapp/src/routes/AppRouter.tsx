import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../components/screens/login/login"
import { useAppSelector } from "../hooks/redux"
import { ProtectedRouter } from "./ProtectedRouter"

export const AppRouter= ()=>{

    const isLogged= useAppSelector(state=> state.auth.isLogged)

    return(
        <>
        <Routes>
            {isLogged 
            ? <Route path="/*" element={<ProtectedRouter/>}/>
                : <Route path="/*" element={<Navigate to={"/Login"}/>}></Route>
            }
            <Route path="/login" element={<Login />}/>
        </Routes>
        </>
    )
}