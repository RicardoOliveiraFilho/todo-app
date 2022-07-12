import { useState } from 'react';
import { Trash } from 'phosphor-react';
import { ToDo } from '../types/ToDo';
import styles from './Todo.module.css';

interface TodoProps {
  todo: ToDo;  
  onRemove: (id: string) => void;
  onCheck: (id: string) => void;
}

export function Todo({ todo, onRemove, onCheck }: TodoProps) {
  const [todoDone, setTodoDone] = useState(todo.done);

  function handleCheckToDo(id: string) {
    setTodoDone(!todoDone);
    onCheck(id);
  }

  return (
    <div className={todoDone? styles.todoWrapperChecked : styles.todoWrapperUnchecked}>
      <div className={styles.todoContent}>
        <input
          type="checkbox"
          checked={todoDone}
          className={styles.checkboxRound}
          onChange={() => handleCheckToDo(todo.id)}
        />
        <p
          className={todoDone ? styles.paragraphChecked : styles.paragraphUnchecked}
        >
          {todo.description}
        </p>
        <div className={styles.svgWrapper} onClick={() => onRemove(todo.id)}>
          <Trash size={24} />
        </div>
      </div>
    </div>
  );
}