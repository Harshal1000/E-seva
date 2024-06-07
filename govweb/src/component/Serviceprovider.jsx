import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DocumentActions } from "../store/DocumentSlice";
import { Link, useNavigate } from "react-router-dom";

const Serviceprovider = () => {
  const dispactch = useDispatch();

  const navigate = useNavigate();
  const login = useSelector((store) => store.login);
  useEffect(() => {
    if (login.loginStatus === false) {
      navigate("/login");
      alert("first login");
    }
  }, []);
  return (
    <>
      <div className="container">
        <h2>Online Appoinment Services</h2>
        <h5 style={{ textAlign: "center", textShadow: "5px black" }}>
          the services will be more in future
        </h5>
        <div className="services-container">
          <div className="service-card">
            <Link
              to="/documentinfo"
              className="nav-link px-2  bottom-color"
              onClick={() => {
                dispactch(
                  DocumentActions.markType1({
                    type: "1",
                    header:
                      "Caste Certificate (SEBC) Directorate Developing Caste Welfare",
                  })
                );
              }}
            >
              <img src="https://www.digitalgujarat.gov.in/images/citizen/UnreservedCaste.png" />
              <hr />
              <h4>
                Caste Certificate (SEBC) Directorate Developing Caste Welfare
              </h4>
            </Link>
          </div>
          <div className="service-card">
            <Link
              to="/documentinfo"
              className="nav-link px-2  bottom-color"
              onClick={() => {
                dispactch(
                  DocumentActions.markType5({
                    type: "5",
                    header: "income",
                  })
                );
              }}
            >
              <img src="https://www.digitalgujarat.gov.in/images/citizen/Income.png" />
              <hr />
              <h4>Income Certificate</h4>
            </Link>
          </div>
          <div className="service-card">
            {" "}
            <Link
              to="/documentinfo"
              className="nav-link px-2  bottom-color"
              onClick={() => {
                dispactch(
                  DocumentActions.markType3({
                    type: "3",
                    header: "rationcard",
                  })
                );
              }}
            >
              <img src="https://www.digitalgujarat.gov.in/images/citizen/AddName_RC.png" />
              <hr />
              <h4>Addtion of Name in Ration Card</h4>
            </Link>
          </div>
          <div className="service-card">
            {" "}
            <Link
              to="/documentinfo"
              className="nav-link px-2  bottom-color"
              onClick={() => {
                dispactch(
                  DocumentActions.markType6({
                    type: "6",
                    header: "ews",
                  })
                );
              }}
            >
              <img src="https://www.digitalgujarat.gov.in/images/citizen/EcoWeak.png" />
              <hr />
              <h4>Eligblity Certificate for Economically Weaker Sections</h4>
            </Link>
          </div>
          <div className="service-card">
            {" "}
            <Link
              to="/documentinfo"
              className="nav-link px-2  bottom-color"
              onClick={() => {
                dispactch(
                  DocumentActions.markType3({
                    type: "3",
                    header: "rationcard",
                  })
                );
              }}
            >
              <img src="https://www.digitalgujarat.gov.in/images/citizen/AppNew_RC.png" />
              <hr />
              <h4>Application for New Ration Card</h4>
            </Link>
          </div>
          <div className="service-card">
            {" "}
            <Link
              to="/documentinfo"
              className="nav-link px-2  bottom-color"
              onClick={() => {
                dispactch(
                  DocumentActions.markType3({
                    type: "3",
                    header: "rationcard",
                  })
                );
              }}
            >
              <img src="https://www.digitalgujarat.gov.in/images/citizen/ChangeName_RC.png" />
              <hr />
              <h4>Change in Address and Other Detail in Ration Card</h4>
            </Link>
          </div>
          <div className="service-card">
            {" "}
            <Link
              to="/documentinfo"
              className="nav-link px-2  bottom-color"
              onClick={() => {
                dispactch(
                  DocumentActions.markType4({
                    type: "4",
                    header: "sebc",
                  })
                );
              }}
            >
              <img src="https://www.digitalgujarat.gov.in/images/citizen/SEBC.png" />
              <hr />
              <h4>Socially and Educationally Backward Class Certificate</h4>
            </Link>
          </div>
          <div className="service-card">
            {" "}
            <Link
              to="/documentinfo"
              className="nav-link px-2  bottom-color"
              onClick={() => {
                dispactch(
                  DocumentActions.markType2({
                    type: "2",
                    header: "domicile",
                  })
                );
              }}
            >
              <img src="https://www.digitalgujarat.gov.in/images/citizen/Domicile.png" />
              <hr />
              <h4>Domicile Certificate</h4>
            </Link>
          </div>
          <div className="service-card">
            {" "}
            <Link
              to="/documentinfo"
              className="nav-link px-2  bottom-color"
              onClick={() => {
                dispactch(
                  DocumentActions.markType3({
                    type: "3",
                    header: "rationcard",
                  })
                );
              }}
            >
              <img src="https://www.digitalgujarat.gov.in/images/citizen/RemoveName_RC.png" />
              <hr />
              <h4>Removel of Name from Ration Card</h4>
            </Link>
          </div>
          <div className="service-card">
            {" "}
            <Link
              to="/documentinfo"
              className="nav-link px-2  bottom-color"
              onClick={() => {
                dispactch(
                  DocumentActions.markType1({
                    type: "1",
                    header: "marriage",
                  })
                );
              }}
            >
              <img src="https://www.digitalgujarat.gov.in/images/citizen/RegOrMarriage.png" />
              <hr />
              <h4>Online Registration for Organizing Marriage Function</h4>
            </Link>
          </div>
          <div className="service-card">
            {" "}
            <Link
              to="/documentinfo"
              className="nav-link px-2  bottom-color"
              onClick={() => {
                dispactch(
                  DocumentActions.markType3({
                    type: "3",
                    header: "rationcard",
                  })
                );
              }}
            >
              <img src="https://www.digitalgujarat.gov.in/images/citizen/AppDuplicate_RC.png" />
              <hr />
              <h4>Application for Duplicate Ration Card</h4>
            </Link>
          </div>
          <div className="service-card">
            {" "}
            <Link
              to="/documentinfo"
              className="nav-link px-2  bottom-color"
              onClick={() => {
                dispactch(
                  DocumentActions.markType1({
                    type: "1",
                    header: "electric",
                  })
                );
              }}
            >
              <img src="https://www.digitalgujarat.gov.in/images/citizen/GSEVSS.png" />
              <hr />
              <h4>Gujarat State Electric Vehicle Subsidy Scheme</h4>
            </Link>
          </div>
          <div className="service-card">
            {" "}
            <Link
              to="/documentinfo"
              className="nav-link px-2  bottom-color"
              onClick={() => {
                dispactch(
                  DocumentActions.markType4({
                    type: "4",
                    header: "sebc",
                  })
                );
              }}
            >
              <img src="https://www.digitalgujarat.gov.in/images/citizen/SC_ST_Cast.png" />
              <hr />
              <h4>SC caste certificate</h4>
            </Link>
          </div>
          <div className="service-card">
            {" "}
            <Link
              to="/documentinfo"
              className="nav-link px-2  bottom-color"
              onClick={() => {
                dispactch(
                  DocumentActions.markType6({
                    type: "6",
                    header: "noncreamy",
                  })
                );
              }}
            >
              <img src="https://www.digitalgujarat.gov.in/images/citizen/NonCreamyLayer.png" />
              <hr />
              <h4>Non-Creamy layer Certificate For Gujarat Government</h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Serviceprovider;
