import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

type NameTitileProps = {
  control: any
  name: string
}

export default function NameTitile({ control, name }: NameTitileProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <RadioGroup
          row
          aria-labelledby='demo-row-radio-buttons-group-label'
          name='row-radio-buttons-group'
          value={value}
          onChange={onChange}
        >
          <FormControlLabel value='Mr' control={<Radio />} label='Mr' />
          <FormControlLabel value='Mrs' control={<Radio />} label='Mrs' />
          <FormControlLabel value='Miss' control={<Radio />} label='Miss' />
          <FormControlLabel value='Ms' control={<Radio />} label='Ms' />
          <FormControlLabel value='Dr' control={<Radio />} label='Dr' />
          <FormControlLabel value='Other' control={<Radio />} label='Other' />
        </RadioGroup>
      )}
    />
  )
}
