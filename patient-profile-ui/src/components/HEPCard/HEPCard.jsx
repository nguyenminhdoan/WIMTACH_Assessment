import './HEPCard.css'

const HEPCard = ({ patient }) => {
  return (
    <div className="hep-card">
      {/* Right side - Edit HEP button */}
      <div className="edit-hep-section">
        <button className="edit-hep-button">Edit HEP</button>
      </div>
      
      {/* Left side - New HEP content */}
      <div className="hep-content-section">
        <div className="hep-header">
          <h3 className="hep-title">New HEP for {patient.name}</h3>
          <div className="hep-edited">Edited 16 hours ago</div>
        </div>
        
        <div className="hep-stats">
          <div className="hep-stat-item">
            <div className="hep-stat-label">Sessions per Day</div>
            <div className="hep-stat-value">{patient.sessionsPerDay}</div>
          </div>
          <div className="hep-stat-divider"></div>
          <div className="hep-stat-item">
            <div className="hep-stat-label">Total Reps</div>
            <div className="hep-stat-value">{patient.totalReps}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HEPCard