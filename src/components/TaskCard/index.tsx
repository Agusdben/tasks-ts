import React, { useState } from 'react'
import useInputText from '../../hooks/useInputText'
import useTasks from '../../hooks/useTasks'
import { Task } from '../../types/Task'
// icons
import { BiTrashAlt } from 'react-icons/bi'
import {
  AiOutlineCheckSquare,
  AiFillCheckSquare,
  AiFillEdit
} from 'react-icons/ai'

import './TaskCard.css'

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
    <div className='task-card'>
      <form className='task-card__form' onSubmit={handleSubmitEdit}>
        {isEditing ? (
          <input
            className='task-card__task'
            {...editTask}
            autoFocus
            onBlur={handleSubmitEdit}
          />
        ) : (
          <p
            style={{ textDecoration: task.done ? 'line-through' : '' }}
            className='task-card__task'
          >
            {task.description}
          </p>
        )}
      </form>
      <div>
        <button type='button' onClick={() => removeTask(task.id)}>
          <BiTrashAlt className='icon' />
        </button>
        <button
          type='button'
          onClick={() => setIsEditing(!isEditing)}
          disabled={isEditing || task.done}
        >
          <AiFillEdit className='icon' />
        </button>
        <button type='button' onClick={() => handleDone(task.id)}>
          {task.done ? (
            <AiFillCheckSquare className='icon' />
          ) : (
            <AiOutlineCheckSquare className='icon' />
          )}
        </button>
      </div>
    </div>
  )
}

export default TaskCard
