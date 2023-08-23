import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const SelectedFeatures = ({ features, onDeleteFeature }) => {
  return (
    <>
      <div
        className="selected-features-header text-muted"
        style={{
          color: "#000000",
          fontFamily: "Nunito Sans-SemiBold, Helvetica",
          fontSize: "28px",
          fontWeight: 600,
          marginBottom: "20px",
          textAlign: "center"
        }}
      >
        Selected Features
      </div>

      <div className="selected-features">
        {features.map((feature, index) => (
          <div className="card mb-3 m-4" key={index}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div>
                    <img
                      src={feature.image}
                      className="img-fluid rounded-3"
                      alt="Fitness item"
                      style={{ width: "65px" }}
                    />
                  </div>
                  <div className="ms-3">
                    <h5>{feature.name}</h5>
                    <p className="small mb-0 text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <div style={{ width: "50px" }}>
                    <h5 className="fw-normal mb-0">{feature.quantity}</h5>
                  </div>
                  <div style={{ width: "80px" }}>
                    <h5 className="mb-0">{feature.price}</h5>
                  </div>
                  <a href="#!" style={{ color: "#cecece" }}>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      onClick={() => onDeleteFeature(index)}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectedFeatures;
