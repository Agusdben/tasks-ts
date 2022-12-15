export interface InputText {
  placeholder: string
  required: boolean
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  resetValue: () => void
}
