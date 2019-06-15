export default [
  {
    key: 'tree.sha',
    label: 'sha',
    example: '"fc6274d15fa3ae2ab983129fb037999f264ba9a7"'
  },
  {
    key: 'tree.url',
    label: 'url',
    example: '"https://api.github.com/repos/octocat/Hello-World/trees/fc6274d15fa3ae2ab983129fb037999f264ba9a7"'
  },
  {
    key: 'tree.tree',
    label: 'tree',
    nodes: [
      {
        key: 'tree.tree[0]|tree.tree.0',
        label: '0',
        nodes: [
          {
            key: 'tree.tree[0].sha|tree.tree.0.sha',
            label: 'sha',
            example: '"7c258a9869f33c1e1e1f74fbb32f07c86cb5a75b"'
          },
          {
            key: 'tree.tree[0].path|tree.tree.0.path',
            label: 'path',
            example: '"subdir/file.txt"'
          },
          {
            key: 'tree.tree[0].mode|tree.tree.0.mode',
            label: 'mode',
            example: '"100644"'
          },
          {
            key: 'tree.tree[0].type|tree.tree.0.type',
            label: 'type',
            example: '"blob"'
          },
          {
            key: 'tree.tree[0].size|tree.tree.0.size',
            label: 'size',
            example: '132'
          },
          {
            key: 'tree.tree[0].url|tree.tree.0.url',
            label: 'url',
            example: '"https://api.github.com/repos/octocat/Hello-World/git/7c258a9869f33c1e1e1f74fbb32f07c86cb5a75b"'
          },
        ]
      },
    ]
  },
  {
    key: 'tree.truncated',
    label: 'truncated',
    example: 'false'
  },
]
