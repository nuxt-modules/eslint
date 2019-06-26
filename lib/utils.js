const moduleExists = (name) => {
  try {
    return require.resolve(name)
  } catch (e) {
    return false
  }
}

module.exports = {
  moduleExists
}
