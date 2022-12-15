import React, { useState } from 'react'
import { InputText } from '../types/InputText'

interface Props {
  initialValue: string
  required: boolean
  placeholder: string
}

const useInputText = ({
  initialValue,
  required,
  placeholder
}: Props): InputText => {
  const [value, setValue] = useState<string>(initialValue)

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value)

  return {
    placeholder,
    required,
    value,
    onChange: handleValue,
    resetValue: () => setValue(initialValue)
  }
}

export default useInputText
