import './StatsPanel.css'

const StatsPanel = ({ patient }) => {
  return (
    <div className="stats-panel">
      {/* Big Div 1 - Stats Container */}
      <div className="stats-container">
        {/* Stats Content */}
        <div className="stats-card">
          <div className="stats-card-right">
            {/* Div 1: Stats Header */}
          <div className="stats-header">
            <h3 className="stats-title">Stats</h3>
            <div className="stats-period">for Period 3</div>
          </div>
          {/* Div 2: Stats Content */}
          <div className="stats-content">
            <div className="stats-streaks">
              <div className="streaks-label">Streaks</div>
              <img 
                src="/images/Frame 24155.png" 
                alt="Streak" 
                className="streak-image"
              />
            </div>
          </div>
          </div>

          {/* Div 2: Calendar and Metrics */}
          <div className="stats-content">
            <div className="stats-calendar">
              <div className="calendar-days">
                <div className="day-item">
                  <img src="/images/Frame 24141.jpg" alt="Wed" className="day-icon" />
                  <span className="day-label">Wed</span>
                </div>
                <div className="day-item">
                  <img src="/images/Frame 24141.jpg" alt="Thu" className="day-icon" />
                  <span className="day-label">Thu</span>
                </div>
                <div className="day-item">
                  <img src="/images/Frame 24141.jpg" alt="Fri" className="day-icon" />
                  <span className="day-label">Fri</span>
                </div>
                <div className="day-item">
                  <img src="/images/Frame 24144.jpg" alt="Sat" className="day-icon" />
                  <span className="day-label">Sat</span>
                </div>
                <div className="day-item">
                  <img src="/images/Frame 24141.jpg" alt="Sun" className="day-icon" />
                  <span className="day-label">Sun</span>
                </div>
                <div className="day-item">
                  <img src="/images/Frame 24141.jpg" alt="Mon" className="day-icon" />
                  <span className="day-label">Mon</span>
                </div>
                <div className="day-item">
                  <img src="/images/Frame 24141.jpg" alt="Today" className="day-icon" />
                  <span className="day-label">Today</span>
                </div>
              </div>
            </div>

            <div className="stats-metrics">
              <div className="metric-item">
                <div className="metric-label">Weeks Enrolled</div>
                <div className="metric-value">{patient.weeksEnrolled}</div>
              </div>
              <div className="metric-item">
                <div className="metric-label">Compliance</div>
                <div className="metric-value">{patient.compliance}</div>
              </div>
            </div>
          </div>
        </div>

        <button className="view-stats-button">View Stats</button>
      </div>

      <div className="billing-container">
        <button className="view-billing-button">
          <span className="dollar-icon">$</span>
          View Billing Details
        </button>
      </div>
    </div>
  )
}

export default StatsPanel