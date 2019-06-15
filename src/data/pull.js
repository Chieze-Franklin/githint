export default [
  {
    key: 'pull.url',
    label: 'url',
    example: '"https://api.github.com/repos/octocat/Hello-World/pulls/1347"'
  },
  {
    key: 'pull.id',
    label: 'id',
    example: '1'
  },
  {
    key: 'pull.node_id',
    label: 'node_id',
    example: '"MDExOlB1bGxSZXF1ZXN0MQ=="'
  },
  {
    key: 'pull.number',
    label: 'number',
    example: '1347'
  },
  {
    key: 'pull.body',
    label: 'body',
    example: '"Please pull these awesome changes"'
  },
  {
    key: 'pull.comments_url',
    label: 'comments_url',
    example: '"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments"'
  },
  {
    key: 'pull.commits_url',
    label: 'commits_url',
    example: '"https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits"'
  },
  {
    key: 'pull.diff_url',
    label: 'diff_url',
    example: '"https://github.com/octocat/Hello-World/pull/1347.diff"'
  },
  {
    key: 'pull.html_url',
    label: 'html_url',
    example: '"https://github.com/octocat/Hello-World/pull/1347"'
  },
  {
    key: 'pull.issue_url',
    label: 'issue_url',
    example: '"https://api.github.com/repos/octocat/Hello-World/issues/1347"'
  },
  {
    key: 'pull.labels',
    label: 'labels',
    nodes: [
      {
        key: 'pull.labels[0]|pull.labels.0',
        label: '0',
        nodes: [
          {
            key: 'pull.labels[0].id|pull.labels.0.id',
            label: 'id',
            example: '208045946'
          },
          {
            key: 'pull.labels[0].node_id|pull.labels.0.node_id',
            label: 'node_id',
            example: '"MDU6TGFiZWwyMDgwNDU5NDY="'
          },
          {
            key: 'pull.labels[0].url|pull.labels.0.url',
            label: 'url',
            example: '"https://api.github.com/repos/octocat/Hello-World/labels/bug"'
          },
          {
            key: 'pull.labels[0].name|pull.labels.0.name',
            label: 'name',
            example: '"bug"'
          },
          {
            key: 'pull.labels[0].description|pull.labels.0.description',
            label: 'description',
            example: '"Something isn\'t working"'
          },
          {
            key: 'pull.labels[0].color|pull.labels.0.color',
            label: 'color',
            example: '"f29513"'
          },
          {
            key: 'pull.labels[0].default|pull.labels.0.default',
            label: 'default',
            example: 'true'
          },
        ]
      },
    ]
  },
  {
    key: 'pull.locked',
    label: 'locked',
    example: 'true'
  },
  {
    key: 'pull.patch_url',
    label: 'patch_url',
    example: '"https://github.com/octocat/Hello-World/pull/1347.patch"'
  },
  {
    key: 'pull.review_comment_url',
    label: 'review_comment_url',
    example: '"https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}"'
  },
  {
    key: 'pull.review_comments_url',
    label: 'review_comments_url',
    example: '"https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments"'
  },
  {
    key: 'pull.state',
    label: 'state',
    example: '"open"'
  },
  {
    key: 'pull.title',
    label: 'title',
    example: '"new-feature"'
  },
  {
    key: 'pull.statuses_url',
    label: 'statuses_url',
    example: '"https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e"'
  },
  {
    key: 'pull.user',
    label: 'user',
    nodes: [
      {
        key: 'pull.user.login',
        label: 'login',
        example: '"octocat"'
      },
      {
        key: 'pull.user.id',
        label: 'id',
        example: '1'
      },
      {
        key: 'pull.user.node_id',
        label: 'node_id',
        example: '"MDQ6VXNlcjE="'
      },
      {
        key: 'pull.user.avatar_url',
        label: 'avatar_url',
        example: '"https://github.com/images/error/octocat_happy.gif"'
      },
      {
        key: 'pull.user.events_url',
        label: 'events_url',
        example: '"https://api.github.com/users/octocat/events{/privacy}"'
      },
      {
        key: 'pull.user.followers_url',
        label: 'followers_url',
        example: '"https://api.github.com/users/octocat/followers"'
      },
      {
        key: 'pull.user.following_url',
        label: 'following_url',
        example: '"https://api.github.com/users/octocat/following{/other_user}"'
      },
      {
        key: 'pull.user.gists_url',
        label: 'gists_url',
        example: '"https://api.github.com/users/octocat/gists{/gist_id}"'
      },
      {
        key: 'pull.user.gravatar_id',
        label: 'gravatar_id',
        example: '""'
      },
      {
        key: 'pull.user.html_url',
        label: 'html_url',
        example: '"https://github.com/octocat"'
      },
      {
        key: 'pull.user.organizations_url',
        label: 'organizations_url',
        example: '"https://api.github.com/users/octocat/orgs"'
      },
      {
        key: 'pull.user.received_events_url',
        label: 'received_events_url',
        example: '"https://api.github.com/users/octocat/received_events"'
      },
      {
        key: 'pull.user.repos_url',
        label: 'repos_url',
        example: '"https://api.github.com/users/octocat/repos"'
      },
      {
        key: 'pull.user.site_admin',
        label: 'site_admin',
        example: 'false'
      },
      {
        key: 'pull.user.starred_url',
        label: 'starred_url',
        example: '"https://api.github.com/users/octocat/starred{/owner}{/repo}"'
      },
      {
        key: 'pull.user.subscriptions_url',
        label: 'subscriptions_url',
        example: '"https://api.github.com/users/octocat/subscriptions"'
      },
      {
        key: 'pull.user.type',
        label: 'type',
        example: '"User"'
      },
      {
        key: 'pull.user.url',
        label: 'url',
        example: '"https://api.github.com/users/octocat"'
      },
    ]
  },
]
