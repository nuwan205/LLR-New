// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types
import { PropertiesDataType } from 'src/@core/components/properties/types'

const data: PropertiesDataType[] = [
  {
    propertyName: 'London',
    toolkitName: '1',
    address: 'Halvah liquorice pastry marshmallow sugar plum.',
    headTenant: 'Tom Hardy'
  }
]

mock.onGet('/pages/user-properties').reply(() => [200, data])
