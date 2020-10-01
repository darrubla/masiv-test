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
    // axios.get(url).then((res) => {
    //   console.log(res.data);
    // });

    axios({
      method: "get",
      url: url,
    }).then((res) => {
      console.log(res.data, url);
    });
    // .then((res) => res.json())
    // .then(
    //   (result) => {
    //     setState({
    //       error: null,
    //       isLoaded: true,
    //       data: result,
    //     });
    //   },
    //   (error) => {
    //     setState({
    //       error,
    //       isLoaded: true,
    //       data: [],
    //     });
    //   }
    // );
  }, []);

  if (state.error) {
    return <h1>Oops, data no disponible</h1>;
  } else if (state.isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="card-container">
        <article>
          <h2>hola</h2>
          <figure>
            <img src="" alt="" />
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
