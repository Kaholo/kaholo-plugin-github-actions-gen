const parsers = require("./parsers");

function createPipelineTrigger(type, options){
  return {
    type : "pipeline-trigger",
    data :{
      type: type,
      options: options
    }
  }
}


async function createWebhookEventTrigger(action){
  const event = action.params.event;
  const types = parsers.text(action.params.types);
  
  const options = !types? undefined : {
    types
  }

  return createPipelineTrigger(event, options);
}

async function createPushOrPullReuqestTrigger(action){
  const type = action.params.type;
  const branches = parsers.text(action.params.branches);
  const tags = parsers.text(action.params.tags);
  
  const options = {
    branches,
    tags
  }

  return createPipelineTrigger(type,options);
}

async function createScheduleTrigger(action){
  const options = {
    cron: action.params.cron
  }

  return createPipelineTrigger('schedule',options);
}


module.exports = {
  createWebhookEventTrigger,
  createPushOrPullReuqestTrigger,
  createScheduleTrigger
};