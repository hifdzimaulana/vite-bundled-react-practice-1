import React, { useState } from "react";
import BmiForm from "../components/Bmi.form";

function BMI(props) {
  const [bmi, setBmi] = useState({
    index: 0,
    status: "",
  });

  const bmiFormula = (berat, tinggi) => {
    var index = berat / (tinggi / 100) ** 2;
    var status = "";

    switch (true) {
      case index < 18.5:
        status = "underweight";
        break;
      case index < 25:
        status = "normal";
        break;
      case index < 30:
        status = "overweight";
        break;
      case index < 35:
        status = "obese class 1";
        break;
      case index < 40:
        status = "obese class 2";
        break;
      case index >= 40:
        status = "obese class 3";
        break;
      default:
        break;
    }

    return { index: index.toFixed(2), status };
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const berat = document.getElementById("berat").value;
    const tinggi = document.getElementById("tinggi").value;

    setBmi(bmiFormula(berat, tinggi));
  };

  return (
    <div className="container d-flex align-items-center">
      <div className="d-flex w-100 justify-content-center">
        <div className="d-flex w-50 p-2 mt-5 flex-column text-center">
          <h1 className="p-3 bg-light rounded-3">Body Mass Index</h1>

          <BmiForm onSubmit={submitHandler} />

          {bmi.index && bmi.status ? (
            <>
              <hr />

              <div
                className="alert alert-warning alert-dismissible fade show"
                role="alert"
              >
                <strong>{bmi.index}</strong> You are {bmi.status}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default BMI;
