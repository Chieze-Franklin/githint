import React from 'react';
import { Link } from "react-router-dom";

import { connect } from '../../context-api-redux';

import SiteWrapper from '../layouts/SiteWrapper';

import {
  Page,
  // Avatar,
  // Icon,
  Grid,
  Card,
  // Text,
  // Table,
  // Alert,
  // Progress,
  // colors,
  // Dropdown,
  // Button,
  // StampCard,
  // StatsCard,
  // ProgressCard,
  // Badge,
} from "tabler-react";

function Home(props) {
  return (<SiteWrapper>
    <Page.Content>
      <Grid.Row>
        <Grid.Col md={12} xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>Introduction</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>
                {props.appName} ensures that your pull requests follow specified conventions.
              </p>
              <p>
                <img src="../images/screenshots/passing-tests.png" alt="" />
              </p>
              <p>
                There are conventions that may not be easily checked with tools like ESLint or Hound CI.
                These could range from arbitrary checks like{" "}
                <code>
                  A pull request must be raised by a user whose first name is not more than 6 characters long
                </code>
                {" "}to more practical checks like{" "}
                <code>
                  A pull request must have at least 2 review comments
                </code>
                .{" "}{props.appName} thrives on checking these kinds of conventions.
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
                add a <Link to="/config">{props.appConfig} file</Link> to the root directory of the repository. That's it!
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

export default connect(mapStateToProps, null)(Home);
