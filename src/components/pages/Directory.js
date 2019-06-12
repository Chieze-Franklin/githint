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
          <TreeView data={treeData[props.object]} />
        </Grid.Col>
      </Grid.Row>
    </Page.Content>
  </SiteWrapper>);
}

export default Directory;
