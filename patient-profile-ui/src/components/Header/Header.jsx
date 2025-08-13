import './Header.css'

const Header = ({ patient }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="patient-info">
          <div className="avatar">
            {patient.initials}
          </div>
          <div className="patient-details">
            <h1 className="patient-name">{patient.name}</h1>
            <p className="patient-id">Patient ID: {patient.id}</p>
          </div>
        </div>
        <div className="header-actions">
          <button className="primary-button">
            Send Message
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header