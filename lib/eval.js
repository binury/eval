const { VM } = require('vm2')
const _ = require('lodash');

module.exports = (str, timeout = 1000) => {
  const sandboxedEnvironment = new VM({
    sandbox: {},
    timeout
  })
  sandboxedEnvironment.freeze(_, '_');
  return sandboxedEnvironment.run(str)
}
