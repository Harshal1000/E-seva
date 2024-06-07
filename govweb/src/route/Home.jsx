import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutSection from "./AboutSection";
// ....

// className "owl-theme" is optional
function Home() {
  return (
    <>
      {" "}
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        style={{
          maxWidth: "100%",
          alignContent: "center",
          // marginInlineStart: "12.5%",
        }}
        data-bs-ride="carousel"
      >
        <div
          class="carousel-inner"
          style={{
            borderRadius: "8px",

            padding: "5px",
            hight: "auto",
          }}
        >
          <div
            class="carousel-item active"
            style={{ width: "100%", height: "550px" }}
            data-bs-interval="2000"
          >
            <img
              src="https://img-cdn.thepublive.com/fit-in/1280x960/filters:format(webp)/prod-the-processor/media/media_files/MdJmGvPhcE6A0XNXgAUi.jpg"
              class="d-block w-100"
              style={{ width: "100%", height: "100%", objectFit: "100%" }}
              alt="..."
            />
          </div>

          <div
            class="carousel-item "
            style={{ width: "100%", height: "550px" }}
            data-bs-interval="2000"
          >
            <img
              src="https://www.india.gov.in/sites/upload_files/npi/files/ecisveep.jpg"
              class="d-block w-100"
              style={{ width: "100%", height: "100%", objectFit: "100%" }}
              alt="..."
            />
          </div>
          <div
            class="carousel-item"
            style={{ width: "100%", height: "550px" }}
            data-bs-interval="2000"
          >
            <img
              src="https://presentations.gov.in/wp-content/uploads/2020/06/Thumb_2.png?x76386"
              style={{ width: "100%", height: "100%", objectFit: "100%" }}
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container" style={{ marginTop: "20px" }}>
        <section class="bag-page">
          <div class="container-23">
            <h1 className="h1">Latest News</h1>
            <ul className="ui">
              <li className="li">
                <a href="#" className="h6">
                  Notice : Regarding OTR and Application Module 🔗 (436.21 KB)
                </a>
                <span>Feb 26, 2024</span>
              </li>
              <li className="li">
                <a href="#" className="h6">
                  Launching of new website of Commission 🔗 (25.51 KB)
                </a>
                <span>Feb 22, 2024</span>
              </li>
              <li className="li">
                <a href="#" className="h6">
                  Final Answer Keys of Computer Based Examination of Paper-I of
                  SSA/UDC Grade Limited Departmental Competitive Examination
                  2017 and Paper-II of JSA/LDC Grade Limited Departmental
                  Competitive Examination 2018 🔗 (133.79 KB)
                </a>
                <span>Feb 16, 2024</span>
              </li>
              <li className="li">
                <a href="#" className="h6">
                  Constable (Driver) Male in Delhi Police Examination, 2022 -
                  Uploading of Detailed marks 🔗 (72.39 KB)
                </a>
                <span>Feb 15, 2024</span>
              </li>
              <li className="li">
                <a href="#" className="h6">
                  Junior Secretariat Assistant/ Lower Division Clerk Grade
                  Limited Departmental Competitive Examination 2019 & 2020:
                  Uploading of Tentative Answer Keys alongwith Candidates'
                  Response Sheet(s) 🔗 (124.19 KB)
                </a>
                <span>Feb 14, 2024</span>
              </li>
            </ul>
          </div>
          <aside class="container-24">
            <p class="quote">
              "If I have the belief that I can do it, I shall surely acquire the
              capacity to do it even if I may not have it at the beginning."
            </p>
            <p class="author">- Mahatma Gandhi</p>
            <div class="logo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP1bTTfykQg4yjNtBY5Fbzlh92hEiTTGNQqQ&s"
                alt="Azadi ka Amrit Mahotsav"
                style={{ minWidth: "50%", minHeight: "50%" }}
              />
            </div>
          </aside>
        </section>

        <AboutSection />
      </div>
    </>
  );
}

export default Home;
