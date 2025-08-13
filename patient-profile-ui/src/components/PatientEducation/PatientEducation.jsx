import './PatientEducation.css'

const PatientEducation = () => {
  return (
    <div className="patient-education">
      <h3 className="education-title">Patient Education</h3>
      <div className="education-divider"></div>
      <div className="education-content">
        <div className="education-text">Coming soon</div>
        <div className="education-illustration">
          <img 
            src="../images/Range of Motion Restoration 1.png" 
            alt="Range of Motion Restoration" 
            className="education-image"
          />
        </div>
      </div>
    </div>
  )
}

export default PatientEducation