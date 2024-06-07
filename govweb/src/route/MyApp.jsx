import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const MyApp = () => {
  const documentType = useSelector((store) => store.documentType);
  const datetime = useSelector((store) => store.datetime);

  const applicationstatus = useSelector((store) => store.applicationstatus);
  const applicationData = {
    serviceName: documentType.header,
    applicationDate: datetime.date,
    applicationTime: datetime.time,
    paymentMode: "offline",
    status: applicationstatus.status,
  };

  useEffect(() => {
    const Controller = new AbortController();
    fetch("http://localhost:8082/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicationData),
    }).then((res) => res.json());

    return () => {
      Controller.abort();
    };
  }, []);

  return (
    <div className="python" style={{ marginBottom: "50px" }}>
      <h2>Application Status</h2>
      <table className="python-table">
        <thead>
          <tr>
            <th>Application Number</th>
            <th>Service Name</th>
            <th>Application Date</th>
            <th>Application Time</th>
            <th>Payment Mode</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{applicationData.serviceName}</td>
            <td>{applicationData.applicationDate}</td>
            <td>{applicationData.applicationTime}</td>
            <td>{applicationData.paymentMode}</td>
            <td>{applicationstatus.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyApp;
