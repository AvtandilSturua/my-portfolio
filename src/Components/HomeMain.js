import { useState } from "react";
import "./Style.css";
import Me from "./Gallery/me.jpg";
import Weather from "./Gallery/weather.png";
import Todo from "./Gallery/todo.png";
import Workout from "./Gallery/workout.png";
const HomeMain = () => {
  return (
    <>
      <div className="full-body">
        <div className="first-box">
          <div className="hello">
            <h1>
              Hello. <br />
              My name is <br /> avto
            </h1>
          </div>
          <div className="photo">
            <img src={Me} />
          </div>
        </div>
        <div className="second-box">
          <div className="skill-word">
            <h1>Skills:</h1>
          </div>
          <div className="skill-box">
            <div className="skills">
              <p>
                <i class="fa-brands fa-git-alt"></i>
              </p>
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-react"></i>
            </div>
          </div>
        </div>
        <div className="third-box">
          <div className="project-word">
            <h1>Projects:</h1>
          </div>
          <div className="project-box">
            <div className="box">
              <div className="picture">
                <img src={Weather} />
              </div>
              <div className="text">
                <div className="first-text">
                  <h3>Weather-Project</h3>
                  <h4>Tech stack: html css js React</h4>
                </div>
                <div className="find-project">
                  <hr />
                  <a
                    href="https://weather06.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <i class="fa-solid fa-link"></i> Demo
                  </a>

                  <a
                    href="https://github.com/AvtandilSturua/Weather-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa-solid fa-code"></i> Code
                  </a>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="picture">
                <img src={Workout} />
              </div>
              <div className="text">
                <div className="first-text">
                  <h3>Weather-Project</h3>
                  <h4>Tech stack: html css js React</h4>
                </div>
                <div className="find-project">
                  <hr />
                  <a
                    href="https://fitappgym.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <i class="fa-solid fa-link"></i> Demo
                  </a>

                  <a
                    href="https://github.com/AvtandilSturua/Fitness-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa-solid fa-code"></i> Code
                  </a>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="picture">
                <img src={Todo} />
              </div>
              <div className="text">
                <div className="first-text">
                  <h3>Weather-Project</h3>
                  <h4>Tech stack: html css js React</h4>
                </div>
                <div className="find-project">
                  <hr />
                  <a
                    href="https://todoreactaoo.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <i class="fa-solid fa-link"></i> Demo
                  </a>

                  <a
                    href="https://github.com/AvtandilSturua/Todo-react-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa-solid fa-code"></i> Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="git"
            href="https://github.com/AvtandilSturua"
            target="_blank"
            rel="noreferrer"
          >
            For More Projects
            <i class="fa-brands fa-square-github"></i>
          </a>
        </div>
        <div className="fourth-box">
          <div className="footer">
            <div className="contact">
              <h1>A.Sturua</h1>
            </div>
            <div className="footer-soial">
              <a
                href="https://www.linkedin.com/in/avtandil-sturua-81953a224/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/AvtandilSturua"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-square-github"></i>
              </a>
              <a
                href="https://www.instagram.com/a__sturua/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </div>
          </div>

          <div className="mail-contact">
            <hr />
            <h3>Email: avtosturua20@gmail.com</h3>
            <h3>Address: Tbilisi,Georgia</h3>
            <h3>Number: +995 557589023</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
