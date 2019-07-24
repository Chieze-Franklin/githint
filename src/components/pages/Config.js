import React from 'react';
import { Link } from "react-router-dom";

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
                To start using {props.appName}, first
                {" "}<a href="https://github.com/apps/githint-bot/installations/new" target="_blank" rel="noopener noreferrer">
                  install the {props.appName} GitHub app
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
                <i>*refresh this page to see syntax-highlighting applied to the code snippets</i>
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
		"Only Franklin can edit the .githint.json file": {
			"script": [
				"let file = commit.files[0].filename",
				"let editor = commit.commit.author.name",
				"return (file != '.githint.json' || editor == 'Chieze Franklin');"
			],
			"message": "The .githint.json file shouldn't be touched; Only Franklin can edit the file."
		},
		"Repo must contain CONTRIBUTING.md": "tree.tree.filter(t => t.path === 'CONTRIBUTING.md').length === 1",
		"A PR cannot touch more than 1 file": "pull.changed_files < 2"
	}
}`
                }
                </code>
                </pre>
              </p>
              <p>
                To see a few sample {props.appConfig} files, click
                {" "}<a href="https://github.com/Chieze-Franklin/githint-samples">here</a>.
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
                in its <code>script</code> field, the message to show to the user in the
                <code>message</code> field, and a boolean value which determines if a check should be
                skipped in the <code>skip</code> field. The <code>script</code> field can be either a
                <code>String</code> or a <code>String Array</code>, and follows the same rules explained
                above. The <code>message</code> field (which can also be either a <code>String</code> or
                a <code>String Array</code>) holds the message to be shown to the user
                (irrespective of the outcome of the check). The <code>skip</code> (<code>false</code> by
                default), when set to <code>true</code>, will force make that check to be skipped.<br />
                Example:
                <pre>
                <code>
                {
`{
	"checks": {
		"Only Franklin can edit the .githint.json file": {
			"skip": false,
			"script": [
				"let file = commit.files[0].filename",
				"let editor = commit.commit.author.name",
				"return (file != '.githint.json' || editor == 'Chieze Franklin');"
			],
			"message": "The .githint.json file shouldn't be touched; Only Franklin can edit the file."
		}
	}
}`
                }
                </code>
                </pre>
              </p>
              <p>
                In the check above, the message returned to the user is always
                {" "}<code>The .githint.json file shouldn't be touched; Only Franklin can edit the file.</code>{" "}
                That may not be what you want. You may want to return different messages based on
                the result of the check. To do this, instead of returning a simple boolean value from
                your script, you return an object that contains 2 fields:<br />
                <Icon prefix="fe" name="arrow-right-circle" /> <code>result</code> which is a boolean field
                that determines if the check passed or failed<br />
                <Icon prefix="fe" name="arrow-right-circle" /> <code>message</code> which is the message you
                want to display to the user at that particular point in time.<br />
                For instance, you may want to include the name of the user that raised the pull request
                in the message displayed to them.
                <pre>
                <code>
                {
`{
	"checks": {
		"Only Franklin can edit the .githint.json file": {
			"skip": false,
			"script": [
				"let file = commit.files[0].filename",
				"let editor = commit.commit.author.name",
				"let result = (file != '.githint.json' || editor == 'Chieze Franklin');",
				"if (result === true) {",
				" return result;",
				"} else {",
				" return {",
				"   result: result,",
				"   message: \`Hi $\{editor}, the .githint.json file shouldn't be touched; Only Franklin can edit the file.\`",
				" }",
				"}"
			],
			"message": "The .githint.json file shouldn't be touched; Only Franklin can edit the file."
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
                Before execution of the checks, {props.appName} ensures it can find the {props.appConfig} file
                in the root directory of the repository.
                If the {props.appConfig} file cannot be found or successfully read, the built-in check
                {" "}<code>GitHint: check for {props.appConfig} file</code> will fail.<br />
                If this happens ensure the {props.appConfig} file exists and is a valid JSON document.
              </p>
              <p>
                {props.appName} also ensures a pull request has been created. Due to the fact that GitHub
                starts running check suites once a commit is made to a repository (even before a pull request
                is created), there may be no pull request when the checks are executed. If no pull request can
                be found the built-in check <code>GitHint: check for pull request</code> will fail.<br />
                If this happens simply <em>re-run</em> the failed check.<br />
                For more info on this issue and how to handle it, see
                {" "}<a href="https://github.com/Chieze-Franklin/githint-bot/issues/11">here</a>.
              </p>
              <p>
                The code snippets for the checks have access to the following (runtime-generated) objects:
                {" "}<code>branch</code>, <code>commit</code>, <code>pull</code>, <code>tree</code>.
              </p>
            </Card.Body>
          </Card>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xl={3} lg={6} md={12} sm={12} xs={12}>
          <Card>
            <Card.Header>
              <Card.Title>branch</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>
                A <a href="https://help.github.com/en/articles/about-branches">branch</a> is used to
                isolate development work without affecting existing and ongoing work.
              </p>
              <p>
                The <code>branch</code> object holds information like the name of the branch (<code>branch.name</code>)
                and if the branch is protected (<code>branch.protected</code>).
              </p>
              <hr />
              <p>
                <Icon prefix="fe" name="link" /> <Link to="/branch">branch object directory</Link><br />
                <Icon prefix="fe" name="link" /> <a href="https://developer.github.com/v3/repos/branches/#get-branch">
                  get branch (GitHub API)</a>
              </p>
            </Card.Body>
          </Card>
        </Grid.Col>
        <Grid.Col xl={3} lg={6} md={12} sm={12} xs={12}>
          <Card>
            <Card.Header>
              <Card.Title>commit</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>
                A <a href="https://help.github.com/en/articles/github-glossary#commit">commit</a> is an
                individual change to a file  (or set of files).
              </p>
              <p>
                The <code>commit</code> object holds information like the unique hash of the commit
                (<code>commit.sha</code>) and the files modified in the commit (<code>commit.files</code>).
              </p>
              <hr />
              <p>
                <Icon prefix="fe" name="link" /> <Link to="/commit">commit object directory</Link><br />
                <Icon prefix="fe" name="link" /> <a href="https://developer.github.com/v3/repos/commits/#get-a-single-commit">
                  get commit (GitHub API)</a>
              </p>
            </Card.Body>
          </Card>
        </Grid.Col>
        <Grid.Col xl={3} lg={6} md={12} sm={12} xs={12}>
          <Card>
            <Card.Header>
              <Card.Title>pull</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>
                A <a href="https://help.github.com/en/articles/about-pull-requests">pull request</a> lets
                you tell others about changes you've pushed to a branch in a repository on GitHub.
              </p>
              <p>
                The <code>pull</code> object holds information like the Github username of the user who
                raised the pull request (<code>pull.user.login</code>) and if the pull request has been
                closed (<code>pull.state</code>).
              </p>
              <p>
                Note that the <code>pull</code> object may be undefined the first time checks are run.<br />
                For more info on this issue and how to handle it, see
                {" "}<a href="https://github.com/Chieze-Franklin/githint-bot/issues/11">here</a>.
              </p>
              <hr />
              <p>
                <Icon prefix="fe" name="link" /> <Link to="/pull">pull object directory</Link><br />
                <Icon prefix="fe" name="link" /> <a href="https://developer.github.com/v3/pulls/#get-a-single-pull-request">
                  get pull request (GitHub API)</a>
              </p>
            </Card.Body>
          </Card>
        </Grid.Col>
        <Grid.Col xl={3} lg={6} md={12} sm={12} xs={12}>
          <Card>
            <Card.Header>
              <Card.Title>tree</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>
                A Git <a href="https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects">tree</a> object
                creates the hierarchy between files in a Git repository.
              </p>
              <p>
                The <code>tree</code> object holds information like the files in a branch
                (<code>tree.tree</code>) and if GitHub was able to return all files in the branch
                (<code>tree.truncated</code>).
              </p>
              <hr />
              <p>
                <Icon prefix="fe" name="link" /> <Link to="/tree">tree object directory</Link><br />
                <Icon prefix="fe" name="link" /> <a href="https://developer.github.com/v3/git/trees/#get-a-tree">
                  get tree (GitHub API)</a><br />
                <Icon prefix="fe" name="link" /> <a href="https://developer.github.com/v3/git/trees/#get-a-tree-recursively">
                  get tree (including nested files and folders) (GitHub API)</a>
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
