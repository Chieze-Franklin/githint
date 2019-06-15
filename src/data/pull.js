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
    key: 'pull.additions',
    label: 'additions',
    example: '100'
  },
  {
    key: 'pull.author_association',
    label: 'author_association',
    example: '"OWNER"'
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
    key: 'pull.assignees',
    label: 'assignees',
    nodes: [
      {
        key: 'pull.assignees[0]|pull.assignees.0',
        label: '0',
        nodes: [
          {
            key: 'pull.assignees[0].login|pull.assignees.0.login',
            label: 'login',
            example: '"hubot"'
          },
          {
            key: 'pull.assignees[0].id|pull.assignees.0.id',
            label: 'id',
            example: '1'
          },
          {
            key: 'pull.assignees[0].node_id|pull.assignees.0.node_id',
            label: 'node_id',
            example: '"MDQ6VXNlcjE="'
          },
          {
            key: 'pull.assignees[0].avatar_url|pull.assignees.0.avatar_url',
            label: 'avatar_url',
            example: '"https://github.com/images/error/hubot_happy.gif"'
          },
          {
            key: 'pull.assignees[0].events_url|pull.assignees.0.events_url',
            label: 'events_url',
            example: '"https://api.github.com/users/hubot/events{/privacy}"'
          },
          {
            key: 'pull.assignees[0].followers_url|pull.assignees.0.followers_url',
            label: 'followers_url',
            example: '"https://api.github.com/users/hubot/followers"'
          },
          {
            key: 'pull.assignees[0].following_url|pull.assignees.0.following_url',
            label: 'following_url',
            example: '"https://api.github.com/users/hubot/following{/other_user}"'
          },
          {
            key: 'pull.assignees[0].gists_url|pull.assignees.0.gists_url',
            label: 'gists_url',
            example: '"https://api.github.com/users/hubot/gists{/gist_id}"'
          },
          {
            key: 'pull.assignees[0].gravatar_id|pull.assignees.0.gravatar_id',
            label: 'gravatar_id',
            example: '""'
          },
          {
            key: 'pull.assignees[0].html_url|pull.assignees.0.html_url',
            label: 'html_url',
            example: '"https://github.com/hubot"'
          },
          {
            key: 'pull.assignees[0].organizations_url|pull.assignees.0.organizations_url',
            label: 'organizations_url',
            example: '"https://api.github.com/users/hubot/orgs"'
          },
          {
            key: 'pull.assignees[0].received_events_url|pull.assignees.0.received_events_url',
            label: 'received_events_url',
            example: '"https://api.github.com/users/hubot/received_events"'
          },
          {
            key: 'pull.assignees[0].repos_url|pull.assignees.0.repos_url',
            label: 'repos_url',
            example: '"https://api.github.com/users/hubot/repos"'
          },
          {
            key: 'pull.assignees[0].site_admin|pull.assignees.0.site_admin',
            label: 'site_admin',
            example: 'false'
          },
          {
            key: 'pull.assignees[0].starred_url|pull.assignees.0.starred_url',
            label: 'starred_url',
            example: '"https://api.github.com/users/hubot/starred{/owner}{/repo}"'
          },
          {
            key: 'pull.assignees[0].subscriptions_url|pull.assignees.0.subscriptions_url',
            label: 'subscriptions_url',
            example: '"https://api.github.com/users/hubot/subscriptions"'
          },
          {
            key: 'pull.assignees[0].type|pull.assignees.0.type',
            label: 'type',
            example: '"User"'
          },
          {
            key: 'pull.assignees[0].url|pull.assignees.0.url',
            label: 'url',
            example: '"https://api.github.com/users/hubot"'
          },
        ]
      }
    ]
  },
  {
    key: 'pull.body',
    label: 'body',
    example: '"Please pull these awesome changes"'
  },
  {
    key: 'pull.changed_files',
    label: 'changed_files',
    example: '5'
  },
  {
    key: 'pull.closed_at',
    label: 'closed_at',
    example: '"2011-01-26T19:01:12Z"'
  },
  {
    key: 'pull.comments',
    label: 'comments',
    example: '10'
  },
  {
    key: 'pull.comments_url',
    label: 'comments_url',
    example: '"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments"'
  },
  {
    key: 'pull.commits',
    label: 'commits',
    example: '3'
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
    key: 'pull.draft',
    label: 'draft',
    example: 'false'
  },
  {
    key: 'pull.deletions',
    label: 'deletions',
    example: '3'
  },
  {
    key: 'pull.head',
    label: 'head',
    nodes: [
      {
        key: 'pull.head.label',
        label: 'label',
        example: '"octocat:new-topic"'
      },
      {
        key: 'pull.head.ref',
        label: 'ref',
        example: '"new-topic"'
      },
      {
        key: 'pull.head.sha',
        label: 'sha',
        example: '"6dcb09b5b57875f334f61aebed695e2e4193db5e"'
      },
      {
        key: 'pull.head.repo',
        label: 'repo',
        nodes: [
          {
            key: 'pull.head.repo.id',
            label: 'id',
            example: '1296269'
          },
          {
            key: 'pull.head.repo.node_id',
            label: 'node_id',
            example: '"MDEwOlJlcG9zaXRvcnkxMjk2MjY5"'
          },
          {
            key: 'pull.head.repo.name',
            label: 'name',
            example: '"Hello-World"'
          },
          {
            key: 'pull.head.repo.description',
            label: 'description',
            example: '"This is your first repo!"'
          },
          {
            key: 'pull.head.repo.fork',
            label: 'fork',
            example: 'false'
          },
          {
            key: 'pull.head.repo.full_name',
            label: 'full_name',
            example: '"octocat/Hello-World"'
          },
          {
            key: 'pull.head.repo.html_url',
            label: 'html_url',
            example: '"https://github.com/octocat/Hello-World"'
          },
          {
            key: 'pull.head.repo.owner',
            label: 'owner',
            nodes: [
              {
                key: 'pull.head.repo.owner.login',
                label: 'login',
                example: '"octocat"'
              },
              {
                key: 'pull.head.repo.owner.id',
                label: 'id',
                example: '1'
              },
              {
                key: 'pull.head.repo.owner.node_id',
                label: 'node_id',
                example: '"MDQ6VXNlcjE="'
              },
              {
                key: 'pull.head.repo.owner.avatar_url',
                label: 'avatar_url',
                example: '"https://github.com/images/error/octocat_happy.gif"'
              },
              {
                key: 'pull.head.repo.owner.events_url',
                label: 'events_url',
                example: '"https://api.github.com/users/octocat/events{/privacy}"'
              },
              {
                key: 'pull.head.repo.owner.followers_url',
                label: 'followers_url',
                example: '"https://api.github.com/users/octocat/followers"'
              },
              {
                key: 'pull.head.repo.owner.following_url',
                label: 'following_url',
                example: '"https://api.github.com/users/octocat/following{/other_user}"'
              },
              {
                key: 'pull.head.repo.owner.gists_url',
                label: 'gists_url',
                example: '"https://api.github.com/users/octocat/gists{/gist_id}"'
              },
              {
                key: 'pull.head.repo.owner.gravatar_id',
                label: 'gravatar_id',
                example: '""'
              },
              {
                key: 'pull.head.repo.owner.html_url',
                label: 'html_url',
                example: '"https://github.com/octocat"'
              },
              {
                key: 'pull.head.repo.owner.organizations_url',
                label: 'organizations_url',
                example: '"https://api.github.com/users/octocat/orgs"'
              },
              {
                key: 'pull.head.repo.owner.received_events_url',
                label: 'received_events_url',
                example: '"https://api.github.com/users/octocat/received_events"'
              },
              {
                key: 'pull.head.repo.owner.repos_url',
                label: 'repos_url',
                example: '"https://api.github.com/users/octocat/repos"'
              },
              {
                key: 'pull.head.repo.owner.site_admin',
                label: 'site_admin',
                example: 'false'
              },
              {
                key: 'pull.head.repo.owner.starred_url',
                label: 'starred_url',
                example: '"https://api.github.com/users/octocat/starred{/owner}{/repo}"'
              },
              {
                key: 'pull.head.repo.owner.subscriptions_url',
                label: 'subscriptions_url',
                example: '"https://api.github.com/users/octocat/subscriptions"'
              },
              {
                key: 'pull.head.repo.owner.type',
                label: 'type',
                example: '"User"'
              },
              {
                key: 'pull.head.repo.owner.url',
                label: 'url',
                example: '"https://api.github.com/users/octocat"'
              },
            ]
          },
          {
            key: 'pull.head.repo.private',
            label: 'private',
            example: 'false'
          },
        ]
      },
      {
        key: 'pull.head.user',
        label: 'user',
        nodes: [
          {
            key: 'pull.head.user.login',
            label: 'login',
            example: '"octocat"'
          },
          {
            key: 'pull.head.user.id',
            label: 'id',
            example: '1'
          },
          {
            key: 'pull.head.user.node_id',
            label: 'node_id',
            example: '"MDQ6VXNlcjE="'
          },
          {
            key: 'pull.head.user.avatar_url',
            label: 'avatar_url',
            example: '"https://github.com/images/error/octocat_happy.gif"'
          },
          {
            key: 'pull.head.user.events_url',
            label: 'events_url',
            example: '"https://api.github.com/users/octocat/events{/privacy}"'
          },
          {
            key: 'pull.head.user.followers_url',
            label: 'followers_url',
            example: '"https://api.github.com/users/octocat/followers"'
          },
          {
            key: 'pull.head.user.following_url',
            label: 'following_url',
            example: '"https://api.github.com/users/octocat/following{/other_user}"'
          },
          {
            key: 'pull.head.user.gists_url',
            label: 'gists_url',
            example: '"https://api.github.com/users/octocat/gists{/gist_id}"'
          },
          {
            key: 'pull.head.user.gravatar_id',
            label: 'gravatar_id',
            example: '""'
          },
          {
            key: 'pull.head.user.html_url',
            label: 'html_url',
            example: '"https://github.com/octocat"'
          },
          {
            key: 'pull.head.user.organizations_url',
            label: 'organizations_url',
            example: '"https://api.github.com/users/octocat/orgs"'
          },
          {
            key: 'pull.head.user.received_events_url',
            label: 'received_events_url',
            example: '"https://api.github.com/users/octocat/received_events"'
          },
          {
            key: 'pull.head.user.repos_url',
            label: 'repos_url',
            example: '"https://api.github.com/users/octocat/repos"'
          },
          {
            key: 'pull.head.user.site_admin',
            label: 'site_admin',
            example: 'false'
          },
          {
            key: 'pull.head.user.starred_url',
            label: 'starred_url',
            example: '"https://api.github.com/users/octocat/starred{/owner}{/repo}"'
          },
          {
            key: 'pull.head.user.subscriptions_url',
            label: 'subscriptions_url',
            example: '"https://api.github.com/users/octocat/subscriptions"'
          },
          {
            key: 'pull.head.user.type',
            label: 'type',
            example: '"User"'
          },
          {
            key: 'pull.head.user.url',
            label: 'url',
            example: '"https://api.github.com/users/octocat"'
          },
        ]
      },
    ]
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
    key: 'pull._links',
    label: '_links',
    nodes: [
      {
        key: 'pull._links.comments',
        label: 'comments',
        nodes: [
          {
            key: 'pull._links.comments.href',
            label: 'href',
            example: '"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments"'
          },
        ]
      },
      {
        key: 'pull._links.commits',
        label: 'commits',
        nodes: [
          {
            key: 'pull._links.commits.href',
            label: 'href',
            example: '"https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits"'
          },
        ]
      },
      {
        key: 'pull._links.html',
        label: 'html',
        nodes: [
          {
            key: 'pull._links.html.href',
            label: 'href',
            example: '"https://github.com/octocat/Hello-World/pull/1347"'
          },
        ]
      },
      {
        key: 'pull._links.issue',
        label: 'issue',
        nodes: [
          {
            key: 'pull._links.issue.href',
            label: 'href',
            example: '"https://api.github.com/repos/octocat/Hello-World/issues/1347"'
          },
        ]
      },
      {
        key: 'pull._links.review_comment',
        label: 'review_comment',
        nodes: [
          {
            key: 'pull._links.review_comment.href',
            label: 'href',
            example: '"https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}"'
          },
        ]
      },
      {
        key: 'pull._links.review_comments',
        label: 'review_comments',
        nodes: [
          {
            key: 'pull._links.review_comments.href',
            label: 'href',
            example: '"https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments"'
          },
        ]
      },
      {
        key: 'pull._links.self',
        label: 'self',
        nodes: [
          {
            key: 'pull._links.self.href',
            label: 'href',
            example: '"https://api.github.com/repos/octocat/Hello-World/pulls/1347"'
          },
        ]
      },
      {
        key: 'pull._links.statuses',
        label: 'statuses',
        nodes: [
          {
            key: 'pull._links.statuses.href',
            label: 'href',
            example: '"https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e"'
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
    key: 'pull.maintainer_can_modify',
    label: 'maintainer_can_modify',
    example: 'true'
  },
  {
    key: 'pull.merge_commit_sha',
    label: 'merge_commit_sha',
    example: '"e5bd3914e2e596debea16f433f57875b5b90bcd6"'
  },
  {
    key: 'pull.mergeable',
    label: 'mergeable',
    example: 'true'
  },
  {
    key: 'pull.mergeable_state',
    label: 'mergeable_state',
    example: '"clean"'
  },
  {
    key: 'pull.merged',
    label: 'merged',
    example: 'false'
  },
  {
    key: 'pull.merged_at',
    label: 'merged_at',
    example: '"2011-01-26T19:01:12Z"'
  },
  {
    key: 'pull.merged_by',
    label: 'merged_by',
    nodes: [
      {
        key: 'pull.merged_by.login',
        label: 'login',
        example: '"octocat"'
      },
      {
        key: 'pull.merged_by.id',
        label: 'id',
        example: '1'
      },
      {
        key: 'pull.merged_by.node_id',
        label: 'node_id',
        example: '"MDQ6VXNlcjE="'
      },
      {
        key: 'pull.merged_by.avatar_url',
        label: 'avatar_url',
        example: '"https://github.com/images/error/octocat_happy.gif"'
      },
      {
        key: 'pull.merged_by.events_url',
        label: 'events_url',
        example: '"https://api.github.com/users/octocat/events{/privacy}"'
      },
      {
        key: 'pull.merged_by.followers_url',
        label: 'followers_url',
        example: '"https://api.github.com/users/octocat/followers"'
      },
      {
        key: 'pull.merged_by.following_url',
        label: 'following_url',
        example: '"https://api.github.com/users/octocat/following{/other_user}"'
      },
      {
        key: 'pull.merged_by.gists_url',
        label: 'gists_url',
        example: '"https://api.github.com/users/octocat/gists{/gist_id}"'
      },
      {
        key: 'pull.merged_by.gravatar_id',
        label: 'gravatar_id',
        example: '""'
      },
      {
        key: 'pull.merged_by.html_url',
        label: 'html_url',
        example: '"https://github.com/octocat"'
      },
      {
        key: 'pull.merged_by.organizations_url',
        label: 'organizations_url',
        example: '"https://api.github.com/users/octocat/orgs"'
      },
      {
        key: 'pull.merged_by.received_events_url',
        label: 'received_events_url',
        example: '"https://api.github.com/users/octocat/received_events"'
      },
      {
        key: 'pull.merged_by.repos_url',
        label: 'repos_url',
        example: '"https://api.github.com/users/octocat/repos"'
      },
      {
        key: 'pull.merged_by.site_admin',
        label: 'site_admin',
        example: 'false'
      },
      {
        key: 'pull.merged_by.starred_url',
        label: 'starred_url',
        example: '"https://api.github.com/users/octocat/starred{/owner}{/repo}"'
      },
      {
        key: 'pull.merged_by.subscriptions_url',
        label: 'subscriptions_url',
        example: '"https://api.github.com/users/octocat/subscriptions"'
      },
      {
        key: 'pull.merged_by.type',
        label: 'type',
        example: '"User"'
      },
      {
        key: 'pull.merged_by.url',
        label: 'url',
        example: '"https://api.github.com/users/octocat"'
      },
    ]
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
    key: 'pull.rebaseable',
    label: 'rebaseable',
    example: 'true'
  },
  {
    key: 'pull.requested_reviewers',
    label: 'requested_reviewers',
    nodes: [
      {
        key: 'pull.requested_reviewers[0]|pull.requested_reviewers.0',
        label: '0',
        nodes: [
          {
            key: 'pull.requested_reviewers[0].login|pull.requested_reviewers.0.login',
            label: 'login',
            example: '"other_user"'
          },
          {
            key: 'pull.requested_reviewers[0].id|pull.requested_reviewers.0.id',
            label: 'id',
            example: '1'
          },
          {
            key: 'pull.requested_reviewers[0].node_id|pull.requested_reviewers.0.node_id',
            label: 'node_id',
            example: '"MDQ6VXNlcjE="'
          },
          {
            key: 'pull.requested_reviewers[0].avatar_url|pull.requested_reviewers.0.avatar_url',
            label: 'avatar_url',
            example: '"https://github.com/images/error/other_user_happy.gif"'
          },
          {
            key: 'pull.requested_reviewers[0].events_url|pull.requested_reviewers.0.events_url',
            label: 'events_url',
            example: '"https://api.github.com/users/other_user/events{/privacy}"'
          },
          {
            key: 'pull.requested_reviewers[0].followers_url|pull.requested_reviewers.0.followers_url',
            label: 'followers_url',
            example: '"https://api.github.com/users/other_user/followers"'
          },
          {
            key: 'pull.requested_reviewers[0].following_url|pull.requested_reviewers.0.following_url',
            label: 'following_url',
            example: '"https://api.github.com/users/other_user/following{/other_user}"'
          },
          {
            key: 'pull.requested_reviewers[0].gists_url|pull.requested_reviewers.0.gists_url',
            label: 'gists_url',
            example: '"https://api.github.com/users/other_user/gists{/gist_id}"'
          },
          {
            key: 'pull.requested_reviewers[0].gravatar_id|pull.requested_reviewers.0.gravatar_id',
            label: 'gravatar_id',
            example: '""'
          },
          {
            key: 'pull.requested_reviewers[0].html_url|pull.requested_reviewers.0.html_url',
            label: 'html_url',
            example: '"https://github.com/other_user"'
          },
          {
            key: 'pull.requested_reviewers[0].organizations_url|pull.requested_reviewers.0.organizations_url',
            label: 'organizations_url',
            example: '"https://api.github.com/users/other_user/orgs"'
          },
          {
            key: 'pull.requested_reviewers[0].received_events_url|pull.requested_reviewers.0.received_events_url',
            label: 'received_events_url',
            example: '"https://api.github.com/users/other_user/received_events"'
          },
          {
            key: 'pull.requested_reviewers[0].repos_url|pull.requested_reviewers.0.repos_url',
            label: 'repos_url',
            example: '"https://api.github.com/users/other_user/repos"'
          },
          {
            key: 'pull.requested_reviewers[0].site_admin|pull.requested_reviewers.0.site_admin',
            label: 'site_admin',
            example: 'false'
          },
          {
            key: 'pull.requested_reviewers[0].starred_url|pull.requested_reviewers.0.starred_url',
            label: 'starred_url',
            example: '"https://api.github.com/users/other_user/starred{/owner}{/repo}"'
          },
          {
            key: 'pull.requested_reviewers[0].subscriptions_url|pull.requested_reviewers.0.subscriptions_url',
            label: 'subscriptions_url',
            example: '"https://api.github.com/users/other_user/subscriptions"'
          },
          {
            key: 'pull.requested_reviewers[0].type|pull.requested_reviewers.0.type',
            label: 'type',
            example: '"User"'
          },
          {
            key: 'pull.requested_reviewers[0].url|pull.requested_reviewers.0.url',
            label: 'url',
            example: '"https://api.github.com/users/other_user"'
          },
        ]
      }
    ]
  },
  {
    key: 'pull.requested_teams',
    label: 'requested_teams',
    nodes: [
      {
        key: 'pull.requested_teams[0]|pull.requested_teams.0',
        label: '0',
        nodes: [
          {
            key: 'pull.requested_teams[0].id|pull.requested_teams.0.id',
            label: 'id',
            example: '1'
          },
          {
            key: 'pull.requested_teams[0].node_id|pull.requested_teams.0.node_id',
            label: 'node_id',
            example: '"MDQ6VGVhbTE="'
          },
          {
            key: 'pull.requested_teams[0].url|pull.requested_teams.0.url',
            label: 'url',
            example: '"https://api.github.com/teams/1"'
          },
          {
            key: 'pull.requested_teams[0].name|pull.requested_teams.0.name',
            label: 'name',
            example: '"Justice League"'
          },
          {
            key: 'pull.requested_teams[0].description|pull.requested_teams.0.description',
            label: 'description',
            example: '"A great team."'
          },
          {
            key: 'pull.requested_teams[0].members_url|pull.requested_teams.0.members_url',
            label: 'members_url',
            example: '"https://api.github.com/teams/1/members{/member}"'
          },
          {
            key: 'pull.requested_teams[0].parent|pull.requested_teams.0.parent',
            label: 'parent',
            example: 'null'
          },
          {
            key: 'pull.requested_teams[0].permission|pull.requested_teams.0.permission',
            label: 'permission',
            example: '"admin"'
          },
          {
            key: 'pull.requested_teams[0].privacy|pull.requested_teams.0.privacy',
            label: 'privacy',
            example: '"closed"'
          },
          {
            key: 'pull.requested_teams[0].repositories_url|pull.requested_teams.0.repositories_url',
            label: 'repositories_url',
            example: '"https://api.github.com/teams/1/repos"'
          },
          {
            key: 'pull.requested_teams[0].slug|pull.requested_teams.0.slug',
            label: 'slug',
            example: '"justice-league"'
          },
        ]
      }
    ]
  },
  {
    key: 'pull.review_comment_url',
    label: 'review_comment_url',
    example: '"https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}"'
  },
  {
    key: 'pull.review_comments',
    label: 'review_comments',
    example: '0'
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
