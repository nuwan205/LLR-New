export default function (error: any) {
  if (error) {
    if (typeof error === 'string') {
      return error
    } else if (Array.isArray(error)) {
      return error[0].message
    } else if (error.message) {
      return error.message
    } else {
      return 'Something went wrong'
    }
  }
}
