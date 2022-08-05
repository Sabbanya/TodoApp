import { useState } from 'react';

function EditTask({
  EditTodo,
  selectTittle,
  selectDisc,
  setSelectTittle,
  setSelectDisc,
  saveEdit,
}) {
  const [editTittle, setEditTittle] = useState(false);
  const [editDisc, setEditDisc] = useState(false);
  return (
    <div className="todo__edit">
      <div className="tittle">
        <p>Редактирования задачи</p>
      </div>
      <div className="todo__tittle">
        <p>Заголовок</p>
        <div className="input__todo">
          <input
            type="text"
            placeholder="Введите заголовок"
            value={selectTittle}
            readOnly={editTittle ? null : 'readonly'}
            onChange={(e) => setSelectTittle(e.target.value)}
          />
          <img src="/img/pen.png" alt="Редактирования" onClick={() => setEditTittle(!editTittle)} />
        </div>
      </div>
      {editTittle ? <p className="edit__edit">Редактирования задачи</p> : null}
      <div className="todo__disc">
        <p>Описания</p>
        <div className="input__todo">
          <input
            type="text"
            placeholder="Введите описания задачи"
            value={selectDisc}
            readOnly={editDisc ? null : 'readonly'}
            onChange={(e) => setSelectDisc(e.target.value)}
          />
          <img src="/img/pen.png" alt="Редактирования" onClick={() => setEditDisc(!editDisc)} />
        </div>
      </div>
      {editDisc ? <p className="edit__edit">Редактирования описания</p> : null}
      <div className="todo__save__edit">
        <button onClick={saveEdit(EditTodo.id, selectTittle, selectDisc)}>Сохранить</button>
      </div>
    </div>
  );
}

export default EditTask;
