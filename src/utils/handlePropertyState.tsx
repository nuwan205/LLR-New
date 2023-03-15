import { PropertyFormData } from 'src/context/types'

export default function propertyStateToApi(state: PropertyFormData) {
  const { address } = state

  const data = {
    address1: address.address1,
    address2: address.address2,
    city: address.city,
    postCode: address.postCode
  }

  return data
}
