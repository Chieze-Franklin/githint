import React from 'react';
import TreeMenu from 'react-simple-tree-menu';

import 'react-virtualized/styles.css'
import 'react-virtualized-tree/lib/main.css'

import Tree, { FilteringContainer } from 'react-virtualized-tree'

const keyStyle = {
  color: 'blue'
}
const getValueStyle = (value) => {
  value = value.toString();
  if (value.startsWith('"')) {
    return {
      color: 'brown'
    }
  } else if (new RegExp('[0-9]+').test(value)) {
    return {
      color: 'teal'
    }
  } else if (new RegExp('((true)|(false))').test(value)) {
    return {
      color: 'magenta'
    }
  } else {
    return {
      color: 'black'
    }
  }
}

function TreeView(props) {
  const locale = ({label, example}) => {
    return typeof example !== 'undefined' ?
      <div>
        <span style={keyStyle}>{label}</span>:{" "}
        <span style={getValueStyle(example)}>{example}</span>
      </div> :
      <span style={keyStyle}>{label}</span>;
  };
  const matchSearch = ({key, searchTerm}) => {
    return new RegExp(searchTerm.replace('[', '\\[')).test(key);
  };
  const onClickItem = (props) => {
    // console.log(props)
  };
  return (<TreeMenu
    data={props.data}
    locale={props.locale || locale}
    matchSearch={props.matchSearch || matchSearch}
    onClickItem={props.onClickItem || onClickItem}
    />);
}

export default TreeView;
