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
    key: 'commit.comments_url',
    label: 'comments_url',
    example: '"https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments"'
  },
  {
    key: 'commit.author',
    label: 'author',
    nodes: [
      {
        key: 'commit.author.id',
        label: 'id',
        example: '1'
      },
      {
        key: 'commit.author.login',
        label: 'login',
        example: '"octocat"'
      },
      {
        key: 'commit.author.node_id',
        label: 'node_id',
        example: '"MDQ6VXNlcjE="'
      },
      {
        key: 'commit.author.avatar_url',
        label: 'avatar_url',
        example: '"https://github.com/images/error/octocat_happy.gif"'
      },
      {
        key: 'commit.author.gravatar_id',
        label: 'gravatar_id',
        example: '""'
      },
      {
        key: 'commit.author.url',
        label: 'url',
        example: '"https://api.github.com/users/octocat"'
      },
      {
        key: 'commit.author.events_url',
        label: 'events_url',
        example: '"https://api.github.com/users/octocat/events{/privacy}"'
      },
      {
        key: 'commit.author.followers_url',
        label: 'followers_url',
        example: '"https://api.github.com/users/octocat/followers"'
      },
      {
        key: 'commit.author.following_url',
        label: 'following_url',
        example: '"https://api.github.com/users/octocat/following{/other_user}"'
      },
      {
        key: 'commit.author.gists_url',
        label: 'gists_url',
        example: '"https://api.github.com/users/octocat/gists{/gist_id}"'
      },
      {
        key: 'commit.author.html_url',
        label: 'html_url',
        example: '"https://github.com/octocat"'
      },
      {
        key: 'commit.author.organizations_url',
        label: 'organizations_url',
        example: '"https://api.github.com/users/octocat/orgs"'
      },
      {
        key: 'commit.author.received_events_url',
        label: 'received_events_url',
        example: '"https://api.github.com/users/octocat/received_events"'
      },
      {
        key: 'commit.author.repos_url',
        label: 'repos_url',
        example: '"https://api.github.com/users/octocat/repos"'
      },
      {
        key: 'commit.author.site_admin',
        label: 'site_admin',
        example: 'false'
      },
      {
        key: 'commit.author.starred_url',
        label: 'starred_url',
        example: '"https://api.github.com/users/octocat/starred{/owner}{/repo}"'
      },
      {
        key: 'commit.author.subscriptions_url',
        label: 'subscriptions_url',
        example: '"https://api.github.com/users/octocat/subscriptions"'
      },
      {
        key: 'commit.author.type',
        label: 'type',
        example: '"User"'
      },
    ]
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
        key: 'commit.commit.comment_count',
        label: 'comment_count',
        example: '0'
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
            example: '"-----BEGIN PGP SIGNATURE-----\\n\\nranDOm+sTuFF=\\n=l4y8\\n-----END PGP SIGNATURE-----\\n"'
          },
          {
            key: 'commit.commit.verification.payload',
            label: 'payload',
            example: '"tree 6dcb09b5b57875f334f61aebed695e2e4193db5e\\nparent 6dcb09b5b57875f334f61aebed695e2e4193db5e\\nauthor Monalisa Octocat <support@github.com> 1 +0100\\ncommitter GitHub <noreply@github.com> 1560004413 +0100\\n\\nFix all the bugs"'
          },
        ],
      },
    ]
  },
  {
    key: 'commit.committer',
    label: 'committer',
    nodes: [
      {
        key: 'commit.committer.id',
        label: 'id',
        example: '1'
      },
      {
        key: 'commit.committer.login',
        label: 'login',
        example: '"octocat"'
      },
      {
        key: 'commit.committer.node_id',
        label: 'node_id',
        example: '"MDQ6VXNlcjE="'
      },
      {
        key: 'commit.committer.avatar_url',
        label: 'avatar_url',
        example: '"https://github.com/images/error/octocat_happy.gif"'
      },
      {
        key: 'commit.committer.gravatar_id',
        label: 'gravatar_id',
        example: '""'
      },
      {
        key: 'commit.committer.url',
        label: 'url',
        example: '"https://api.github.com/users/octocat"'
      },
      {
        key: 'commit.committer.events_url',
        label: 'events_url',
        example: '"https://api.github.com/users/octocat/events{/privacy}"'
      },
      {
        key: 'commit.committer.followers_url',
        label: 'followers_url',
        example: '"https://api.github.com/users/octocat/followers"'
      },
      {
        key: 'commit.committer.following_url',
        label: 'following_url',
        example: '"https://api.github.com/users/octocat/following{/other_user}"'
      },
      {
        key: 'commit.committer.gists_url',
        label: 'gists_url',
        example: '"https://api.github.com/users/octocat/gists{/gist_id}"'
      },
      {
        key: 'commit.committer.html_url',
        label: 'html_url',
        example: '"https://github.com/octocat"'
      },
      {
        key: 'commit.committer.organizations_url',
        label: 'organizations_url',
        example: '"https://api.github.com/users/octocat/orgs"'
      },
      {
        key: 'commit.committer.received_events_url',
        label: 'received_events_url',
        example: '"https://api.github.com/users/octocat/received_events"'
      },
      {
        key: 'commit.committer.repos_url',
        label: 'repos_url',
        example: '"https://api.github.com/users/octocat/repos"'
      },
      {
        key: 'commit.committer.site_admin',
        label: 'site_admin',
        example: 'false'
      },
      {
        key: 'commit.committer.starred_url',
        label: 'starred_url',
        example: '"https://api.github.com/users/octocat/starred{/owner}{/repo}"'
      },
      {
        key: 'commit.committer.subscriptions_url',
        label: 'subscriptions_url',
        example: '"https://api.github.com/users/octocat/subscriptions"'
      },
      {
        key: 'commit.committer.type',
        label: 'type',
        example: '"User"'
      },
    ]
  },
  {
    key: 'commit.files',
    label: 'files',
    nodes: [
      {
        key: 'commit.files[0]|commit.files.0',
        label: '0',
        nodes: [
          {
            key: 'commit.files[0].sha|commit.files.0.sha',
            label: 'sha',
            example: '"8c1fe41bb646b10782fb602cd1f0aa3dc827c3cb"'
          },
          {
            key: 'commit.files[0].filename|commit.files.0.filename',
            label: 'filename',
            example: '"file1.txt"'
          },
          {
            key: 'commit.files[0].additions|commit.files.0.additions',
            label: 'additions',
            example: '10'
          },
          {
            key: 'commit.files[0].deletions|commit.files.0.deletions',
            label: 'deletions',
            example: '2'
          },
          {
            key: 'commit.files[0].changes|commit.files.0.changes',
            label: 'changes',
            example: '12'
          },
          {
            key: 'commit.files[0].status|commit.files.0.status',
            label: 'status',
            example: '"modified"'
          },
          {
            key: 'commit.files[0].blob_url|commit.files.0.blob_url',
            label: 'blob_url',
            example: '"https://github.com/octocat/Hello-World/blob/7ca483543807a51b6079e54ac4cc392bc29ae284/file1.txt"'
          },
          {
            key: 'commit.files[0].contents_url|commit.files.0.contents_url',
            label: 'contents_url',
            example: '"https://api.github.com/repos/octocat/Hello-World/contents/file1.txt?ref=7ca483543807a51b6079e54ac4cc392bc29ae284"'
          },
          {
            key: 'commit.files[0].raw_url|commit.files.0.raw_url',
            label: 'raw_url',
            example: '"https://github.com/octocat/Hello-World/raw/7ca483543807a51b6079e54ac4cc392bc29ae284/file1.txt"'
          },
          {
            key: 'commit.files[0].patch|commit.files.0.patch',
            label: 'patch',
            example: '"@@ -29,7 +29,7 @@\\n....."'
          },
        ]
      },
    ]
  },
  {
    key: 'commit.parents',
    label: 'parents',
    nodes: [
      {
        key: 'commit.parents[0]|commit.parents.0',
        label: '0',
        nodes: [
          {
            key: 'commit.parents[0].sha|commit.parents.0.sha',
            label: 'sha',
            example: '"6dcb09b5b57875f334f61aebed695e2e4193db5e"'
          },
          {
            key: 'commit.parents[0].html_url|commit.parents.0.html_url',
            label: 'html_url',
            example: '"https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e"'
          },
          {
            key: 'commit.parents[0].url|commit.parents.0.url',
            label: 'url',
            example: '"https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e"'
          },
        ]
      },
    ]
  },
  {
    key: 'commit.stats',
    label: 'stats',
    nodes: [
      {
        key: 'commit.stats.additions',
        label: 'additions',
        example: '104'
      },{
        key: 'commit.stats.deletions',
        label: 'deletions',
        example: '4'
      },{
        key: 'commit.stats.total',
        label: 'total',
        example: '108'
      },
    ]
  },
  {
    key: 'commit.html_url',
    label: 'html_url',
    example: '"https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e"',
  },
];
