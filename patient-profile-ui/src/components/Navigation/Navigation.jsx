import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-content">  
        {/* Navigation Icons */}
        <div className="nav-icons">
          <div className="nav-item">
            <img src="/images/Vector2.png" alt="Vector2" className="nav-icon" />
          </div>
          <div className="nav-item active">
            <img src="/images/home.png" alt="Home" className="nav-icon" />
          </div>
          <div className="nav-item">
            <img src="/images/Vector1.png" alt="Vector1" className="nav-icon" />
          </div>
          <div className="nav-item">
            <img src="/images/Vector.png" alt="Vector" className="nav-icon" />
          </div>
        </div>
        
        {/* Bottom Icon */}
        <div className="nav-bottom">
          <div className="nav-item">
            <img src="/images/logout.png" alt="Logout" className="nav-icon" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation