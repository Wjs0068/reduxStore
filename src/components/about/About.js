import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about">
          <h1 className="header-one">
            About <span className="us">Us</span>
          </h1>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
            incidunt harum ratione quibusdam iste amet labore aliquid
            reprehenderit architecto blanditiis odio in mollitia ad asperiores
            omnis id facilis illo soluta? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Provident illum, eos molestias ut,
            temporibus corporis obcaecati atque nobis adipisci quod, aut tenetur
            eveniet nihil eligendi amet beatae quaerat at optio?
          </p>
          <button className="explore2">Explore</button>
        </div>
        <div className="about-img">
          <img
            className="img-of-cake"
            src="https://media.istockphoto.com/photos/delicious-chocolate-zucchini-brownies-picture-id1255426185?b=1&k=20&m=1255426185&s=170667a&w=0&h=fFq0MVrtsOnLeajrhZJAF3xWT6pPxiaLwgg1OOJZmkM="
            alt="picture of dessert"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
