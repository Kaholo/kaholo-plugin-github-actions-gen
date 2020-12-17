const parsers = require('./parsers');

async function checkoutStep(action) {
  const options = {
    uses : 'actions/checkout@v2',
  }
  return createStep(action,options);  
}

async function setupNodeStep(action) {
  const options = {
    uses : 'actions/setup-node@v1',
    with: {
      'node-version': action.params.nodeVersion
    }
  }
  return createStep(action,options);  
}

async function runStep(action) {
  const commands = parsers.text(action.params.command);
  const options = {
    run: commands ? commands.join(' && ') : undefined,
    'working-directory' : action.params.workingDir || undefined
  };

  return createStep(action,options);  
}

function createStep(action, options){
  const job = action.params.job;
  const name = action.params.name || undefined;
  const env = parsers.environmentVariables(action.params.env);

  if(!job)
    throw "You must specify job"
  
  return {
    type : "step",
    data : {
      job,
      step_options: {
        name,
        env,
        ...options
      }
    }
  }
}

module.exports = {
  checkoutStep,
  setupNodeStep,
  runStep
};