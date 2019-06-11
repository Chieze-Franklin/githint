import React from 'react';
import TreeMenu from 'react-simple-tree-menu';

function TreeView(props) {
  const matchSearch = ({key, searchTerm}) => {
    return new RegExp(searchTerm.replace('[', '\\[')).test(key);
  };
  const onClickItem = (props) => {
    // console.log(props)
  };
  return (<TreeMenu
    data={props.data}
    onClickItem={props.onClickItem || onClickItem}
    matchSearch={props.matchSearch || matchSearch}
    />);
}

export default TreeView;