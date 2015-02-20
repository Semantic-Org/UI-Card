
Package.describe({
  name    : 'semantic:ui-card',
  summary : 'Semantic UI - Card: Single component release',
  version : '1.9.3',
  git     : 'git://github.com/Semantic-Org/UI-Card.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'card.css'
  ], 'client');
});
