import React from "react";
import { Form, redirect } from "react-router-dom";

function RegistrationForm() {
  return (
    <div className="unbody">
      <div class="uncontainer">
        <h2>Create Profile</h2>
        <Form method="post">
          <div class="unform-group">
            <label class="unlabel" for="firstName">
              First Name
            </label>
            <input
              class="uninput"
              type="text"
              id="firstName"
              name="firstName"
              required
            />
          </div>
          <div class="unform-group">
            <label class="unlabel" for="middleName">
              Middle Name
            </label>
            <input
              class="uninput"
              type="text"
              id="middleName"
              name="middleName"
            />
          </div>
          <div class="unform-group">
            <label class="unlabel" for="lastName">
              Last Name
            </label>
            <input
              class="uninput"
              type="text"
              id="lastName"
              name="lastName"
              required
            />
          </div>
          <div class="unform-group">
            <label class="unlabel" for="age">
              Age
            </label>
            <input class="uninput" type="number" id="age" name="age" required />
          </div>
          <div class="unform-group">
            <label>Gender:</label>
            <label>
              <input type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" />
              Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" />
              Other
            </label>
          </div>
          <div class="unform-group">
            <label class="unlabel" for="email">
              Email
            </label>
            <input
              class="uninput"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div class="unform-group">
            <label class="unlabel" for="phone">
              Phone
            </label>
            <input
              class="uninput"
              type="tel"
              id="phone"
              name="phone"
              required
            />
          </div>
          <div class="unform-group">
            <label class="unlabel" for="username">
              Username
            </label>
            <input
              class="uninput"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div class="unform-group">
            <label class="unlabel" for="password">
              Password
            </label>
            <input
              class="uninput"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div class="unform-group">
            <label class="unlabel" for="confirmPassword">
              Confirm Password
            </label>
            <input
              class="uninput"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
          </div>
          <div class="unform-group">
            <label class="unlabel" for="birthDate">
              Birth Date
            </label>
            <input
              class="uninput"
              type="date"
              id="birthDate"
              name="birthDate"
              required
            />
          </div>
          <div class="unform-group">
            <label class="unlabel" for="address">
              Address
            </label>
            <textarea
              class="uninput"
              id="address"
              name="address"
              rows="3"
              required
            ></textarea>
          </div>
          <div class="unform-group">
            <button type="submit" class="login-btn">
              Register{" "}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
export async function ProfileLoader(data) {
  // const { addPost } = useContext(List);
  const pdata = await data.request.formData();
  const Data = Object.fromEntries(pdata);
  console.log(Data);

  // console.log(Data);

  fetch("http://localhost:8082/profile1", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Data),
  })
    .then((res) => res.json())
    .then((obj) => {
      // addPost(obj);
      console.log(obj);
    });
  return redirect("/home");
}
export default RegistrationForm;
