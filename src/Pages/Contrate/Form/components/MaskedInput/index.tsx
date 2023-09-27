import { ChangeEvent, KeyboardEvent } from 'react'
import { mask as masker, unMask } from 'remask'

interface InputMaskProps {
  className: string
  mask: string[]
  name: string
  onChange: (value: string) => void
  type: string
  value: string
}

export function InputMask({
  mask,
  onChange,
  value,
  className,
  ...props
}: InputMaskProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const originalValue = unMask(e.target.value)
    onChange(originalValue)
  }

  const handleValue = masker(value, mask)

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace' && value.length === 2) {
      onChange('')
    }
  }

  return (
    <input
      {...props}
      className={className}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={handleValue}
    />
  )
}
