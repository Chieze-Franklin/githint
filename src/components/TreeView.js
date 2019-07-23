import React from 'react';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

// https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxTreeView/
import Tree from 'devextreme-react/tree-view';

const keyStyle = 'color:blue'
const getValueStyle = (value) => {
  value = value.toString();
  if (value.startsWith('"')) {
    return 'color:brown';
  } else if (new RegExp('[0-9]+').test(value)) {
    return 'color:teal';
  } else if (new RegExp('((true)|(false))').test(value)) {
    return 'color:magenta';
  } else {
    return 'color:black';
  }
}

function TreeView(props) {
  const display = ({label, example}) => {
    return typeof example !== 'undefined' ? `${label}: ${example}` : `${label}`;
  };
  const template = (itemData, itemIndex, element) => {
    // element.append(
    //   itemData.label
    // )
    var d = document.createElement("div");
    const {label, example} = itemData;
    if (typeof example !== 'undefined') {
      d.innerHTML = `<span style=${keyStyle}>${label}</span>: ` +
        `<span style=${getValueStyle(example)}>${example}</span>`;
    } else {
      d.innerHTML = `<span style=${keyStyle}>${label}</span>`;
    }
    return d;
  };
  
  return (
    <React.Fragment>
      <Tree
        id={'treeview'}
        displayExpr={display}
        expandAllEnabled={true}
        items={props.data}
        itemsExpr={'nodes'}
        itemTemplate={template}
        keyExpr={'key'}
        noDataText={'No field found matching the search term.'}
        searchEnabled={true}
        searchExpr={['key']}
        searchMode={'contains'}
        width={'auto'}
      />
    </React.Fragment>
  );
}

export default TreeView;
