Package.describe({
  name: 'cfs:ui',
  version: '0.0.1',
  summary: 'CollectionFS, provides UI helpers',
  git: 'https://github.com/CollectionFS/Meteor-cfs-ui.git'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.1', 'METEOR@1.0']);

  api.use([
    'cfs:base-package@0.0.0',
    'cfs:file@0.0.0',
    'blaze',
    'templating'
  ]);

  api.imply([
    'cfs:base-package'
  ]);

  api.addFiles([
    'ui.html',
    'ui.js'
  ], 'client');
});

// Package.on_test(function (api) {
//   api.use(['collectionfs', 'test-helpers', 'tinytest']);
//   api.add_files('tests/client-tests.js', 'client');
// });
