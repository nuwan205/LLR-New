const JSON_PREFIX = '22f100c9-925c-4b48-8186-b160929ba622::'

export const setItem = (key: string, inpValue: any) => {
  let value = inpValue

  if (typeof value !== 'string') value = `${JSON_PREFIX}${JSON.stringify(value)}`

  return localStorage.setItem(`v1::${process.env.NODE_ENV}::${document.domain}::${key}`, value)
}

export const getItem = (key: string) => {
  let storeValue = localStorage.getItem(`v1::${process.env.NODE_ENV}::${document.domain}::${key}`)

  if (!storeValue) return storeValue

  if (storeValue.indexOf(JSON_PREFIX) === 0) {
    try {
      storeValue = JSON.parse(storeValue.slice(JSON_PREFIX.length))
    } catch (e) {
      console.error(`Attempted to get "${key}" which starts with JSON_PREFIX, but it's not valid JSON`)

      return null
    }
  }

  return storeValue
}

export const removeItem = (key: string) => {
  return localStorage.removeItem(`v1::${process.env.NODE_ENV}::${document.domain}::${key}`)
}
