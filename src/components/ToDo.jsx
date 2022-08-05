import React from 'react';

function ToDo({ todo, removeTask, onClickItem }) {
  {
    /* Отправка ID задачи для отображения в окне Edit */
  }
  const SendId = () => {
    onClickItem(todo.id);
  };

  return (
    <div className="todo__item">
      <p onClick={SendId}>{todo.tittle}</p>
      <img src="/img/delete.png" alt="Удалить задачу" onClick={() => removeTask(todo.id)} />
    </div>
  );
}

export default ToDo;
