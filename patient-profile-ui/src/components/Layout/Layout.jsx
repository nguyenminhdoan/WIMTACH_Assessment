import Navigation from '../Navigation/Navigation'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">
        {children}
        
        {/* Background Shapes */}
        <div className="background-shapes">
          <img src="/images/Background.png" alt="" className="bg-shape bg-rectangle" />
        </div>

      </main>
    </div>
  )
}

export default Layout