import { toolkitMockData } from './toolkitMockData'

export const productList = [
  {
    id: process.env.NEXT_PUBLIC_PACKAGE_1,
    services: toolkitMockData.toolkit1
  },
  {
    id: process.env.NEXT_PUBLIC_PACKAGE_2,
    services: toolkitMockData.toolkit2
  },
  {
    id: process.env.NEXT_PUBLIC_PACKAGE_3,
    services: toolkitMockData.toolkit3,
    recommended: true
  }
]
