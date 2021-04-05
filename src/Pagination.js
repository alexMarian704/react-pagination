import React from 'react'

export const Pagination = ({ postPage, totalPost  , paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPost / postPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <div id="paginationContainer">
                {pageNumbers.map((number) => (
                    <div key={number} id="pagination" onClick={()=>{paginate(number)}}>
                        <p>{number}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

