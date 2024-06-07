import React from "react";
import DocumentBytype from "../component/DocumentByType";
import DateAndTimeSelection from "./DateAndTimeSelection";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Document() {
  const login = useSelector((store) => store.login);
  const navigate = useNavigate();
  if (login.loginStatus === true) {
    navigate("/login");
  }

  return (
    <>
      <body className="body-5">
        <div class="doc-req-container">
          <h2 class="doc-req-heading">
            Note: You Need to be ready with Following Documents At Aime
            Appointment for a service and Passport size photo.
          </h2>
          <div className="doc-req-section">
            <h2 class="doc-req-card-heading">Instruction</h2>
            <div class="doc-req-card" style={{ marginLeft: "none" }}>
              <ol class="doc-req-list">
                <li>
                  Ensure punctuality; appointments will start promptly. Arrive 5
                  minutes prior to your scheduled time.
                </li>
                <li>
                  Have all necessary documents ready beforehand. Required
                  documents must be physically present during the appointment.
                </li>
                <li>
                  A strict 5-minute relaxation period will be provided before
                  the appointment. Utilize this time wisely.
                </li>
                <li>
                  Appointments are scheduled for 30 minutes. Respect this time
                  frame to accommodate all participants.
                </li>
                <li>
                  Notify well in advance if rescheduling becomes necessary. Late
                  cancellations impact scheduling and may incur penalties.
                </li>
                <li>
                  Ensure your device and internet connection are stable and
                  functional. Technical issues may disrupt the appointment.
                </li>
                <li>
                  Maintain a professional appearance during virtual
                  appointments. Dress appropriately for the corporate setting.
                </li>
                <li>
                  Stick to the agenda provided for the appointment. Prepare
                  relevant topics or questions in advance for efficient
                  discussion.
                </li>
                <li>
                  Engage actively in the appointment. Listen attentively and
                  contribute constructively to discussions.
                </li>
                <li>
                  Respect confidentiality agreements and refrain from disclosing
                  sensitive information during appointments.
                </li>
                <li>
                  Share feedback or suggestions for improving the appointment
                  process. Your input is valuable for enhancing future
                  experiences.
                </li>
                <li>
                  Maintain a courteous and respectful demeanor towards all
                  participants, including staff and fellow attendees.
                </li>
                <li>
                  Confirm your attendance prior to the appointment to avoid any
                  scheduling conflicts or misunderstandings.
                </li>
                <li>
                  Take note of any follow-up actions or tasks assigned during
                  the appointment. Timely completion is crucial for progress.
                </li>
                <li>
                  Provide accurate contact information for effective
                  communication regarding the appointment.
                </li>
              </ol>
            </div>
          </div>
          <div className="doc-req-section">
            <div class="doc-req-card">
              <h3 class="doc-req-card-heading">
                Residence Proof Attachment (Any One)
              </h3>
              <ul class="doc-req-list">
                <li>Ration Card</li>
                <li>True Copy of Electricity Bill.</li>
                <li>True Copy of Telephone Bill.</li>
                <li>True Copy of Election Card.</li>
                <li>True Copy of Passport</li>
                <li>First Page Of Bank PassBook/Cancelled Cheque</li>
                <li>Post Office Account Statement/Passbook</li>
                <li>Driving License</li>
                <li>
                  Government Photo ID cards/ service photo identity card issued
                  by PSU
                </li>
                <li>Water bill (not older than 3 months)</li>
              </ul>
            </div>
          </div>
          <div className="doc-req-section">
            <div class="doc-req-card">
              <h3 class="doc-req-card-heading">
                Identity Proof Attachment (Any One)
              </h3>
              <ul class="doc-req-list">
                <li>True Copy of Election Card.</li>
                <li>True Copy Income Tax PAN Card</li>
                <li>True Copy of Passport</li>
                <li>Driving License</li>
                <li>
                  Government Photo ID cards/ service photo identity card issued
                  by PSU
                </li>
                <li>Any Government Document having citizen photo</li>
                <li>Photo ID issued by Recognized Educational Institution</li>
              </ul>
            </div>
          </div>
          <DateAndTimeSelection />
        </div>
      </body>
    </>
  );
}

export default Document;
