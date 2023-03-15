// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types
import { StatsDataType } from 'src/@core/components/dashboard-stats/types'

const data: StatsDataType = {
  properties: 10,
  tenants: 12,
  toolkits: 10
}

mock.onGet('/pages/dashboard/stats').reply(() => [200, data])
