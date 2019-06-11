export default [
  {
    key: 'commit.url',
    label: 'url',
    example: '"https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e"'
  },
  {
    key: 'commit.sha',
    label: 'sha',
    example: '"6dcb09b5b57875f334f61aebed695e2e4193db5e"',
  },
  {
    key: 'commit.node_id',
    label: 'node_id',
    example: '"MDY6Q29tbWl0NmRjYjA5YjViNTc4NzVmMzM0ZjYxYWViZWQ2OTVlMmU0MTkzZGI1ZQ=="'
  },
  {
    key: 'commit.html_url',
    label: 'html_url',
    example: '"https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e"',
  },
  {
    key: 'commit.comments_url',
    label: 'comments_url',
    example: '"https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments"'
  },
  {
    key: 'commit.commit',
    label: 'commit',
    nodes: [
      {
        key: 'commit.commit.url',
        label: 'url',
        example: '"https://api.github.com/repos/octocat/Hello-World/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e"'
      },
      {
        key: 'commit.commit.author',
        label: 'author',
        nodes: [
          {
            key: 'commit.commit.author.name',
            label: 'name',
            example: '"Monalisa Octocat"'
          },
          {
            key: 'commit.commit.author.email',
            label: 'email',
            example: '"support@github.com"'
          },
          {
            key: 'commit.commit.author.date',
            label: 'date',
            example: '"2011-04-14T16:00:49Z"'
          },
        ],
      },
      {
        key: 'commit.commit.committer',
        label: 'committer',
        nodes: [
          {
            key: 'commit.commit.committer.name',
            label: 'name',
            example: '"GitHub"'
          },
          {
            key: 'commit.commit.committer.email',
            label: 'email',
            example: '"noreply@github.com"'
          },
          {
            key: 'commit.commit.committer.date',
            label: 'date',
            example: '"2011-04-14T16:00:49Z"'
          },
        ],
      },
      {
        key: 'commit.commit.message',
        label: 'message',
        example: '"Fix all the bugs"'
      },
      {
        key: 'commit.commit.tree',
        label: 'tree',
        nodes: [
          {
            key: 'commit.commit.tree.url',
            label: 'url',
            example: '"https://api.github.com/repos/octocat/Hello-World/tree/6dcb09b5b57875f334f61aebed695e2e4193db5e"'
          },
          {
            key: 'commit.commit.tree.sha',
            label: 'sha',
            example: '"6dcb09b5b57875f334f61aebed695e2e4193db5e"'
          },
        ],
      },
      {
        key: 'commit.commit.comment_count',
        label: 'comment_count',
        example: '0'
      },
      {
        key: 'commit.commit.verification',
        label: 'verification',
        nodes: [
          {
            key: 'commit.commit.verification.verified',
            label: 'verified',
            example: 'false'
          },
          {
            key: 'commit.commit.verification.reason',
            label: 'reason',
            example: '"unsigned"'
          },
          {
            key: 'commit.commit.verification.signature',
            label: 'signature',
            example: 'null'
          },
          {
            key: 'commit.commit.verification.payload',
            label: 'payload',
            example: 'null'
          },
        ],
      },
    ]
  },
];
