import React, { useContext, useEffect, useState } from "react";
import HeroesCard from "./HeroesCard";
import { Spinner } from "./Spinner";
import "./spinner.scss";
import Pagination from "./pagination/Pagination";
import { ThemeContext } from "../../provider/ThemeProvider";

const HeroesCards = () => {
    const [heroes, setHeroes] = useState(null);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [heroesPerPage] = useState(3);

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

        if (heroes === null) {
            fetchData();
        }
    }, []);

    const lastHeroesIndex = currentPage * heroesPerPage;
    const firstHeroesIndex = lastHeroesIndex - heroesPerPage;
    const currentHeroes =
        heroes !== null
            ? heroes.slice(firstHeroesIndex, lastHeroesIndex)
            : null;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const theme = useContext(ThemeContext);

    return (
        <div className="card_wrapper"
             style={{backgroundImage: theme.url}}

        >
            <div className="card_paginate">
                <Pagination
                    heroesPerPage={heroesPerPage}
                    totalPage={heroes?.length}
                    paginate={paginate}
                />
            </div>
            <div className="card_container">
                {error && <p>{error}</p>}
                {heroes !== null ? (
                    currentHeroes.map((hero) => (
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
                ) : (
                    <Spinner />
                )}
            </div>
        </div>
    );
};

export default HeroesCards;
