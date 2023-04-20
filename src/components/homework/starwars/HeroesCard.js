import React from "react";
const HeroesCard =({ created, name, birth, height, mass, gender })=> {
    return (
        <div key={created} className="card">
            <h2 className="card-title">{name}</h2>
            <ul className="card-list">
                <li>Born: {birth}</li>
                <li>Height: {height}</li>
                <li>Mass: {mass}</li>
                <li>Gender: {gender}</li>
            </ul>
            <p className="card-date">{created}</p>
        </div>
    );
}
export default React.memo(HeroesCard);
