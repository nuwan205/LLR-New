import * as React from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { FormControl, FormHelperText } from '@mui/material'
import { Controller } from 'react-hook-form'
import dayjs from 'dayjs'

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

export default function DatePicker({ error, control, required, name, label, placeholder }: InputProps) {
  return (
    <FormControl fullWidth sx={{ mb: 4 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <Controller
            name={name}
            control={control}
            rules={{ required: !!required }}
            render={({ field: { value, onChange, onBlur } }) => (
              <MobileDatePicker
                disableFuture
                maxDate={dayjs().add(-10, 'year')}
                minDate={dayjs('1925-01-01')}
                openTo={'year'}
                label={label}
                inputFormat='MM/DD/YYYY'
                value={value}
                onChange={onChange}
                renderInput={params => (
                  <TextField {...params} onBlur={onBlur} placeholder={placeholder || ''} error={!!error} />
                )}
              />
            )}
          />
        </Stack>
        {error && <FormHelperText sx={{ color: 'error.main' }}>{error}</FormHelperText>}
      </LocalizationProvider>
    </FormControl>
  )
}
