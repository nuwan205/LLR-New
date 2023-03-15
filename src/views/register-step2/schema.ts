import * as yup from 'yup'

const maxDate = new Date()
maxDate.setFullYear(maxDate.getFullYear() - 10)

const address = yup.object().shape({
  address1: yup.string().min(3).required('Address1 is required'),
  address2: yup.string(),
  city: yup.string().min(3).required('City/Town is required'),
  postCode: yup.string().min(3).required('Post Code is required')
})

const tenantAddress = yup.object().shape({
  address1: yup.string().min(3).required('Address1 is required'),
  address2: yup.string(),
  city: yup.string().min(3).required('City/Town is required'),
  postCode: yup.string().min(3).required('Post Code is required'),
  currentAddress: yup.boolean()
})

export const tenantSchema = yup.object().shape({
  title: yup.string().required(),
  firstName: yup.string().min(3).required(),
  lastName: yup.string().min(3).required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  birthDate: yup.string().required().nullable(),
  isGuarantorRequired: yup.boolean(),
  addresses: yup.array().of(tenantAddress),
  isCreditCheck: yup.boolean(),
  guarantorDetails: yup
    .object()
    .shape({
      title: yup.string(),
      firstName: yup.string(),
      lastName: yup.string(),
      email: yup.string(),
      phone: yup.string(),
      address: yup.object().shape({
        address1: yup.string(),
        address2: yup.string(),
        city: yup.string(),
        postCode: yup.string()
      })
    })
    .when('isGuarantorRequired', {
      is: true,
      then: yup.object().shape({
        title: yup.string().required(),
        firstName: yup.string().min(3).required(),
        lastName: yup.string().min(3).required(),
        email: yup.string().email().required(),
        phone: yup.string().required(),
        address
      })
    })
})

export const propertySchema = yup.object().shape({
  address
})

export const landlordSchema = yup.object().shape({
  title: yup.string().required(),
  firstName: yup.string().min(3).required(),
  lastName: yup.string().min(3).required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  ownership: yup.boolean(),
  tradingAddress: yup
    .object()
    .shape({
      address1: yup.string(),
      address2: yup.string(),
      city: yup.string(),
      postCode: yup.string()
    })
    .when('ownership', {
      is: true,
      then: address
    }),
  registeredAddress: address
})
