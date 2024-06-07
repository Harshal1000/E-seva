import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationActions } from "../store/ApplicationSlice";
import { FcApproval } from "react-icons/fc";
const ApplicationTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const Controller = new AbortController();
    fetch("http://localhost:8082/items")
      .then((res) => res.json())
      .then(({ items }) => dispatch(ApplicationActions.AddApplication(items)));

    return () => {
      Controller.abort();
    };
  }, []);
  const applicationstatus = useSelector((store) => store.applicationstatus);
  const Id = useSelector((store) => store.id);
  console.log(applicationstatus.Application);
  const applicationData = applicationstatus.Application;
  const status = applicationstatus.status;
  console.log(applicationData);
  const handleClick1 = () => {
    dispatch(ApplicationActions.marksuccess());
    console.log("success marked");
  };

  return (
    <div className="python">
      {applicationData.length === 0 ? (
        <h2>There is not any Appointment Request Today.</h2>
      ) : (
        <>
          <h2>make appointment</h2>

          <table className="python-table">
            <thead>
              <tr>
                <th>Application Number</th>
                <th>Service Name</th>
                <th>Application Date</th>
                <th>Application Time</th>
                <th>Payment Mode</th>
                <th>Status</th>
                <th>confirmation</th>
              </tr>
            </thead>
            <tbody>
              {applicationData.map((applicationData) => (
                <>
                  <tr>
                    <td>AB{Math.floor(applicationData.id * 100)}</td>

                    <td>{applicationData.serviceName}</td>
                    <td>{applicationData.applicationDate}</td>
                    <td>{applicationData.applicationTime}</td>
                    <td>{applicationData.paymentMode}</td>
                    <td>{status}</td>
                    <td>
                      <span class="badge text-bg-white" onClick={handleClick1}>
                        <FcApproval style={{ fontSize: "30px" }} />
                      </span>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ApplicationTable;
