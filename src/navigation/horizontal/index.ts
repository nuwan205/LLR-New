// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import AccountMultipleOutline from 'mdi-material-ui/AccountMultipleOutline'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'

// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => [
  {
    title: 'Dashboard',
    icon: HomeOutline,
    path: '/dashboard'
  },
  {
    title: 'Manage Tenants',
    icon: AccountMultipleOutline,
    path: '/tenants'
  },
  {
    title: 'Profile',
    icon: AccountOutline,
    path: '/profile'
  },
  {
    title: 'Subscriptions',
    icon: CurrencyUsd,
    path: '/subscriptions'
  }
]

export default navigation
