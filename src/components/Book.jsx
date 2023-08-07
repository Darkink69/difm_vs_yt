import React from "react";

const Book = (props) => {
    const nm = ['Вася', 'Петя', 'Оля']
    if (nm[0] === 'Васяяяя') {
        return (
            <div className="App-header">
                <h1>
                    Эх, {props.name ? props.name : nm[2]}!
                </h1>
            </div>
        )
    }

    return (
        <div className="App-header">
            <h1>
                Привет, {props.name ? props.name : nm[2]}! <br/>
                А ты {nm[0]}, пошел в баню!
            </h1>
            <h2>А ты {nm[1]}, молодец!</h2>
        </div>
    )
}

export default Book;
