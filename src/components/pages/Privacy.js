import React from 'react';

import { connect } from '../../context-api-redux';

import SiteWrapper from '../layouts/SiteWrapper';

import {
  Page,
  Grid,
  Card,
} from "tabler-react";

function Privacy(props) {
  return (<SiteWrapper>
    <Page.Content title="Privacy">
      <Grid.Row>
        <Grid.Col md={12} xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>{props.appName} does not collect, store or share your data</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>
                {props.appName} does not collect, store or share any piece of information about you
                or your source code. {props.appName} works with the <i>metadata</i> of branches,
                commits, pull requests and trees of your repository by retrieving them via the
                GitHub API and making them available to you (and only you) in your {props.appConfig} file checks.
              </p>
              <p>
                The only file ever read from your repository is the {props.appConfig} file.
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

export default connect(mapStateToProps, null)(Privacy);
