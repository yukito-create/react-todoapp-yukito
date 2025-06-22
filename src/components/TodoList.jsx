import React from 'react'

export const TodoList = () => {
  return (
    <div className="todoList">
      <div className="todos">
        {/* 個別のTodo要素 */}
        <div className="todo">
          <div className="todoText">
            <span>プログラミング</span>
          </div>
          <div className="icons">
            <button>
            <i class="fa-solid fa-check"></i>
            </button>
            <button>
            <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
        {/* 個別のTodo要素 */}
      </div>
    </div>
  )
}
