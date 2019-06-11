import React from 'react';

import SiteWrapper from '../layouts/SiteWrapper';

import {
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  colors,
  Dropdown,
  Button,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge,
} from "tabler-react";

function Home() {
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
                Ghapy ensures that your pull requests follow specified conventions.
              </p>
              <p>
                There are conventions that may not be easily checked with tools like ESLint or Hound CI.
                These could range from more arbitrary checks like{" "}
                <code>
                  A pull request must be raised by a user whose first name is not more than 6 characters long
                </code>
                {" "}to more practical checks like{" "}
                <code>
                  A pull request must have at least 2 review comments
                </code>
                .{" "}Ghapy thrives on checking these kinds of conventions.
              </p>
              <p>
                Ghapy fetches metadata about pull requests, commits, branches, trees, and passes the
                metadata to user-defined scripts for evaluation. Such scripts are expected to return
                {" "}<code>true</code> or <code>false</code> to determine if a pull request is ready to be merged.
              </p>
            </Card.Body>
          </Card>
        </Grid.Col>
      </Grid.Row>
    </Page.Content>
  </SiteWrapper>);
}

export default Home;
