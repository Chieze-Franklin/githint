import React from 'react';

import { connect } from '../../context-api-redux';

import SiteWrapper from '../layouts/SiteWrapper';

import {
  Page,
  Grid,
  Card,
  Icon
} from "tabler-react";

function Privacy(props) {
  return (<SiteWrapper>
    <Page.Content title="Support">
      <Grid.Row>
        <Grid.Col md={12} xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>Issues</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>
                The development of {props.appName} happens in the open
                on <a href="https://github.com/Chieze-Franklin/githint-bot">GitHub</a>. To
                raise new issues or to see existing issues,
                go <a href="https://github.com/Chieze-Franklin/githint-bot/issues">here</a>.
              </p>
              <p>
                The development of this {props.appName} website also happens in the open
                on <a href="https://github.com/Chieze-Franklin/githint">GitHub</a>. To
                raise new issues or to see existing issues,
                go <a href="https://github.com/Chieze-Franklin/githint/issues">here</a>.
              </p>
            </Card.Body>
          </Card>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col md={12} xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>Contact</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>
                <Icon prefix="fe" name="mail" /> <a href="mailto:chieze.franklin@gmail.com">
                  chieze.franklin@gmail.com</a><br />
                <Icon prefix="fe" name="twitter" /> <a href="https://twitter.com/franklin_chieze">
                  @franklin_chieze</a><br />
                <Icon prefix="fe" name="github" /> <a href="https://github.com/Chieze-Franklin">
                  @Chieze-Franklin</a>
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
