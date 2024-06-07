import React from "react";
import { useSelector } from "react-redux";

function ShowProfile() {
  const profile = useSelector((store) => store.profile);
  const userID = useSelector((store) => store.userID);

  const userprofile = profile.filter((item) => {
    const itemIndex = userID.indexOf(item.username);
    return itemIndex >= 0;
  });

  return (
    <div className="body-1">
      <main>
        <section className="section">
          {/* Render the firstName property only if it exists */}
          {userprofile.length > 0 &&
            userprofile[0].hasOwnProperty("firstName") && (
              <h2>
                {userprofile[0].firstName} {""}
                {userprofile[0].lastName}
              </h2>
            )}
          <p>Father's Name: {userprofile[0].middleName}</p>

          <p>Mobile Number: {userprofile[0].phone}</p>
          <p>
            Email ID:{"  "}
            {userprofile[0].email}{" "}
          </p>
          <p>Age: {userprofile[0].age} years</p>
          <p>Gender: {userprofile[0].gender}</p>

          <p>Birth date: {userprofile[0].birthDate}</p>

          <p>address: {userprofile[0].address}</p>
        </section>
      </main>
    </div>
  );
}

export default ShowProfile;
