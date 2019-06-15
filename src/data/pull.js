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
    key: 'pull.active_lock_reason',
    label: 'active_lock_reason',
    example: '"too heated"'
  },
  {
    key: 'pull.assignee',
    label: 'assignee',
    nodes: [
      {
        key: 'pull.assignee.login',
        label: 'login',
        example: '"octocat"'
      },
      {
        key: 'pull.assignee.id',
        label: 'id',
        example: '1'
      },
      {
        key: 'pull.assignee.node_id',
        label: 'node_id',
        example: '"MDQ6VXNlcjE="'
      },
      {
        key: 'pull.assignee.avatar_url',
        label: 'avatar_url',
        example: '"https://github.com/images/error/octocat_happy.gif"'
      },
      {
        key: 'pull.assignee.events_url',
        label: 'events_url',
        example: '"https://api.github.com/users/octocat/events{/privacy}"'
      },
      {
        key: 'pull.assignee.followers_url',
        label: 'followers_url',
        example: '"https://api.github.com/users/octocat/followers"'
      },
      {
        key: 'pull.assignee.following_url',
        label: 'following_url',
        example: '"https://api.github.com/users/octocat/following{/other_user}"'
      },
      {
        key: 'pull.assignee.gists_url',
        label: 'gists_url',
        example: '"https://api.github.com/users/octocat/gists{/gist_id}"'
      },
      {
        key: 'pull.assignee.gravatar_id',
        label: 'gravatar_id',
        example: '""'
      },
      {
        key: 'pull.assignee.html_url',
        label: 'html_url',
        example: '"https://github.com/octocat"'
      },
      {
        key: 'pull.assignee.organizations_url',
        label: 'organizations_url',
        example: '"https://api.github.com/users/octocat/orgs"'
      },
      {
        key: 'pull.assignee.received_events_url',
        label: 'received_events_url',
        example: '"https://api.github.com/users/octocat/received_events"'
      },
      {
        key: 'pull.assignee.repos_url',
        label: 'repos_url',
        example: '"https://api.github.com/users/octocat/repos"'
      },
      {
        key: 'pull.assignee.site_admin',
        label: 'site_admin',
        example: 'false'
      },
      {
        key: 'pull.assignee.starred_url',
        label: 'starred_url',
        example: '"https://api.github.com/users/octocat/starred{/owner}{/repo}"'
      },
      {
        key: 'pull.assignee.subscriptions_url',
        label: 'subscriptions_url',
        example: '"https://api.github.com/users/octocat/subscriptions"'
      },
      {
        key: 'pull.assignee.type',
        label: 'type',
        example: '"User"'
      },
      {
        key: 'pull.assignee.url',
        label: 'url',
        example: '"https://api.github.com/users/octocat"'
      },
    ]
  },
  {
    key: 'pull.body',
    label: 'body',
    example: '"Please pull these awesome changes"'
  },
  {
    key: 'pull.closed_at',
    label: 'closed_at',
    example: '"2011-01-26T19:01:12Z"'
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
    key: 'pull.created_at',
    label: 'created_at',
    example: '"2011-01-26T19:01:12Z"'
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
    key: 'pull.merge_commit_sha',
    label: 'merge_commit_sha',
    example: '"e5bd3914e2e596debea16f433f57875b5b90bcd6"'
  },
  {
    key: 'pull.merged_at',
    label: 'merged_at',
    example: '"2011-01-26T19:01:12Z"'
  },
  {
    key: 'pull.milestone',
    label: 'milestone',
    nodes: [
      {
        key: 'pull.milestone.url',
        label: 'url',
        example: '"https://api.github.com/repos/octocat/Hello-World/milestones/1"'
      },
      {
        key: 'pull.milestone.id',
        label: 'id',
        example: '1002604'
      },
      {
        key: 'pull.milestone.node_id',
        label: 'node_id',
        example: '"MDk6TWlsZXN0b25lMTAwMjYwNA=="'
      },
      {
        key: 'pull.milestone.number',
        label: 'number',
        example: '1'
      },
      {
        key: 'pull.milestone.closed_at',
        label: 'closed_at',
        example: '"2013-02-12T13:22:01Z"'
      },
      {
        key: 'pull.milestone.closed_issues',
        label: 'closed_issues',
        example: '8'
      },
      {
        key: 'pull.milestone.created_at',
        label: 'created_at',
        example: '"2011-04-10T20:09:31Z"'
      },
      {
        key: 'pull.milestone.creator',
        label: 'creator',
        nodes: [
          {
            key: 'pull.milestone.creator.login',
            label: 'login',
            example: '"octocat"'
          },
          {
            key: 'pull.milestone.creator.id',
            label: 'id',
            example: '1'
          },
          {
            key: 'pull.milestone.creator.node_id',
            label: 'node_id',
            example: '"MDQ6VXNlcjE="'
          },
          {
            key: 'pull.milestone.creator.avatar_url',
            label: 'avatar_url',
            example: '"https://github.com/images/error/octocat_happy.gif"'
          },
          {
            key: 'pull.milestone.creator.events_url',
            label: 'events_url',
            example: '"https://api.github.com/users/octocat/events{/privacy}"'
          },
          {
            key: 'pull.milestone.creator.followers_url',
            label: 'followers_url',
            example: '"https://api.github.com/users/octocat/followers"'
          },
          {
            key: 'pull.milestone.creator.following_url',
            label: 'following_url',
            example: '"https://api.github.com/users/octocat/following{/other_user}"'
          },
          {
            key: 'pull.milestone.creator.gists_url',
            label: 'gists_url',
            example: '"https://api.github.com/users/octocat/gists{/gist_id}"'
          },
          {
            key: 'pull.milestone.creator.gravatar_id',
            label: 'gravatar_id',
            example: '""'
          },
          {
            key: 'pull.milestone.creator.html_url',
            label: 'html_url',
            example: '"https://github.com/octocat"'
          },
          {
            key: 'pull.milestone.creator.organizations_url',
            label: 'organizations_url',
            example: '"https://api.github.com/users/octocat/orgs"'
          },
          {
            key: 'pull.milestone.creator.received_events_url',
            label: 'received_events_url',
            example: '"https://api.github.com/users/octocat/received_events"'
          },
          {
            key: 'pull.milestone.creator.repos_url',
            label: 'repos_url',
            example: '"https://api.github.com/users/octocat/repos"'
          },
          {
            key: 'pull.milestone.creator.site_admin',
            label: 'site_admin',
            example: 'false'
          },
          {
            key: 'pull.milestone.creator.starred_url',
            label: 'starred_url',
            example: '"https://api.github.com/users/octocat/starred{/owner}{/repo}"'
          },
          {
            key: 'pull.milestone.creator.subscriptions_url',
            label: 'subscriptions_url',
            example: '"https://api.github.com/users/octocat/subscriptions"'
          },
          {
            key: 'pull.milestone.creator.type',
            label: 'type',
            example: '"User"'
          },
          {
            key: 'pull.milestone.creator.url',
            label: 'url',
            example: '"https://api.github.com/users/octocat"'
          },
        ]
      },
      {
        key: 'pull.milestone.description',
        label: 'description',
        example: '"Tracking milestone for version 1.0"'
      },
      {
        key: 'pull.milestone.due_on',
        label: 'due_on',
        example: '"2012-10-09T23:39:01Z"'
      },
      {
        key: 'pull.milestone.html_url',
        label: 'html_url',
        example: '"https://github.com/octocat/Hello-World/milestones/v1.0"'
      },
      {
        key: 'pull.milestone.labels_url',
        label: 'labels_url',
        example: '"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels"'
      },
      {
        key: 'pull.milestone.open_issues',
        label: 'open_issues',
        example: '4'
      },
      {
        key: 'pull.milestone.state',
        label: 'state',
        example: '"open"'
      },
      {
        key: 'pull.milestone.title',
        label: 'title',
        example: '"v1.0"'
      },
      {
        key: 'pull.milestone.updated_at',
        label: 'updated_at',
        example: '"2014-03-03T18:58:10Z"'
      },
    ]
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
    key: 'pull.updated_at',
    label: 'updated_at',
    example: '"2011-01-26T19:01:12Z"'
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
