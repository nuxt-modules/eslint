const moduleExists = (name) => {
  try {
    return require.resolve(name)
  } catch (e) /* istanbul ignore next */ {
    return false
  }
}

module.exports = {
  moduleExists
}
