import React, { useState, useEffect } from "react";
import axios from "axios";
import MoreCharactersData from "./MoreCharactersData";

const key = "0208e837d8d71f2476ce80659815ab0b";

const CharactersDisplay = () => {
  const [result, setResult] = useState([]);
  const [inputData, setInputData] = useState("cap");

  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${inputData}&limit=9&ts=1&apikey=${key}&hash=e8a9bfdf06c0735fb60dfa08d673aa79`
      )
      .then(response => response.data)
      .then(response => setResult(response.data.results));
  }, [inputData]);

  const handleChange = event => {
    setInputData(event.target.value);
  };
  console.log(result);
  return (
    
    <div>
      <div class="col-sm-6">
        <input
          className="form-control bg-white p-4 w-5 mx-5"
          onChange={handleChange}
          placeholder="Search your hero.."
        ></input>
      </div>
      {result.map(datas => (
        <div className="card w-25 m-3 d-inline-block mx-5 h-50 mt-5">
          <img
            className="card-img-top w-25"
            src={datas.thumbnail.path+"."+datas.thumbnail.extension}
            alt={datas.name}
          />
          <div class="card-body">
            <h4 class="card-title">{datas.name}</h4>
          </div>
          <MoreCharactersData datas={datas} />
        </div>
      ))}
    </div>
  );
};

export default CharactersDisplay;
