import * as core from '@actions/core';

console.log('node worked')
console.log(process.argv[2])
core.setOutput('thing', 'hello')
core.setOutput('fallback', false)
core.warning('something went wrong')