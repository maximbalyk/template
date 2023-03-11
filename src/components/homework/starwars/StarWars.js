import React, { Component, Suspense } from "react";
import "./StarWarsStyle.scss";
import "./spinner.scss";
import { Spinner } from "./Spinner";

const HeroCards = React.lazy(() => import("./HeroesCards"));

class StarWars extends Component {
    render() {
        return (
            <div className="card_wrapper">
                <Suspense fallback={<Spinner />}>
                    <HeroCards />
                </Suspense>
            </div>
        );
    }
}

export default StarWars;
