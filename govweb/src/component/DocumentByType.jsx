import React from "react";
import { useSelector } from "react-redux";
import Caste from "./Caste";
import IncomeProof from "./IncomeProof";

function DocumentBytype() {
  const documentType = useSelector((store) => store.documentType);

  return (
    <>
      {documentType.type === "6" && (
        <>
          <IncomeProof />
          <Caste />
        </>
      )}
      {documentType.type === "5" && <IncomeProof />}
      {documentType.type === "4" && <Caste />}

      <div className="doc-req-section">
        <div class="doc-req-card">
          <h3 class="doc-req-card-heading">Mandatory Document</h3>
          <ul class="doc-req-list">
            {documentType.header ===
              "Caste Certificate (SEBC) Directorate Developing Caste Welfare" && (
              <>
                <li>none</li>
              </>
            )}
            {documentType.header === "income" && (
              <>
                <li>Ration Card</li>
                <li>Affidavit</li>
              </>
            )}
            {documentType.header === "rationcard" && (
              <>
                <li>Original Ration Card</li>
                <li>True copy of Registered Sale</li>
                <li>Copy of probate obtained on bases of Will</li>
                <li>Marriage Certificate</li>
              </>
            )}
            {documentType.header === "ews" && (
              <>
                <li>True Copy of Birth Certificate</li>
                <li>7/12 Certificate</li>
                <li>Affidavit attached with the application.</li>
              </>
            )}
            {documentType.header === "sebc" && (
              <>
                <li>
                  The original applicant who is not a resident of the state of
                  Gujarat but you are migrated from 01/04/1978 in gujarat.,for
                  that proof document.
                </li>
              </>
            )}
            {documentType.header === "domicile" && (
              <>
                <li>Proof of Parent’s Job/Business</li>
                <li>Domicile by Birth (Birth Certificate)</li>
                <li>Certificate of Talati.</li>
                <li>No Objection Certificate of Police Station</li>
                <li>Character Certificate</li>
                <li>Affidavit</li>
                <li>Last 10 years residence proof</li>
                <li>Applicant Answer</li>
                <li>Panchnamu</li>
              </>
            )}
            {documentType.header === "marriage" && (
              <>
                <li>Any Document of marriage proof</li>
                <li>Applicant Address proof</li>
                <li>Any other Document</li>
              </>
            )}
            {documentType.header === "electric" && (
              <>
                <li>Bank PassBook / Cancel Cheque</li>
              </>
            )}
            {documentType.header === "noncreamy" && (
              <>
                <li>Other necessary documents</li>
                <li>True Copy of Caste Certificate of Father/Uncle/Aunty</li>
                <li>Recommendation of Talati</li>
                <li>Panchnamu</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DocumentBytype;
