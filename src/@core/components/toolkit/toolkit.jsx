import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Grid } from '@mui/material'
import toast from 'react-hot-toast'

import PricingCard from './PricingCard'
import { api } from 'src/utils/api'
import errorHandler from 'src/utils/errorHandler'
import { productList as products } from 'src/utils/productList'

export default function Toolkit() {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    api
      .get('/toolkit/list')
      .then(res => {
        setProductList(res.data)
        setLoading(false)
      })
      .catch(err => {
        toast.error(errorHandler(err))
        setLoading(false)
      })
  }, [])

  if (loading)
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100vh'
        }}
      >
        <CircularProgress />
      </Box>
    )

  return (
    <Grid
      container
      alignItems='stretch'
      spacing={6}
      sx={{
        pb: theme => `${theme.spacing(40)} !important`,
        justifyContent: 'center',
        flexDirection: { xs: 'row-reverse', sm: 'row' },
        flexWrap: { xs: 'wrap-reverse', sm: 'wrap' }
      }}
    >
      {productList.map(pr => {
        const product = products.find(p => p.id === pr.stripeProductId)

        return (
          <Grid item xs={11} sm={6} md={4} key={pr.stripeProductId}>
            <PricingCard
              id={pr.stripeProductId}
              title={pr.name}
              price={pr.price.amount}
              services={product.services}
              image={pr.image}
              recommended={!!product.recommended}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}
