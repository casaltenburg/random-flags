import React, { useEffect } from "react";
import "./App.css";
import { Flag } from "./components/Flag/Flag";
import { Button } from "./components/Button/Button";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIESFLAGS } from "./api/getCountriesFlags";
import { useState } from "react";

function getRandomArbitrary(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

interface CountriesData {
  countries: Country[];
}

interface Country {
  name: string;
  emoji: string;
}

function App() {
  const { loading, error, data } = useQuery<CountriesData>(GET_COUNTRIESFLAGS);
  const [randomIndex, setRandomNumber] = useState(0);

  useEffect(() => {
    if (loading || error) return;
    if (!data) return;
    const index = getRandomArbitrary(0, data.countries.length - 1);
    setRandomNumber(index);
    return;
  }, [loading, error, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onButtonClick = () => {
    if (!data) return;
    const index = getRandomArbitrary(0, data.countries.length - 1);
    setRandomNumber(index);
  };

  return (
    <>
      <div className="wrapper">
        <h2>The Random Flag Generator test</h2>
        <br></br>
        <h4>Try it with fressing the button below!</h4>
        {typeof data !== "undefined" ? (
          <>
            <Flag
              country={data.countries[randomIndex].name}
              emoji={data.countries[randomIndex].emoji}
            />
            <Button onButtonClick={onButtonClick} />
          </>
        ) : (
          <p>The loading of the data failed..... Please try again later</p>
        )}
        <div></div>
      </div>
    </>
  );
}

export default App;
