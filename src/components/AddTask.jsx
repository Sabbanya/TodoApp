import { useState } from 'react';

function AddTask({ AddNewTask }) {
  const [tittle, setTittle] = useState('');
  const [disc, setDisc] = useState('');
  {
    /* Создания новой задачи */
  }
  const onAddTodo = () => {
    if (!tittle || !disc) {
      alert('Заполните все поля!');
      return;
    }
    AddNewTask({
      id: Math.random().toString(36).substr(2, 9),
      tittle: tittle,
      disc: disc,
    });
    setTittle('');
    setDisc('');
  };
  return (
    <div className="todo__edit">
      <div className="tittle">
        <p>Создание задачи</p>
      </div>
      <div className="todo__tittle">
        <p>Заголовок</p>
        <div className="input__todo">
          <input
            type="text"
            placeholder="Введите заголовок"
            value={tittle}
            onChange={(e) => setTittle(e.target.value)}
          />
        </div>
      </div>
      <div className="todo__disc">
        <p>Описания</p>
        <div className="input__todo">
          <input
            type="text"
            placeholder="Введите описания задачи"
            value={disc}
            onChange={(e) => setDisc(e.target.value)}
          />
        </div>
      </div>
      <div className="todo__save">
        <button onClick={onAddTodo}>Сохранить</button>
      </div>
    </div>
  );
}

export default AddTask;
