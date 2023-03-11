import React, {  useEffect, useState } from "react";

const HeroesCards = () => {
    const [heroes, setHeroes] = useState(null)
    const [, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://swapi.dev/api/people/");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setHeroes(result.results);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);


        return (
            <>
                {heroes !== null
                    ? heroes.map((hero) => (
                          <div key={hero.created} className="card">
                              <h2 className="card-title">{hero.name}</h2>
                              <ul className="card-list">
                                  <li>Born: {hero.birth_year}</li>
                                  <li>Height: {hero.height}</li>
                                  <li>Mass: {hero.mass}</li>
                                  <li>Gender: {hero.gender}</li>
                              </ul>
                              <p className="card-date">{hero.created}</p>
                          </div>
                      ))
                    : null}
            </>
        );

}

export default HeroesCards;
