import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const TotalItems = ({ compTodos }) => {
    const todos = useSelector((state) => state.todos);

    const handleCompleted = () => {
        const completedTodos = todos.filter((item) => item.completed === true);
        compTodos(completedTodos);
    };

    const handleAll = () => {
        compTodos(todos);
    };

    return (
        <li className="list-group-item  d-flex align-item-center justify-content-between      p-3 rounded   container-fluid">
            <strong >
                {`${todos.length > 1 ? `Total items` : `Total item`}`} :- {todos.length}
            </strong>
            <div  className="">


                <button onClick={() => handleCompleted()} className="btn btn-sm  mr-2 ">
                    Completed
                </button>

                <button onClick={() => handleAll()} className="btn btn-sm mr-2 ">
                    All
                </button>
            </div>
        </li>
    );
};

export default TotalItems;
