export const isIn = (argu, min, max) => {
  return argu >= min && argu <= max
}

export const setLocal = (name, value) => {
  localStorage.name = typeof value === 'object' ? JSON.stringify(value) : value
}

export const clearLocal = (param) => {
  if (typeof param === 'string') localStorage[param] = ''
  else {
    param.forEach(prop => {
      localStorage[prop] = ''
    })
  }
}
