var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-card',
  summary : 'Semantic UI - Card (official): Single component release of card',
  version : '1.9.0',
  git     : 'git://github.com/Semantic-Org/UI-Card.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
