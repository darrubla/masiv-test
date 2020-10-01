import axios from "axios";
import React, { useState, useEffect } from "react";
import "../assets/styles/components/Card.scss";
import Api from "./Api";

const card = () => {
  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    data: [],
  });

  useEffect(() => {
    const url = Api();
    console.log(url);
    axios({
      method: "GET",
      url: url,
    })
      .then((res) => {
        res.json(), console.log(res);
      })
      .then(
        (result) => {
          setState({
            error: null,
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          setState({
            error,
            isLoaded: true,
            data: [],
          });
        }
      );
  }, []);
  console.log(state);

  if (state.error) {
    return <h1>Oops, data no disponible</h1>;
  } else if (!state.isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="card-container">
        <article>
          <h2>{state.data.title}</h2>
          <figure>
            <img src={state.data.img} alt="" />
          </figure>
          <div>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
        </article>
      </div>
    );
  }
};
export default card;
