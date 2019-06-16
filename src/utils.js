export const createTreeNodesFromObject = (object, parentKey) => {
  const nodes = [];
  const fieldNames = Object.keys(object);
  for (let i = 0; i < fieldNames.length; i++) {
    const fieldName = fieldNames[i];
    const fieldValue = object[fieldName];
    const node = {
      key: `${parentKey}.${fieldName}`,
      label: fieldName
    };
    if (fieldValue === null) {
      node.example = `null`;
    } else if (typeof fieldValue === 'object') {
      if (Array.isArray(fieldValue)) {
        if (fieldValue.length === 0) {
          node.example = '[]';
        } else if (typeof fieldValue[0] === 'object') {
          node.nodes = [];
          for (let j = 0; j < fieldValue.length; j++) {
            const innerNode = {
              key: `${node.key}[${j}]`,
              label: `${j}`
            };
            const fieldValueElement = fieldValue[j];
            innerNode.nodes = createTreeNodesFromObject(fieldValueElement, innerNode.key);
            node.nodes.push(innerNode);
          }
        } else {
          if (typeof fieldValue[0] === 'string') {
            node.example = `[${fieldValue.map(value => `"${value}"`).join(', ')}]`;
          } else {
            node.example = `[${fieldValue.join(', ')}]`;
          }
        }
      } else {
        node.nodes = createTreeNodesFromObject(fieldValue, node.key);
      }
    } else {
      if (typeof fieldValue === 'string') {
        node.example = `"${fieldValue}"`;
      } else {
        node.example = `${fieldValue}`;
      }
    }
    nodes.push(node);
  }
  return nodes;
}
