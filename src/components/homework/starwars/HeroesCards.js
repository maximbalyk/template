import React, { useEffect, useState } from "react";
import HeroesCard from "./HeroesCard";
import { Spinner } from "./Spinner";
import "./spinner.scss";
import Pagination from "./pagination/Pagination";
import { useTheme } from "react-jss";
import { useStyles } from "../providerJSS/themeProvider";
import { useDispatch, useSelector } from "react-redux";
import { saveData } from "../../../store/heroesSlice";
export const HeroesCards = React.memo(() => {
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [heroesPerPage] = useState(3);
    const heroes = useSelector((state) => state.counter.heroes);
    const dispatch = useDispatch();
    let isLoad = false;
    const fetchData = async () => {
        isLoad = true;
        try {
            const response = await fetch("https://swapi.dev/api/people/");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            dispatch(saveData(result.results));
            isLoad = false;
        } catch (error) {
            setError(error);
            isLoad = false;
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const lastHeroesIndex = currentPage * heroesPerPage;
    const firstHeroesIndex = lastHeroesIndex - heroesPerPage;
    const currentHeroes =
        heroes !== null
            ? heroes.slice(firstHeroesIndex, lastHeroesIndex)
            : null;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const theme = useTheme();
    const classes = useStyles({ theme });
    return (
        <div className={classes.wrapper}>
            <div className="card_paginate">
                <button className="card_button_rf" onClick={() => fetchData()}>
                    {isLoad ? "...Loading" : "Refresh"}
                </button>
                <Pagination
                    heroesPerPage={heroesPerPage}
                    totalPage={heroes?.length}
                    paginate={paginate}
                />
            </div>
            <div className="card_container">
                {error && <p>{error}</p>}
                {heroes.length ? (
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
});
