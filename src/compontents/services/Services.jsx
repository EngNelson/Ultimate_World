import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>SoftWare Architecture</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The beauty of life is in its uniqueness.</p>
            </li>
          </ul>
        </article>
        {/* SoftWare Archictecture */}
      </div>
    </section>
  );
};

export default Services;
