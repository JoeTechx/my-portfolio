import React from "react";
import "./Service.css";
import { BiCheck } from "react-icons/bi";

const Service = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article> */}
        {/* ====== END  OF UI/UX ====== */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implementing interactive and dynamic elements on the user
                interface.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Using frameworks and libraries like React, Angular, or Vue.js.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating bespoke solutions tailored to specific business needs.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing tools, dashboards, or platforms for internal use.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensuring websites are optimized for mobile devices.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Building mobile applications or progressive web apps.</p>
            </li>
          </ul>
        </article>
        {/* ======= END OF WEB DEVELOPMENT ===== */}
        {/* <article className="service">
          <div className="service__head">
            <h3>Content Creator</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article> */}
        {/* ======= END OF CONTENT CREATION ======= */}
      </div>
    </section>
  );
};

export default Service;
