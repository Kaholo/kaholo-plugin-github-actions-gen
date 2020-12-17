# github-action-gen-job
GitHub Actions yml generator for jobs and triggers

## Method: Create Job

**Description:**

Create a new job

**Parameters:**

* ID - the id of the job. The ID value will be used to connect steps to the job.
* Name - The job name
* Environment - Enviorment variables (one per line)
* Nedds - Identifies any jobs that must complete successfully before this job will run.
* Runs On (Autocomplete) - The type of machine to run the job on. The machine can be either a GitHub-hosted runner or a self-hosted runner.


## Method: Create Webhook Event Trigger

**Description:**

Configure your workflow to run when webhook events are created on GitHub.
Full list of the events can be found on [GitHub's documentation](https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows#webhook-events)

**Parameters:**

* Event - the name of the webhook event
* Types - The even't activity types to use (one per line)


## Method: Create Push or Pull Request Trigger

**Description:**

Configure a workflow to run on specific branches or tags. For a pull_request event, only branches and tags on the base are evaluated.
More info can be found on [GitHub's documentation](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)

**Parameters:**

* Type - Choose either to create a trigger for a Push or a Pull Request
* branches - accept glob patterns that use the * and ** wildcard characters to match more than one branch or tag name.
* tags - accept glob patterns that use the * and ** wildcard characters to match more than one branch or tag name.


## Method: Create Schedule Trigger

**Description:**

schedule a workflow to run at specific UTC times using POSIX cron syntax. Scheduled workflows run on the latest commit on the default or base branch.
More info can be found on [GitHub's documentation](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#onschedule)

**Parameters:**

* Cron - The cron job to use for the schedule
