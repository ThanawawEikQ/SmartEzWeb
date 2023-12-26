import React from "react";
import CarEv from "../../assets/Image/electric-car.png";

function Car() {
  return (
    <div style={{
        marginTop:'3rem'
    }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "10vh",
        }}
      >
        <div
          style={{
            fontSize: "5rem",
            width: "auto",
            margin: 0,
          }}
        >
          <h5 style={{ margin: 0, padding: 0 }}>45.33</h5>
        </div>
        <div>
          <h4>KWh</h4>
        </div>
      </div>

      <div
        style={{
          marginTop: "-.8rem",
        }}
      >
        <img
          src={CarEv}
          style={{
            width: "200px",
          }}
        />
      </div>
    </div>
  );
}

export default Car;
