import { useState } from 'react';

import { v4 as uuidv4 } from "uuid";

import { ToDo } from '../types/ToDo';

import { SummaryItem } from './SummaryItem';
import { Todo } from './Todo';
import { ToDoForm } from './ToDoForm';

import clipBoardImg from '../assets/Clipboard.png';
import styles from './ToDoList.module.css';

export function ToDoList() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [todosDone, setTodosDone] = useState(0);

  function addNewToDo(description: string) {
    const newToDo: ToDo = {
      id: uuidv4(),
      description,
      done: false,
    };

    setTodos([...todos, newToDo]);
  }

  function removeToDo(id: string) {
    const todoRemoved = todos.find(todo => todo.id === id);
    const newToDos = todos.filter(todo => todo.id !== id);

    if (todoRemoved?.done) {
      setTodosDone( prevState => prevState - 1);
    }

    setTodos(newToDos);
  }

  function checkToDo(id: string) {
    const newToDos = todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;

        if (todo.done) {
          setTodosDone( prevState => prevState + 1);
        } else {
          setTodosDone( prevState => prevState - 1);
        }

        return todo
      } else {
        return todo;
      }
    });

    setTodos(newToDos);
  }

  return (
    <div className={styles.toDoList}>
      <ToDoForm onCreateNewToDo={addNewToDo} />

      <summary>
        <SummaryItem color='blue' title="Tarefas criadas" value={todos.length.toString()} />
        <SummaryItem color='purple' title="Concluídas" value={`${todosDone} de ${todos.length}`} />
      </summary>

      { todos.length !== 0
        ? 
          todos.map(
            todo => <Todo
              key={todo.id}
              todo={todo}
              onRemove={removeToDo}
              onCheck={checkToDo}
            />
          )      
        : (
            <div className={styles.contentWrapper}>
              <div className={styles.contentEmpty}>
                <img src={clipBoardImg} alt="Imagem de Clipboard" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          )}
    </div>
  );
}