function maskPhone(input) {
  input.maxLength = 15
  setTimeout(function () {
    input.value = formatPhone(input.value)
  }, 1)
}

function formatPhone(value) {
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d\d)(\d)/g, '($1) $2')

  if (value.length < 14) {
    value = value.replace(/(\d{4})(\d)/, '$1-$2')
  } else {
    value = value.replace(/(\d{5})(\d)/, '$1-$2')
  }

  return value
}
