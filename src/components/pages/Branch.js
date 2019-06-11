import React from 'react';

import SiteWrapper from '../layouts/SiteWrapper';
import treeData from '../../data/branch';
import TreeView from '../TreeView';

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
} from 'tabler-react';

function Branch() {
  return (<SiteWrapper>
    <Page.Content>
      <Grid.Row>
        <Grid.Col md={12} xl={12}>
          <TreeView data={treeData} />
        </Grid.Col>
      </Grid.Row>
    </Page.Content>
  </SiteWrapper>);
}

export default Branch;
