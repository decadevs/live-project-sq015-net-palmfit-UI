import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Footer from "./Footer";
import "../../styles/Landingpg.css";
import { wordsFromOurUsers, whyChooseUs } from "../../utils/landingData";
import CalorieModal from "./CalorieModal";

let style = {
  marginTop: 45,
  marginBottom: 65,
  backgroundColor: ""
};

function LandingPg() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="con__">
      {/* <Header /> */}
      <div className="container__">
        <CalorieModal show={modalShow} onHide={() => setModalShow(false)} />
        <section>
          <div className="section-container reverse-row">
            <div className="section-container-first">
              <img className="img___" src={"../img/Frame 1949.png"} />
            </div>

            <div className="content">
              <h2 className="mt-sm-4">
                Your fitness <span>starts</span> with what you eat
              </h2>
              <p className="sect">
                At Palmfit, we offer you the chance to keep tab on what you and
                when you eat. It requires minimal commitment and the journey
                starts when you say it starts.
              </p>
              <a
                className="btn text-white btn__"
                style={{ backgroundColor: "#1A8D8D" }}
                href="#"
                role="button"
                onClick={() => setModalShow(true)}
              >
                Calculate Calorie
              </a>
            </div>
          </div>
        </section>

        {/* about */}
        <section>
          <div className="section-container" style={style}>
            <div className="section-container-second">
              <img className="img___" src={"../img/landPg2.png"} />
            </div>
            <div className="content">
              <h2 className="mt-sm-4">About Palmfit</h2>
              <p className="sect">
                Palmfit is an easy-to-use calorie calculator that helps users
                measure their calorie intake in order to make better healthy
                food intake decisions. We offer you the chance to browse through
                our platform for food calories to make your decisions on what to
                eat and what not to. However this starts by signing up on our
                platform. The most accurate resource for calorie, fat and
                carbohydrate counts. Take it everywhere; look up foods before
                you eat, when eating choices count the most!
              </p>
              <a
                className="btn text-white btn__"
                style={{ backgroundColor: "#1A8D8D" }}
                href="#"
                role="button"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
        <WhyUs />
        <WordsFromOurUsers />
      </div>
    </div>
  );
}

function WhyUs() {
  return (
    <div className="container-sm" style={style}>
      <h2
        className="text-center"
        style={{ marginBottom: "40px", paddingTop: "50px" }}
      >
        Why Choose Us?
      </h2>

      <div className="card-container" style={{ marginBottom: 40 }}>
        {whyChooseUs.map((items) => {
          return (
            <WhyChooseUs
              img={items.img}
              head={items.head}
              paragraph={items.paragraph}
              bg={items.bg}
            />
          );
        })}
      </div>
    </div>
  );
}

function WhyChooseUs(props) {
  return (
    <>
      <div
        className="whyChooseUs card mb-sm-2 mx-sm-auto fs-md-6 mb-sm-4 border border-0"
        style={{ backgroundColor: props.bg }}
      >
        <img
          className="card-img-top mx-auto"
          src={props.img}
          style={{ width: 40, height: 40, marginTop: 20 }}
        />
        <div class="card-body">
          <h3 className="text-center">{props.head}</h3>
          <p class="card-text">{props.paragraph}</p>
        </div>
      </div>

      <WhyUs />
      <WordsFromOurUsers />
      <div>
        <Footer />
      </div>
    </>
  );
}

function WordsFromOurUsers() {
  return (
    <div className="Testimonials">
      <h2 className="mb-4">Words from Our Users</h2>
      <div className="testimony-cards-container">
        {wordsFromOurUsers.map((items) => {
          return (
            <WordsFromUsers
              name={items.name}
              userName={items.userName}
              comment={items.comment}
              img={items.img}
            />
          );
        })}
      </div>
    </div>
  );
}

function WordsFromUsers(props) {
  return (
    <div className="testimonal-card-component-container">
      <div className=" testimonal-card-component-con">
        <div className="testimonal-card-component-img">
          <img src={props.img} />
        </div>
        <p className="ps-2">
          {props.name}
          <br />
          <span className="pe-4">
            <a href="#" style={{ color: "#1A8D8D" }}>
              {props.userName}
            </a>
          </span>
        </p>
      </div>
      <p className="">{props.comment}</p>
    </div>
  );
}

export default LandingPg;
