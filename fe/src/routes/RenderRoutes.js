import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "views/Auth/AuthWrapper";
import MainRoutes from "./MainRoutes";


export const RenderRoutes = () => {

        const { user } = AuthData();
        
        return (
             <Routes>
             { MainRoutes.map((r, i) => {
                  
                  if (r.isPrivate && user.isAuthenticated) {
                       return <Route key={i} path={r.path} element={r.element}/>
                  } else if (!r.isPrivate) {
                       return <Route key={i} path={r.path} element={r.element}/>
                  } else return false
             })}
             
             </Routes>
        )
   }
   
   export const RenderMenu = () => {
   
        const { user, logout } = AuthData()
   
        const MenuItem = ({r}) => {
             return (
                  <div className="menuItem"><Link to={r.path}>{r.name}</Link></div>
             )
        }
        return (
             <div className="menu">
                  { nav.map((r, i) => {
   
                       if (!r.isPrivate && r.isMenu) {
                            return (
                                 <MenuItem key={i} r={r}/>
                            )
                       } else if (user.isAuthenticated && r.isMenu) {
                            return (
                                 <MenuItem key={i} r={r}/>
                            )
                       } else return false
                  } )}
   
                  { user.isAuthenticated ?
                  <div className="menuItem"><Link to={'#'} onClick={logout}>Log out</Link></div>
                  :
                  <div className="menuItem"><Link to={'login'}>Log in</Link></div> }
             </div>
        )
   }