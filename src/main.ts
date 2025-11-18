import * as core from '@actions/core';
const {GitHub, context} = require('@actions/github') // Captures github client and context
const parse = require('parse-diff')                  // Imports library for diff parsing

async function run() {
  try {
      const token = core.getInput('github-token', {required: true})
      const github = new GitHub(token, {} )
      const diff_url = context.payload.pull_request.diff_url
      const result = await github.request( diff_url )
      core.setOutput('diff', result )
  } catch (error) {
      core.setFailed(error.message);
  }
}

run();
