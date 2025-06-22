import React from 'react'

export const TodoList = ({ taskList, setTaskList }) => {
  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task, index) => (
          <div className="todo" key={index}>
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
              <button>
              <i className="fa-solid fa-check"></i>
              </button>
              <button>
              <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
        {/* 個別のTodo要素 */}
        {/* 個別のTodo要素 */}
      </div>
    </div>
  )
}
