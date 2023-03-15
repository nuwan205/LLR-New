import { LandlordFormData, LandlordResponseType } from 'src/context/types'

interface DataType {
  [key: string]: any
}

export default function landlordStateToApi(state: LandlordFormData) {
  const { email, title, firstName, lastName, ownership, phone, tradingAddress, registeredAddress } = state

  const data: DataType = {
    email,
    title,
    firstName,
    lastName,
    ownership,
    phone,
    registeredAddress
  }

  if (ownership) {
    data.tradingAddress = tradingAddress
  }

  return data
}

export function landloardApitoState(apiRes: LandlordResponseType): LandlordFormData {
  const {
    email,
    title,
    firstName,
    lastName,
    ownership,
    phone,
    tradingAddressLine1,
    tradingAddressLine2,
    tradingAddressCity,
    tradingAddressPostCode,
    registeredAddressLine1,
    registeredAddressLine2,
    registeredAddressCity,
    registeredAddressPostCode
  } = apiRes

  return {
    email,
    title,
    firstName,
    lastName: lastName || '',
    ownership: ownership === 'PRIVATE',
    phone: phone || '',
    tradingAddress: {
      address1: tradingAddressLine1,
      address2: tradingAddressLine2 || '',
      city: tradingAddressCity,
      postCode: tradingAddressPostCode
    },
    registeredAddress: {
      address1: registeredAddressLine1 || '',
      address2: registeredAddressLine2 || '',
      city: registeredAddressCity || '',
      postCode: registeredAddressPostCode || ''
    }
  }
}
