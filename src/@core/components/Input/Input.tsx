import { FormControl, FormHelperText, TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

type InputProps = {
  error?: string
  control: any
  required?: boolean
  name: string
  label: string
  placeholder?: string
  autoFocus?: boolean
  type?: string
}

const formattedError = (err: string) => {
  const errPartd = err.split('.')

  return errPartd.slice(-1)
}

export default function Input({
  error,
  control,
  required,
  name,
  label,
  placeholder,
  autoFocus = false,
  type = 'text'
}: InputProps) {
  return (
    <FormControl fullWidth sx={{ mb: 4 }}>
      <Controller
        name={name}
        control={control}
        rules={{ required: !!required }}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextField
            fullWidth
            type={type}
            autoFocus={autoFocus}
            value={value}
            onBlur={onBlur}
            label={label}
            onChange={onChange}
            placeholder={placeholder || ''}
            error={!!error}
          />
        )}
      />
      {error && <FormHelperText sx={{ color: 'error.main' }}>{formattedError(error)}</FormHelperText>}
    </FormControl>
  )
}
