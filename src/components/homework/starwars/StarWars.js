import React, { Component } from "react";
import "./StarWarsStyle.scss";
import HeroesCards from "./HeroesCards";

class StarWars extends Component {
    render() {
        return (
            <div className="card_wrapper">
                <HeroesCards />
            </div>
        );
    }
}

export default StarWars;
