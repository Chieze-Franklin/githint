import React from 'react';

import { connect } from '../../context-api-redux';

import SiteWrapper from '../layouts/SiteWrapper';

import {
  Page,
  Grid,
  Card,
  Icon
} from "tabler-react";

function Config(props) {
  return (<SiteWrapper>
    <Page.Content>
      <Grid.Row>
        <Grid.Col md={12} xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>The {props.appConfig} file</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>
                To start using {props.appName}, first install the
                {" "}<a href="https://github.com/marketplace/ghint-bot" target="_blank" rel="noopener noreferrer">
                  {props.appName} GitHub app
                </a>{" "}
                on your repository and
                add a {props.appConfig} file to the root directory of the repository.
              </p>
              <p>
                The {props.appConfig} file is a JSON file which specifies what checks are to be performed,
                and how they are to be performed. The file contains a <code>checks</code> object which contains
                checks to be run for branches, commits, pull requests and trees. Below is a sample {props.appConfig} file.
              </p>
              <p>
                <em>*refresh page to apply syntax highlighting to below code</em>
                <pre>
                <code>
                {
`{
	"options": {
		"detectPull": true
	},
	"checks": {
		"This check always passes": "true",
		"A commit cannot touch more than 1 file": "commit.files.length < 2",
		"The message of a head commit must match the name of the branch": [
			"const commitMessage = commit.commit.message;",
			"const branchName = branch.name;",
			"return commitMessage === branchName;"
		],
		"Branch name must start with 'ft-' or 'ch-' or 'bug-' followed by stuff": {
			"script": "/^((ft-)|(ch-)|(bug-))[a-z0-9\\-]+$/.test(branch.name)",
			"message": "The name of this branch doesn't meet the specified criteria"
		},
		"Only Franklin can edit the .ghint file": {
			"script": [
				"let file = commit.files[0].filename",
				"let editor = commit.commit.author.name",
				"return (file != '.ghint' || editor == 'Chieze Franklin');"
			],
			"message": "The .ghint file shouldn't be touched; Only Franklin can edit the file."
		},
		"Repo must contain CONTRIBUTING.md": "tree.tree.filter(t => t.path === 'CONTRIBUTING.md').length === 1",
		"A PR cannot touch more than 1 file": "pull.changed_files < 2"
	}
}`
                }
                </code>
                </pre>
              </p>
            </Card.Body>
          </Card>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col md={12} xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>checks</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>
                Each field in the <code>checks</code> object represents a check to perform; the name of
                each field is the name of the check to perform and the value of each field is one of
                the following:
              </p>
              <p>
                <Icon prefix="fe" name="target" /> A <code>String</code> which represents an expression
                to be evaluated; the value is not a return statement and should not contain a
                <code>return</code> keyword.<br />
                Examples are:<br />
                &nbsp;&nbsp;&nbsp;&nbsp; <Icon prefix="fe" name="star" /> <code>"This check always passes": "true"</code><br />
                &nbsp;&nbsp;&nbsp;&nbsp; <Icon prefix="fe" name="star" /> <code>"A commit cannot touch more than 1 file": "commit.files.length {"<"} 2"</code>
              </p>
              <p>
                <Icon prefix="fe" name="target" /> A <code>String Array</code> which represents a snippet
                of code to be executed <i>as-is</i>; the value is expected to contain a <code>return</code> keyword.<br />
                Example:<br />
                &nbsp;&nbsp;&nbsp;&nbsp; <Icon prefix="fe" name="star" />
                <pre>
                <code>
                {
`{
	"checks": {
		"The message of a head commit must match the name of the branch": [
			"const commitMessage = commit.commit.message;",
			"const branchName = branch.name;",
			"return commitMessage === branchName;"
		]
	}
}`
                }
                </code>
                </pre><br />
              </p>
              <p>
                <Icon prefix="fe" name="target" /> An <code>Object</code> which holds the code to execute
                in its <code>script</code> field and the message to show to the user in the
                <code>message</code> field. The <code>script</code> field can be either a
                <code>String</code> ot a <code>String Array</code>, and follows the same rules explained
                above. The <code>message</code> field holds the message to be shown to the user
                (irrespective of the outcome of the check).<br />
                Example:
                <pre>
                <code>
                {
`{
	"checks": {
		"Only Franklin can edit the .ghint file": {
			"script": [
				"let file = commit.files[0].filename",
				"let editor = commit.commit.author.name",
				"return (file != '.ghint' || editor == 'Chieze Franklin');"
			],
			"message": "The .ghint file shouldn't be touched; Only Franklin can edit the file."
		}
	}
}`
                }
                </code>
                </pre>
              </p>
            </Card.Body>
          </Card>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col md={12} xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>Code execution</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>
                The code snippets for the checks are executed as Node-compatible JavaScript source code.
              </p>
              <p>
                Before execution of the checks, {props.appName} ensures it can find the {props.appConfig} file.
                If the {props.appConfig} file cannot be found or successfully read, the built-in check
                {" "}<code>Ghint: check for {props.appConfig} file</code> will fail.<br />
                If this happens ensure the {props.appConfig} file exists and is a valid JSON document.
              </p>
              <p>
                {props.appName} also ensures a pull request has been created. Due to the fact that GitHub
                starts running check suites once a commit is made to a repository (even before a pull request
                is created), there may be no pull request when the checks are executed. If no pull request can
                be found the built-in check <code>Ghint: check for pull request</code> will fail.<br />
                If this happens simply <em>re-run</em> the check.
              </p>
              <p>
                {props.appName} fetches metadata about pull requests, commits, branches, trees, and passes the
                metadata to user-defined scripts for evaluation. Such scripts are expected to return
                {" "}<code>true</code> or <code>false</code> to determine if a pull request is ready to be merged.
              </p>
              <p>
                To start using {props.appName}, first install the
                {" "}<a href="https://github.com/marketplace/ghint-bot" target="_blank" rel="noopener noreferrer">
                  {props.appName} GitHub app
                </a>{" "}
                on your repository and
              </p>
            </Card.Body>
          </Card>
        </Grid.Col>
      </Grid.Row>
    </Page.Content>
  </SiteWrapper>);
}

const mapStateToProps = state => ({
  appConfig: state.app.config,
  appName: state.app.name
});

export default connect(mapStateToProps, null)(Config);
