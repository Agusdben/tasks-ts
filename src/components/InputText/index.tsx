import React from 'react'
import { InputText as InputTextI } from '../../models/InputText.model'

interface Props {
  input: InputTextI
}

const InputText: React.FC<Props> = ({ input }) => {
  const { resetValue, ...restinput } = input
  return <input {...restinput} />
}

export default InputText
