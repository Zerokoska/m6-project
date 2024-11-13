import Login from "./Login"
import Logout from "./Logout"
import { Link } from "react-router-dom"

function Navigation({setContent}) {
    return(
        <nav className="left-menu">

        <div className="left-menu__visibility-toggle">&#60;</div>
  
        <div className="left-menu__content">
  
            <div className="left-menu__header">
                <img className="left-menu__seal" src="/images/img/mi6-seal.png" alt="MI6 seal" />
            </div>
  
            <div className="left-menu__links">
                <Link className="home" to="/" onClick={()=>{setContent("/")}}>Home</Link>
                <Link className="people_of_interest" onClick={()=>{setContent("people_of_interest")}} to="/">People of interest</Link>
                <Link className="missions" to="/" onClick={()=>{setContent("missions")}}>Missions</Link>
                <Link to="/login" onClick={()=>{}}>Login</Link>
                <Link to="/register">Register</Link>
                <Logout />
            </div>
        </div>

      </nav>
    )
    
}

export default Navigation;