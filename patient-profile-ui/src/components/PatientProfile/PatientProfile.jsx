import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import HEPCard from "../HEPCard/HEPCard";
import StatsPanel from "../StatsPanel/StatsPanel";
import PatientEducation from "../PatientEducation/PatientEducation";
import "./PatientProfile.css";

const PatientProfile = () => {
  const { id } = useParams();

  // Mock patient data
  const patient = {
    name: "Wimtach Client",
    lastActive: "Mar 20, 2019 23:14",
    phone: "(555) 555-5555",
    email: "wimtachclient@hotmail.com",
    injuryLocation: "Right",
    diagnosis: "Other specified malignant neoplasm of skin, unspecified - C4499",
    sessionsPerDay: 5,
    totalReps: 254,
    weeksEnrolled: 9,
    compliance: "16/30"
  };

  return (
    <Layout>
      <div className="patient-profile-container">
        <div className="contact-card">
          {/* Breadcrumb */}
          <div className="breadcrumb">Dashboard / Wimtach Client</div>

          {/* Patient Info Section */}
          <div className="patient-info-section">
            {/* Left side - Patient info and discharge button */}
            <div className="patient-left-section">
              <div className="patient-info-row">
                <div className="avatar-container">
                  <div className="avatar-circle">
                    <div className="avatar-text">WI</div>
                  </div>
                </div>
                <div className="patient-text-section">
                  <h2 className="patient-name">Wimtach Client</h2>
                  <div className="last-active">Last Active: Mar 20, 2019 23:14</div>
                </div>
              </div>
              <button className="discharge-button">Discharge Patient</button>
            </div>

            {/* Right side - Contact info box with shadow */}
            <div className="patient-right-section">
              <div className="contact-box">
                <div className="contact-wrapper-1">
                  <div className="contact-wrapper-2">
                    <div className="contact-inner-box">
                      <div className="contact-grid">
                        <div className="contact-column-1">
                          <div className="contact-item">
                            <div className="contact-label">Phone:</div>
                            <div className="contact-value">(555) 555-5555</div>
                          </div>
                          
                          <div className="contact-item">
                            <div className="contact-label">Injury Location:</div>
                            <div className="contact-value">Right</div>
                          </div>
                        </div>
                        
                        <div className="contact-column-2">
                          <div className="contact-item">
                            <div className="contact-label">Email:</div>
                            <div className="contact-value">wimtachclient@hotmail.com</div>
                          </div>
                          
                          <div className="contact-item">
                            <div className="contact-label">Diagnosis:</div>
                            <div className="contact-value">
                              Other specified malignant neoplasm of skin, unspecified - C4499
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Edit Icon */}
                    <div className="edit-icon">
                      <svg className="edit-svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#FFFFFF"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frame 24172 Section */}
        <div className="frame-24172-container">
          <div className="frame-24172-left">
            <HEPCard patient={patient} />
            <PatientEducation />
          </div>
          <div className="frame-24172-right">
            <StatsPanel patient={patient} />
          </div>

          {/* Floating Action Button */}
          <div className="floating-button-container">
            <div className="floating-button-bg"></div>
            <div className="floating-button-icon">
              <img src="/images/Group 2801.png" alt="Action Button" />
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default PatientProfile;