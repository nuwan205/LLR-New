// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types
import { TenantDataType } from 'src/@core/components/tenants/types'

const data: TenantDataType[] = [
  {
    fullName: 'Tom Riddle',
    propertyName: 'London'
  }
]

mock.onGet('/pages/tenants-data').reply(() => [200, data])
