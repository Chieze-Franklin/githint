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
            key: 'branch.commit.author.id',
            label: 'id',
            example: '583231'
          },
          {
            key: 'branch.commit.author.avatar_url',
            label: 'avatar_url',
            example: '"https://secure.gravatar.com/avatar/7ad39074b0584bc555d0417ae3e7d974?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png"'
          },
          {
            key: 'branch.commit.author.gravatar_id',
            label: 'gravatar_id',
            example: '""'
          },
          {
            key: 'branch.commit.author.login',
            label: 'login',
            example: '"octocat"'
          },
          {
            key: 'branch.commit.author.url',
            label: 'url',
            example: '"https://api.github.com/users/octocat"'
          },
        ]
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
            key: 'branch.commit.commit.comment_count',
            label: 'comment_count',
            example: '0'
          },
          {
            key: 'branch.commit.commit.url',
            label: 'url',
            example: '"https://api.github.com/repos/octocat/Hello-World/git/commits/7fd1a60b01f91b314f59955a4e4d4e80d8edf11d"'
          },
          {
            key: 'branch.commit.commit.message',
            label: 'message',
            example: '"Merge pull request #6 from Spaceghost/patch-1\n\nNew line at end of file."'
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
                example: 'null'
              },
              {
                key: 'branch.commit.commit.verification.payload',
                label: 'payload',
                example: 'null'
              },
            ],
          },
        ]
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
      {
        key: 'branch.commit.committer',
        label: 'committer',
        nodes: [
          {
            key: 'branch.commit.committer.id',
            label: 'id',
            example: '583231'
          },
          {
            key: 'branch.commit.committer.avatar_url',
            label: 'avatar_url',
            example: '"https://secure.gravatar.com/avatar/7ad39074b0584bc555d0417ae3e7d974?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png"'
          },
          {
            key: 'branch.commit.committer.gravatar_id',
            label: 'gravatar_id',
            example: '""'
          },
          {
            key: 'branch.commit.committer.login',
            label: 'login',
            example: '"octocat"'
          },
          {
            key: 'branch.commit.committer.url',
            label: 'url',
            example: '"https://api.github.com/users/octocat"'
          },
        ]
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
