import React, { useState } from "react";
import HeroesCard from "./HeroesCard";
import { Spinner } from "./Spinner";
import "./spinner.scss";
import Pagination from "./pagination/Pagination";
import { useTheme } from "react-jss";
import { useStyles } from "../providerJSS/themeProvider";
import { useGetAllHeroesQuery } from "../../../store/heroesApi";

export const HeroesCards = React.memo(() => {
    const [currentPage, setCurrentPage] = useState(1);
    const [refreshing, setRefreshing] = useState(false);
    const [heroesPerPage] = useState(3);
    const { data, isLoading, isError, error, refetch } = useGetAllHeroesQuery();

    const lastHeroesIndex = currentPage * heroesPerPage;
    const firstHeroesIndex = lastHeroesIndex - heroesPerPage;
    const displayedHeroes =
        data?.results?.slice(firstHeroesIndex, lastHeroesIndex) || [];

    const theme = useTheme();
    const classes = useStyles({ theme });
    const handleRefresh = () => {
        setRefreshing(true);
        refetch()
            .then(() => {
                setRefreshing(false);
            })
            .catch((error) => {
                console.error("Error refreshing data:", error);
                setRefreshing(false);
            });
    };

    return (
        <div className={classes.wrapper}>
            <div className="card_paginate">
                <button className="card_button_rf" onClick={handleRefresh}>
                    {refreshing ? "...Loading" : "Refresh"}
                </button>
                <Pagination
                    heroesPerPage={heroesPerPage}
                    totalPage={data?.results?.length || 0}
                    paginate={setCurrentPage}
                />
            </div>
            <div className="card_container">
                {isError && <p>{error.message()}</p>}
                {!isLoading ? (
                    displayedHeroes.map((hero) => (
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
