import React, { useState } from 'react'
import useInputText from '../../hooks/useInputText'
import useTasks from '../../hooks/useTasks'
import { Task } from '../../types/Task'
// icons
import { BsPencilSquare } from 'react-icons/bs'
import { BiTrashAlt } from 'react-icons/bi'
import { AiOutlineCheckSquare, AiFillCheckSquare } from 'react-icons/ai'

interface Props {
  task: Task
}

const TaskCard: React.FC<Props> = ({ task }) => {
  const { removeTask, handleDone, handleEdit } = useTasks()

  const [isEditing, setIsEditing] = useState<boolean>(false)
  const { resetValue, ...editTask } = useInputText({
    initialValue: task.description,
    required: true,
    placeholder: 'Type a task here'
  })

  const handleSubmitEdit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!editTask.value) {
      resetValue()
      setIsEditing(false)
      return
    }
    handleEdit(task.id, editTask.value)
    setIsEditing(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmitEdit}>
        {isEditing ? (
          <input {...editTask} autoFocus onBlur={handleSubmitEdit} />
        ) : (
          <p>{task.description}</p>
        )}
      </form>
      <div>
        <button type='button' onClick={() => removeTask(task.id)}>
          <BiTrashAlt />
        </button>
        <button
          type='button'
          onClick={() => setIsEditing(!isEditing)}
          disabled={isEditing || task.done}
        >
          <BsPencilSquare />
        </button>
        <button type='button' onClick={() => handleDone(task.id)}>
          {task.done ? <AiFillCheckSquare /> : <AiOutlineCheckSquare />}
        </button>
      </div>
    </div>
  )
}

export default TaskCard
