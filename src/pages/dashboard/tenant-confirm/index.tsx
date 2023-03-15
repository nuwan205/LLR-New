// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Imports

// ** Demo Components Imports

import { useState } from 'react'

import { Box } from '@mui/system'
import { Button, TextField } from '@mui/material'
import { api } from 'src/utils/api'
import toast from 'react-hot-toast'
import errorHandler from 'src/utils/errorHandler'

const TenantConfirm = () => {
  const [searchKey, setSearchKey] = useState('')
  const [tenant, setTenant] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [score, setScore] = useState('')
  const [pdf, setPdf] = useState<File | null>(null)

  const searchTenant = async (key: string | null) => {
    setLoading(true)
    try {
      const { data } = await api.post('search-tenants', { searchKey: key || searchKey })
      if (!data) toast.error('Tenant email not found')
      setTenant(data)
      setLoading(false)
    } catch (error) {
      toast.error(errorHandler(error))
      setTenant(null)
      setLoading(false)
    }
  }

  const confirmCreditCheck = async () => {
    const formData = new FormData()

    formData.append('tenantId', tenant.id)
    formData.append('score', score)
    if (pdf) {
      formData.append('pdf', pdf)
    }

    setIsLoading(true)
    try {
      const { data } = await api.put('confirm-credit-check', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      toast.success(errorHandler(data))
      searchTenant(tenant.email)
      setIsLoading(false)
    } catch (error) {
      toast.error(errorHandler(error))
      setIsLoading(false)
    }
  }

  return (
    <Grid container spacing={6} sx={{ background: 'white' }}>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField
            id='search-tenant'
            type={'email'}
            label='Search Tenant Email'
            variant='outlined'
            sx={{ minWidth: '50%' }}
            value={searchKey}
            onChange={e => {
              setSearchKey(e.target.value)
            }}
          />
          <Button
            size='large'
            variant='contained'
            sx={{ ml: 2 }}
            onClick={() => {
              searchTenant(null)
            }}
            disabled={loading}
          >
            Search
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {tenant ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, py: 4 }}>
            <Box>
              <b>Email:</b> {tenant.email}
            </Box>
            <Box>
              <b>First Name:</b> {tenant.firstName}
            </Box>
            <Box>
              <b>Last Name:</b> {tenant.lastName}
            </Box>
            <Box>
              <b>Phone:</b> {tenant.phone}
            </Box>
            <Box>
              <b>Score:</b> {tenant.score || ''}
            </Box>
            <Box>
              <b>Pdf:</b> {tenant.pdf && <a href={tenant.pdf}>Download</a>}
            </Box>
            <Box>
              <b>staus:</b> {tenant.isCreditChecked ? 'Complete' : tenant.isCreditPending ? 'Pending' : ''}
            </Box>

            <Box sx={{ my: 4, fontWeight: 'bold' }}>Credit check details</Box>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end' }}>
              <Box>
                <TextField
                  id='outlined-basic'
                  label='Score'
                  variant='outlined'
                  value={score}
                  onChange={e => setScore(e.target.value)}
                  type='number'
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button variant='contained' component='label'>
                  Upload Pdf
                  <input
                    hidden
                    accept='application/pdf'
                    type='file'
                    onChange={e => {
                      e.target.files && setPdf(e.target.files[0])
                    }}
                  />
                </Button>
                {pdf && <Box sx={{ ml: 2 }}>{`${pdf?.name}`}</Box>}
              </Box>
            </Box>
            <Button
              variant='contained'
              color='info'
              sx={{ my: 4 }}
              onClick={() => confirmCreditCheck()}
              disabled={isLoading}
            >
              Confirm Credit Check
            </Button>
          </Box>
        ) : (
          <Box sx={{ p: 4, background: 'lightgray', textAlign: 'center' }}>Search tenant with full email address</Box>
        )}
      </Grid>
    </Grid>
  )
}

export default TenantConfirm
