import React from 'react';

import SiteWrapper from '../layouts/SiteWrapper';
import treeData from '../../data';
import TreeView from '../TreeView';

import {
  Page,
  Grid,
} from 'tabler-react';

function Directory(props) {
  return (<SiteWrapper>
    <Page.Content>
      <Grid.Row>
        <Grid.Col md={12} xl={12}>
          <p>
            You can browse through the <code>{props.object}</code> object by searching
            for <code>{props.object}{".{field}.{innerField}..."}</code><br />
            For instance: <code>{props.object}{props.object === "branch" ? ".name" : ".url"}</code>
          </p>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col md={12} xl={12}>
          <TreeView data={treeData[props.object]} />
        </Grid.Col>
      </Grid.Row>
    </Page.Content>
  </SiteWrapper>);
}

export default Directory;
