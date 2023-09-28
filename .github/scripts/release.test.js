// deps='octokit @actions/core'; npm install -g $deps && npm link $deps
// node --test .github/scripts/
const { test, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const { Octokit } = require("octokit");
const core = require("@actions/core");
const release = require('./release.js');

const github = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

const context = {
  repo: {
    owner: 'Adyen',
    repo: 'adyen-java-api-library',
  }
};

const comparisonFixture = {
  "repository": {
    "name": "adyen-node-api-library",
    "ref": {
      "compare": {
        "aheadBy": 8,
        "commits": {
          "edges": [
            {
              "node": {
                "message": "Another commit in the same PR non squashed",
                "associatedPullRequests": {
                  "edges": [
                    {
                      "node": {
                        "number": 20,
                        "labels": {
                          "nodes": [
                            {
                              "name": "Breaking change"
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "message": "Fixing the constructor",
                "associatedPullRequests": {
                  "edges": [
                    {
                      "node": {
                        "number": 10,
                        "labels": {
                          "nodes": [
                            {
                              "name": "Fix"
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "message": "Upgrade some service",
                "associatedPullRequests": {
                  "edges": [
                    {
                      "node": {
                        "number": 20,
                        "labels": {
                          "nodes": [
                            {
                              "name": "Breaking change"
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "message": "Update CODEOWNERS (#965)",
                "associatedPullRequests": {
                  "edges": [
                    {
                      "node": {
                        "number": 30,
                        "labels": {
                          "nodes": []
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  }
};

const associatedPullRequestsMajor = {
  "repository": {
    "name": "adyen-node-api-library",
    "ref": {
      "compare": {
        "aheadBy": 8,
        "commits": {
          "edges": [
            {
              "node": {
                "message": "Another commit in the same PR non squashed",
                "associatedPullRequests": {
                  "edges": [
                    {
                      "node": {
                        "number": 20,
                        "labels": {
                          "nodes": [
                            {
                              "name": "Breaking change"
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "message": "Fixing the constructor",
                "associatedPullRequests": {
                  "edges": [
                    {
                      "node": {
                        "number": 10,
                        "labels": {
                          "nodes": [
                            {
                              "name": "Fix"
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "message": "Upgrade some service",
                "associatedPullRequests": {
                  "edges": [
                    {
                      "node": {
                        "number": 20,
                        "labels": {
                          "nodes": [
                            {
                              "name": "Feature"
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "message": "Update CODEOWNERS (#965)",
                "associatedPullRequests": {
                  "edges": [
                    {
                      "node": {
                        "number": 30,
                        "labels": {
                          "nodes": []
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  }
};

const associatedPullRequestsMinor = {
  "repository": {
    "name": "adyen-node-api-library",
    "ref": {
      "compare": {
        "aheadBy": 8,
        "commits": {
          "edges": [
            {
              "node": {
                "message": "Another commit in the same PR non squashed",
                "associatedPullRequests": {
                  "edges": [
                    {
                      "node": {
                        "number": 20,
                        "labels": {
                          "nodes": [
                            {
                              "name": ""
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "message": "Fixing the constructor",
                "associatedPullRequests": {
                  "edges": [
                    {
                      "node": {
                        "number": 10,
                        "labels": {
                          "nodes": [
                            {
                              "name": "Feature"
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "message": "Upgrade some service",
                "associatedPullRequests": {
                  "edges": [
                    {
                      "node": {
                        "number": 20,
                        "labels": {
                          "nodes": [
                            {
                              "name": "Fix"
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "message": "Update CODEOWNERS (#965)",
                "associatedPullRequests": {
                  "edges": [
                    {
                      "node": {
                        "number": 30,
                        "labels": {
                          "nodes": []
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  }
};
beforeEach(() => {
  // Reset env variables
  delete process.env.CURRENT_VERSION;
  delete process.env.PRE_RELEASE;
});

test('Changelog', t => {
  const changelog = release.changelog(comparisonFixture);

  assert.deepEqual(changelog, [
    "- #10",
    "- #20",
    "- #30",
  ]);
});

test('Detect changes', async t => {
  await t.test('Major', t => {
    const ver = release.detectChanges(comparisonFixture);

    assert.strictEqual(ver, 'major');
  });
  
  await t.test('Zero changes', t => {
    let sync = structuredClone(comparisonFixture);
    sync.repository.ref.compare.aheadBy = 0;

    const ver = release.detectChanges(sync);

    assert.strictEqual(ver, '');
  });

  await t.test('No labels', t => {
    let noLabels = structuredClone(comparisonFixture);
    for (const edge of noLabels.repository.ref.compare.commits.edges) {
      for (const prs of edge.node.associatedPullRequests.edges) {
        prs.node.labels.nodes = [];
      }
    }

    const ver = release.detectChanges(noLabels);

    assert.strictEqual(ver, 'patch', 'Simple changelog should be a patch');
  });
});


test('Get next version', async t => {
  await t.test('Major', async t => {
    const ver = release.nextVersion('13.1.2', 'major');

    assert.strictEqual(ver, '14.0.0');
  });

  await t.test('Minor', async t => {
    const ver = release.nextVersion('13.1.2', 'minor');

    assert.strictEqual(ver, '13.2.0');
  });

  await t.test('Patch', async t => {
    const ver = release.nextVersion('13.1.2', 'patch');

    assert.strictEqual(ver, '13.1.3');
  });

  await t.test('Unchanged', async t => {
    const ver = release.nextVersion('1.2.3', '');

    assert.strictEqual(ver, '1.2.3');
  });

  await t.test('Start pre-release', async t => {
    const ver = release.nextVersion('14.1.5', 'major', 'true');

    assert.strictEqual(ver, '15.0.0-beta');
  });

  await t.test('Bump first pre-release', async t => {
    const ver = release.nextVersion('15.0.0-beta', 'minor', 'true');

    assert.strictEqual(ver, '15.0.0-beta.1');
  });

  await t.test('Bump second pre-release', async t => {
    const ver = release.nextVersion('15.0.0-beta.1', 'patch', 'true');

    assert.strictEqual(ver, '15.0.0-beta.2');
  });

  await t.test('End pre-release', async t => {
    const ver = release.nextVersion('15.0.0-beta', 'major', 'false');

    assert.strictEqual(ver, '15.0.0');
  });
});

test('Compare branches', async t => {
  t.mock.method(github, 'graphql', () => comparisonFixture);
  const diff = await release.compareBranches(github, {
    owner: 'Adyen',
    repo: 'adyen-node-api-library',
    base: 'main',
    head: 'develop',
  });

  assert.strictEqual('adyen-node-api-library', diff.repository.name);
});

test('Bump', async t => {
  t.mock.method(github, 'graphql', () => comparisonFixture);
  t.mock.method(core, 'setOutput', t.mock.fn());
  process.env.CURRENT_VERSION = '1.2.3';
  const options = { github, context, core };

  await release.bump(options);

  assert.strictEqual(core.setOutput.mock.calls.length, 3);
});


test('Calculate version major', async t => {
  await t.test('Major', t => {
    const ver = release.detectChanges(associatedPullRequestsMajor);
  
    assert.strictEqual(ver, 'major');
  })
});

test('Calculate version minor', async t => {
  await t.test('Minor', t => {
    const ver = release.detectChanges(associatedPullRequestsMinor);
    
    assert.strictEqual(ver, 'minor');
  });  
});  
