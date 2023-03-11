import React, { Component } from "react";

class HeroesCard extends Component {
    render() {
        const { created, name, birth_year, height, mass, gender } = this.props;
        return (
            <div key={created} className="card">
                <h2 className="card-title">{name}</h2>
                <ul className="card-list">
                    <li>Born: {birth_year}</li>
                    <li>Height: {height}</li>
                    <li>Mass: {mass}</li>
                    <li>Gender: {gender}</li>
                </ul>
                <p className="card-date">{created}</p>
            </div>
        );
    }
}

export default HeroesCard;
