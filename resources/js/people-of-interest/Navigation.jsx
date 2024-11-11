
function Navigation() {
    return(
        <nav className="left-menu">

        <div className="left-menu__visibility-toggle">&#60;</div>
  
        <div className="left-menu__content">
  
            <div className="left-menu__header">
                <img className="left-menu__seal" src="/images/img/mi6-seal.png" alt="MI6 seal" />
            </div>
  
            <div className="left-menu__links">
                <a to="/">Home</a>
                <a to="/people-of-interest">People of interest</a>
            </div>
        </div>
        
      </nav>
    )
    
}

export default Navigation;