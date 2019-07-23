import React from 'react';

import SiteWrapper from '../layouts/SiteWrapper';
import treeData from '../../data';
import TreeView from '../TreeView';

import {
  Page,
  Grid,
} from 'tabler-react';

function Directory(props) {
  const hint = `You can browse through the '${props.object}' object by searching ` +
    `for ${props.object}.{field}.{innerField}...\n` +
    `For instance: ${props.object}${props.object === "branch" ? ".name" : ".url"}`;
  const placeholder = `Browse the '${props.object}' object`;
  return (<SiteWrapper>
    <Page.Content>
      <Grid.Row>
        <Grid.Col md={12} xl={12}>
          <TreeView data={treeData[props.object]} hint={hint} placeholder={placeholder} />
        </Grid.Col>
      </Grid.Row>
    </Page.Content>
  </SiteWrapper>);
}

export default Directory;
