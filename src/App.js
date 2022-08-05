import { useState } from 'react';
import './App.scss';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import ToDo from './components/ToDo';

function App() {
  const [todos, setTodo] = useState([]);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [selectTodo, setSelectTodo] = useState();
  const [selectTittle, setSelectTittle] = useState('');
  const [selectDisc, setSelectDisc] = useState('');
  {
    /* Отображения окна добавления */
  }
  const vAdd = () => {
    setVisibleAdd(!visibleAdd);
    if (visibleEdit) {
      setVisibleEdit(false);
    }
  };
  {
    /* Сохранения изменений */
  }
  const saveEdit = (id, selectTittle, selectDisc) => {
    [...todos].map((item) => {
      if (item.id === id) {
        if (selectTittle && selectDisc) {
          item.tittle = selectTittle;
          item.disc = selectDisc;
        } else {
          alert('Заполните все поля!');
        }
      }
      return null;
    });
  };
  {
    /* Выбор ID задачи для отображения в окне изменений */
  }
  const selectItem = (id) => {
    setVisibleEdit(!visibleEdit);
    if (visibleAdd) {
      setVisibleAdd(false);
    }
    if (visibleEdit) {
      setVisibleEdit(true);
    }
    [...todos].map((item) => {
      if (item.id === id) {
        setSelectTodo(item);
        setSelectTittle(item.tittle);
        setSelectDisc(item.disc);
      }
      return null;
    });
  };
  {
    /* Добавления новой задачи */
  }
  const AddNewTask = (obj) => {
    setTodo([...todos, obj]);
  };
  {
    /* Удаленние выбранной задачи */
  }
  const removeTask = (id) => {
    setVisibleEdit(false);
    setTodo([...todos.filter((todo) => todo.id !== id)]);
  };
  return (
    <div className="App">
      <h1>todo app</h1>
      <div className="window__todo">
        <div className="todo__list">
          <div className="todo__new">
            <p>Список задач:</p>
            <img src="/img/add.png" alt="Добавить задачу" onClick={vAdd} />
          </div>
          <div className="todos__list">
            {/* Отображения с массива с задачами*/}
            {todos.map((todo) => {
              return (
                <div key={todo.id}>
                  <ToDo todo={todo} removeTask={removeTask} onClickItem={selectItem} />
                </div>
              );
            })}
          </div>
          <div className="serach__todo">
            <input type="text" placeholder="Поиск" />
          </div>
        </div>
        {/* Отображения нужного окна*/}
        {visibleAdd || visibleEdit ? null : <p className="message">Выберите или добавьте задачу</p>}
        {visibleAdd ? <AddTask AddNewTask={AddNewTask} /> : null}
        {visibleEdit ? (
          <EditTask
            EditTodo={selectTodo}
            selectTittle={selectTittle}
            setSelectTittle={setSelectTittle}
            selectDisc={selectDisc}
            setSelectDisc={setSelectDisc}
            saveEdit={saveEdit}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
