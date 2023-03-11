import React, { useEffect, useState } from "react";
import HeroesCard from "./HeroesCard";

const HeroesCards = () => {
    const [heroes, setHeroes] = useState(null);
    const [, setError] = useState(null);

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
                      <HeroesCard
                          key={hero.created}
                          created={hero.created}
                          name={hero.name}
                          birth={hero.birth_year}
                          height={hero.height}
                          mass={hero.mass}
                          gender={hero.gender}
                      />
                  ))
                : null}
        </>
    );
};

export default HeroesCards;
