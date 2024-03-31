import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { deleteTodo, toggleComplete } from "../../redux/todoSlice";
import { useDispatch } from "react-redux";
import TotalItems from "./TotalItems";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [List, setList] = useState(todos);

  const dispatch = useDispatch();

  useEffect(() => {
    setList(todos);
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("todo-data", JSON.stringify(todos));
  }, [todos]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(List);
    const [recordedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, recordedItem);
    setList(items);
  };

  const handleDeleteTodo = (todoID) => {
    dispatch(
      deleteTodo({
        id: todoID,
      })
    );
  };

  const handleToggleComplete = (todoID, completed) => {
    dispatch(toggleComplete({ id: todoID, completed: !completed }));
  };

  return (
    <div className="container-fluid">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="list-group todos "
            >
              {List.map((item, index) => {
                return (
                  <Draggable draggableId={item.id} index={index} key={item.id}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        className={`list-group-item   ${
                          item.completed && `list-group-item-success`
                        }                      p-3  rounded   d-flex align-item-center justify-content-between`}
                      >
                        <div>
                          <input
                            type="checkbox"
                            checked={item.completed}
                            className="form-group  m-1"
                            onChange={() =>
                              handleToggleComplete(item.id, item.completed)
                            }
                          />

                          {item.completed ? (
                            <del> {item.todo} </del>
                          ) : (
                            <strong> {item.todo} </strong>
                          )}
                        </div>
                        <div
                          className="x-mark"
                          onClick={() => handleDeleteTodo(item.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                          >
                            <path
                              fill="#494C6B"
                              fillRule="evenodd"
                              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                            />
                          </svg>
                        </div>
                      </li>
                    )}
                  </Draggable>
                );
              })}

              {provided.placeholder}
              <TotalItems compTodos={setList} />
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoList;
