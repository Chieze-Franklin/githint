export default [
  {
    key: 'branch.name',
    label: 'name',
    example: '"master"'
  },
  {
    key: 'branch.commit',
    label: 'commit',
    nodes: [
      {
        key: 'branch.commit.sha',
        label: 'sha',
        example: '"7fd1a60b01f91b314f59955a4e4d4e80d8edf11d"'
      },
      {
        key: 'branch.commit.node_id',
        label: 'node_id',
        example: '"MDY6Q29tbWl0N2ZkMWE2MGIwMWY5MWIzMTRmNTk5NTVhNGU0ZDRlODBkOGVkZjExZA=="'
      },
      {
        key: 'branch.commit.author',
        label: 'author',
        nodes: [
          {
            key: 'branch.commit.author.login',
            label: 'login',
            example: '"octocat"'
          },
          {
            key: 'branch.commit.author.id',
            label: 'id',
            example: '583231'
          },
          {
            key: 'branch.commit.author.node_id',
            label: 'node_id',
            example: '"MDQ6VXNlcjYwOTc2MzA="'
          },
          {
            key: 'branch.commit.author.avatar_url',
            label: 'avatar_url',
            example: '"https://secure.gravatar.com/avatar/7ad39074b0584bc555d0417ae3e7d974?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png"'
          },
          {
            key: 'branch.commit.author.events_url',
            label: 'events_url',
            example: '"https://api.github.com/users/octocat/events{/privacy}"'
          },
          {
            key: 'branch.commit.author.followers_url',
            label: 'followers_url',
            example: '"https://api.github.com/users/octocat/followers"'
          },
          {
            key: 'branch.commit.author.following_url',
            label: 'following_url',
            example: '"https://api.github.com/users/octocat/following{/other_user}"'
          },
          {
            key: 'branch.commit.author.gists_url',
            label: 'gists_url',
            example: '"https://api.github.com/users/octocat/gists{/gist_id}"'
          },
          {
            key: 'branch.commit.author.gravatar_id',
            label: 'gravatar_id',
            example: '""'
          },
          {
            key: 'branch.commit.author.html_url',
            label: 'html_url',
            example: '"https://github.com/octocat"'
          },
          {
            key: 'branch.commit.author.organizations_url',
            label: 'organizations_url',
            example: '"https://api.github.com/users/octocat/orgs"'
          },
          {
            key: 'branch.commit.author.received_events_url',
            label: 'received_events_url',
            example: '"https://api.github.com/users/octocat/received_events"'
          },
          {
            key: 'branch.commit.author.repos_url',
            label: 'repos_url',
            example: '"https://api.github.com/users/octocat/repos"'
          },
          {
            key: 'branch.commit.author.site_admin',
            label: 'site_admin',
            example: 'false'
          },
          {
            key: 'branch.commit.author.starred_url',
            label: 'starred_url',
            example: '"https://api.github.com/users/octocat/starred{/owner}{/repo}"'
          },
          {
            key: 'branch.commit.author.subscriptions_url',
            label: 'subscriptions_url',
            example: '"https://api.github.com/users/octocat/subscriptions"'
          },
          {
            key: 'branch.commit.author.type',
            label: 'type',
            example: '"User"'
          },
          {
            key: 'branch.commit.author.url',
            label: 'url',
            example: '"https://api.github.com/users/octocat"'
          },
        ]
      },
      {
        key: 'branch.commit.comments_url',
        label: 'comments_url',
        example: '"https://api.github.com/repos/octocat/Hello-World/commits/7fd1a60b01f91b314f59955a4e4d4e80d8edf11d/comments"'
      },
      {
        key: 'branch.commit.commit',
        label: 'commit',
        nodes: [
          {
            key: 'branch.commit.commit.author',
            label: 'author',
            nodes: [
              {
                key: 'branch.commit.commit.author.name',
                label: 'name',
                example: '"The Octocat"'
              },
              {
                key: 'branch.commit.commit.author.email',
                label: 'email',
                example: '"support@github.com"'
              },
              {
                key: 'branch.commit.commit.author.date',
                label: 'date',
                example: '"2011-04-14T16:00:49Z"'
              },
            ],
          },
          {
            key: 'branch.commit.commit.comment_count',
            label: 'comment_count',
            example: '0'
          },
          {
            key: 'branch.commit.commit.committer',
            label: 'committer',
            nodes: [
              {
                key: 'branch.commit.commit.committer.name',
                label: 'name',
                example: '"GitHub"'
              },
              {
                key: 'branch.commit.commit.committer.email',
                label: 'email',
                example: '"noreply@github.com"'
              },
              {
                key: 'branch.commit.commit.committer.date',
                label: 'date',
                example: '"2011-04-14T16:00:49Z"'
              },
            ],
          },
          {
            key: 'branch.commit.commit.message',
            label: 'message',
            example: '"Merge pull request #6 from Spaceghost/patch-1\\n\\nNew line at end of file."'
          },
          {
            key: 'branch.commit.commit.tree',
            label: 'tree',
            nodes: [
              {
                key: 'branch.commit.commit.tree.sha',
                label: 'sha',
                example: '"b4eecafa9be2f2006ce1b709d6857b07069b4608"'
              },
              {
                key: 'branch.commit.commit.tree.url',
                label: 'url',
                example: '"https://api.github.com/repos/octocat/Hello-World/tree/b4eecafa9be2f2006ce1b709d6857b07069b4608"'
              },
            ],
          },
          {
            key: 'branch.commit.commit.url',
            label: 'url',
            example: '"https://api.github.com/repos/octocat/Hello-World/git/commits/7fd1a60b01f91b314f59955a4e4d4e80d8edf11d"'
          },
          {
            key: 'branch.commit.commit.verification',
            label: 'verification',
            nodes: [
              {
                key: 'branch.commit.commit.verification.verified',
                label: 'verified',
                example: 'false'
              },
              {
                key: 'branch.commit.commit.verification.reason',
                label: 'reason',
                example: '"unsigned"'
              },
              {
                key: 'branch.commit.commit.verification.signature',
                label: 'signature',
                example: '"-----BEGIN PGP SIGNATURE-----\\n\\nranDOm+sTuFF=\\n=l4y8\\n-----END PGP SIGNATURE-----\\n"'
              },
              {
                key: 'branch.commit.commit.verification.payload',
                label: 'payload',
                example: '"tree b4eecafa9be2f2006ce1b709d6857b07069b4608\\nparent 553c2077f0edc3d5dc5d17262f6aa498e69d6f8e\\nauthor The Octocat <support@github.com> 1 +0100\\ncommitter The Octocat <support@github.com> 1560004413 +0100\\n\\nMerge pull request #6 from Spaceghost/patch-1\\n\\nNew line at end of file."'
              },
            ],
          },
        ]
      },
      {
        key: 'branch.commit.committer',
        label: 'committer',
        nodes: [
          {
            key: 'branch.commit.committer.login',
            label: 'login',
            example: '"octocat"'
          },
          {
            key: 'branch.commit.committer.id',
            label: 'id',
            example: '583231'
          },
          {
            key: 'branch.commit.committer.node_id',
            label: 'node_id',
            example: '"MDQ6VXNlcjE5ODY0NDQ3"'
          },
          {
            key: 'branch.commit.committer.avatar_url',
            label: 'avatar_url',
            example: '"https://secure.gravatar.com/avatar/7ad39074b0584bc555d0417ae3e7d974?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png"'
          },
          {
            key: 'branch.commit.committer.events_url',
            label: 'events_url',
            example: '"https://api.github.com/users/octocat/events{/privacy}"'
          },
          {
            key: 'branch.commit.committer.followers_url',
            label: 'followers_url',
            example: '"https://api.github.com/users/octocat/followers"'
          },
          {
            key: 'branch.commit.committer.following_url',
            label: 'following_url',
            example: '"https://api.github.com/users/octocat/following{/other_user}"'
          },
          {
            key: 'branch.commit.committer.gists_url',
            label: 'gists_url',
            example: '"https://api.github.com/users/octocat/gists{/gist_id}"'
          },
          {
            key: 'branch.commit.committer.gravatar_id',
            label: 'gravatar_id',
            example: '""'
          },
          {
            key: 'branch.commit.committer.html_url',
            label: 'html_url',
            example: '"https://github.com/octocat"'
          },
          {
            key: 'branch.commit.committer.organizations_url',
            label: 'organizations_url',
            example: '"https://api.github.com/users/octocat/orgs"'
          },
          {
            key: 'branch.commit.committer.received_events_url',
            label: 'received_events_url',
            example: '"https://api.github.com/users/octocat/received_events"'
          },
          {
            key: 'branch.commit.committer.repos_url',
            label: 'repos_url',
            example: '"https://api.github.com/users/octocat/repos"'
          },
          {
            key: 'branch.commit.committer.site_admin',
            label: 'site_admin',
            example: 'false'
          },
          {
            key: 'branch.commit.committer.starred_url',
            label: 'starred_url',
            example: '"https://api.github.com/users/octocat/starred{/owner}{/repo}"'
          },
          {
            key: 'branch.commit.committer.subscriptions_url',
            label: 'subscriptions_url',
            example: '"https://api.github.com/users/octocat/subscriptions"'
          },
          {
            key: 'branch.commit.committer.type',
            label: 'type',
            example: '"User"'
          },
          {
            key: 'branch.commit.committer.url',
            label: 'url',
            example: '"https://api.github.com/users/octocat"'
          },
        ]
      },
      {
        key: 'branch.commit.html_url',
        label: 'html_url',
        example: '"https://github.com/octocat/Hello-World/commit/7fd1a60b01f91b314f59955a4e4d4e80d8edf11d"'
      },
      {
        key: 'branch.commit.parents',
        label: 'parents',
        nodes: [
          {
            key: 'branch.commit.parents[0]|branch.commit.parents.0',
            label: '0',
            nodes: [
              {
                key: 'branch.commit.parents[0].sha|branch.commit.parents.0.sha',
                label: 'sha',
                example: '"553c2077f0edc3d5dc5d17262f6aa498e69d6f8e"'
              },
              {
                key: 'branch.commit.parents[0].html_url|branch.commit.parents.0.html_url',
                label: 'html_url',
                example: '"https://github.com/octocat/Hello-World/commit/553c2077f0edc3d5dc5d17262f6aa498e69d6f8e"'
              },
              {
                key: 'branch.commit.parents[0].url|branch.commit.parents.0.url',
                label: 'url',
                example: '"https://api.github.com/repos/octocat/Hello-World/commits/553c2077f0edc3d5dc5d17262f6aa498e69d6f8e"'
              },
            ]
          },
        ]
      },
      {
        key: 'branch.commit.url',
        label: 'url',
        example: '"https://api.github.com/repos/octocat/Hello-World/commits/7fd1a60b01f91b314f59955a4e4d4e80d8edf11d"'
      },
    ]
  },
  {
    key: 'branch._links',
    label: '_links',
    nodes: [
      {
        key: 'branch._links.html',
        label: 'html',
        example: '"https://github.com/octocat/Hello-World/tree/master"'
      },
      {
        key: 'branch._links.self',
        label: 'self',
        example: '"https://api.github.com/repos/octocat/Hello-World/branches/master"'
      },
    ]
  },
  {
    key: 'branch.protected',
    label: 'protected',
    example: 'true'
  },
  {
    key: 'branch.protection',
    label: 'protection',
    nodes: [
      {
        key: 'branch.protection.enabled',
        label: 'enabled',
        example: 'true'
      },
      {
        key: 'branch.protection.required_status_checks',
        label: 'required_status_checks',
        nodes: [
          {
            key: 'branch.protection.required_status_checks.enforcement_level',
            label: 'enforcement_level',
            example: '"non_admins"'
          },
          {
            key: 'branch.protection.required_status_checks.contexts',
            label: 'contexts',
            example: '["ci-test", "linter"]'
          },
        ]
      },
    ]
  },
  {
    key: 'branch.protection_url',
    label: 'protection_url',
    example: '"https://api.github.com/repos/octocat/hello-world/branches/master/protection"'
  },
]
