const {getEnviorments} = require('./autocomplete')
const {createPushOrPullReuqestTrigger, createWebhookEventTrigger, createScheduleTrigger} = require('./triggers')
const parsers = require('./parsers');

async function createJob(action){
  return {
    type : "job",
    data :{
      id: action.params.id,
      options : {
        name: action.params.name,
        needs: parsers.text(action.params.needs),
        env: parsers.environmentVariables(action.params.env),
        runsOn : action.params.runsOn ? (action.params.runsOn.id || action.params.runsOn) : undefined,
      }
    }
  }
}

module.exports = {
  createJob,
  // autocomplete
  getEnviorments,
  // pipeline triggers
  createPushOrPullReuqestTrigger, 
  createWebhookEventTrigger,
  createScheduleTrigger
};