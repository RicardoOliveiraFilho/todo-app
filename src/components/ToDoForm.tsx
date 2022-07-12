import { FormEvent, useState, useRef } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './ToDoForm.module.css';

interface ToDoFormProps {
  onCreateNewToDo: (description: string) => void;
}

export function ToDoForm({ onCreateNewToDo }: ToDoFormProps) {
  const inputDescriptionToDoRef = useRef(null);
  const [descriptionToDo, setDescriptionToDo] = useState('');

  function handleDescriptionToDo(event: FormEvent<HTMLInputElement>) {
    setDescriptionToDo(event.currentTarget.value);
  }

  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!descriptionToDo) {
      return;
    }

    event.currentTarget.reset();
    onCreateNewToDo(descriptionToDo);
    setDescriptionToDo('');
  }

  return (
    <form onSubmit={handleSubmitForm} className={styles.Wrapper}>  
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleDescriptionToDo}
      />
      <button type="submit" disabled={!descriptionToDo}>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}