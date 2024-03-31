import React from "react";

const TodoItem = ({ id, todo, completed, prod }) => {
    return (
        <li ref={prod.innerRef}  {...prod.draggableProps}  {...prod.dragHandleProps} className="list-group-item  p-3  rounded   d-flex align-item-center justify-content-between ">
            <div>
                <input
                    type="checkbox"
                    checked={completed}
                    className="form-group  m-1"
                />
                <strong> {todo} </strong>
            </div>
            <div className="x-mark">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                    <path
                        fill="#494C6B"
                        fillRule="evenodd"
                        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                    />
                </svg>
            </div>
        </li>
    );
};

export default TodoItem;
