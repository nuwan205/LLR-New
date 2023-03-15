import { PropertyFormData, TenantFormData } from '../context/types'
import propertyStateToApi from './handlePropertyState'

interface DataType {
  [key: string]: any
}

export default function tenantStateToApi(state: TenantFormData) {
  const { email, title, firstName, lastName, phone, birthDate, isGuarantorRequired, guarantorDetails, addresses } =
    state

  const data: DataType = {
    email,
    title,
    firstName,
    lastName,
    phone,
    birthDate,
    addresses,
    isGuarantorRequired
  }

  if (isGuarantorRequired) {
    data.guarantorDetails = {
      email: guarantorDetails.email,
      title: guarantorDetails.title,
      firstName: guarantorDetails.firstName,
      lastName: guarantorDetails.lastName,
      phone: guarantorDetails.phone,
      ...guarantorDetails.address
    }
  }

  return data
}

export const propertyWithTeantStateToApi = (propertyState: PropertyFormData, tenantState: TenantFormData) => {
  const propertyDetails = propertyStateToApi(propertyState)
  const tenantDetails = tenantStateToApi(tenantState)

  return { propertyDetails, tenantDetails }
}
