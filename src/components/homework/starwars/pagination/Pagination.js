import React from "react";
const Pagination = ({ heroesPerPage, totalPage, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPage / heroesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            {pageNumbers.map((number) => (
                <button
                    className="card_button"
                    key={number}
                    onClick={() => paginate(number)}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};
export default Pagination;
