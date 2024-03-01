import { useCallback, useEffect, useState } from 'react'
import {
  ITarefa,
  TarefasServices,
} from '../../shared/services/api/tarefas/TarefasServices'
import { ApiException } from '../../shared/services/api/ApiException'

export const Dashboard = () => {
  const [lista, setLista] = useState<ITarefa[]>([])

  useEffect(() => {
    TarefasServices.getAll().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message)
      } else {
        setLista(result)
      }
    })
  }, [])

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.trim().length === 0) return;

      const value = e.currentTarget.value;

      e.currentTarget.value = '';

      if (lista.some((listItem) => listItem.title === value)) return;

      TarefasServices.create({ title: value, isCompleted: false })
        .then((result) => {
          if (result instanceof ApiException) {
            alert(result.message);
          } else {
            setLista((oldLista) => [...oldLista, result]);
          }
        });
    }
  }, [lista]);

  const handleToggleComplete = useCallback(
    (id: number) => {
      const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id)
      if (!tarefaToUpdate) return

      TarefasServices.updateById(id, {
        ...tarefaToUpdate,
        isCompleted: !tarefaToUpdate.isCompleted,
      }).then((result) => {
        if (result instanceof ApiException) {
          alert(result.message)
        } else {
          setLista((oldLista) =>
            oldLista.map((oldListItem) => {
              if (oldListItem.id === id) return result;
              return oldListItem;
            })
          )
        }
      })
    },[lista])

    const handleDelete = useCallback((id: number) => {
      TarefasServices.deleteById(id).then((result) => {
        if (result instanceof ApiException) {
          alert(result.message)
        } else {
          setLista((oldLista) => oldLista.filter((oldListItem) => oldListItem.id !== id))
        }
      }) 
    }, [])


  return (
    <div>
      <p>Lista</p>

      <input onKeyDown={handleInputKeyDown} />

      <p>{lista.filter((listItem) => listItem.isCompleted).length} </p>

      <ul>
        {lista.map((ListItem) => {
          return (
            <li key={ListItem.id}>
              <input
                type="checkbox"
                checked={ListItem.isCompleted}
                onChange={() => handleToggleComplete(ListItem.id)}
              />
              {ListItem.title}

              <button onClick={() => handleDelete(ListItem.id)}>Apagar</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
