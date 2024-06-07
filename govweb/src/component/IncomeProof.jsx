import React from "react";
import { shallowEqual } from "react-redux";

function IncomeProof() {
  return (
    <>
      <div className="doc-req-section">
        <div class="doc-req-card">
          <h3 class="doc-req-card-heading">Income Proof (Any One)</h3>
          <ul class="doc-req-list">
            <li>
              Employer Certificate (if employed with Govt, Semi Govt or any Govt
              Undertaking)
            </li>
            <li>If salaried (Form :16-A and ITR for last 3 years)</li>
            <li>
              If in business (ITR of Business for last 3 years and Balance Sheet
              of Business)
            </li>
            <li>Declaration before Talati (Service Related)</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default IncomeProof;
