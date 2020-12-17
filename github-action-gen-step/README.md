# github-action-gen-step
GitHub Actions yml generator for jobs steps.

## Method: Run step

**Description:**

Create a new run command step

**Parameters:**

* Job ID - the ID of the job to add the step to.
* Name - the name of the job.
* Environment Variables - key-value pairs (one per line)
* Working Directory - working directory path
* Command - the commands to run (one per line)

## Method: Checkout step

**Description:**

Create a new checkout step

**Parameters:**

* Job ID - the ID of the job to add the step to.
* Name - the name of the job.
* Environment Variables - key-value pairs (one per line)

## Method: Setup Node step

**Description:**

Create a new setup node step. 

**Parameters:**

* Job ID - the ID of the job to add the step to.
* Name - the name of the job.
* Environment Variables - key-value pairs (one per line)
* Node Version - the node version you wish to use
