var async       = require('async'),
    Metalsmith  = require('metalsmith'),
    pug         = require('metalsmith-pug'),
    layouts     = require('metalsmith-layouts'),
    bsync       = require('metalsmith-browser-sync'),
    sass        = require('metalsmith-sass'),
    collections = require('metalsmith-collections'),
    drafts      = require('metalsmith-drafts'),
    babel       = require('metalsmith-babel'),
    prism       = require('metalsmith-prism'),
    redirect    = require('metalsmith-redirect')

require('marked').setOptions({
  langPrefix: 'language-'
})



/**
 * The build.
 */

var metalsmith = Metalsmith(__dirname)
  .metadata({
    sitename: 'GEF Pattern Library'
  })
  .source('./src')
  .destination('./docs')
  .clean(true)
  .use(drafts())
  .use(sass({
    includePaths: ['bower_components/gef/src/assets/sass/', '../../bower_components', '../bower_components/', 'bower_components/']
  }))
  .use(babel({
    "plugins": ["transform-es2015-modules-amd"]
  }))
  // Collections and browser-sync have an issue where the collections object isn't
  // cleaned on reload so the collections keep getting added to, this is a
  // work around.
  .use((files, metalsmith, done) => {
    metalsmith._metadata.collections = null
    metalsmith._metadata.overview = null
    metalsmith._metadata.design = null
    metalsmith._metadata.templates = null
    metalsmith._metadata.components = null
    metalsmith._metadata.utilities = null
    metalsmith._metadata.themes = null
    metalsmith._metadata.javascript = null
    done()
  })
  .use(collections({
    overview: {
      sortBy: "order"
    },
    components: {
      sortBy: "title"
    },
    design: {
      sortBy: "order"
    },
    utilities: {
      sortBy: "order"
    }
  }))
  .use(pug())
  .use(layouts({
    engine:     'pug',
    default:    'default.pug',
    pretty:     true
  }))
  .use(redirect({
    'index.html': 'overview/welcome.html'
  }))
  // Rename pug files to html. Otherwise prism ignores them.
  .use((files, metalsmith, done) => {
    for (var file in files) {
      var fileInfo = files[file],
          filePath = fileInfo.path
      if (filePath !== undefined) {
        var newPath = filePath.replace('.pug', '.html')
      }
      fileInfo.path = newPath
    }
    done()
  })
  .use(prism())
  .use(bsync({
    server:     'docs',
    files:      ['src/**/*.*', 'layouts/**/*.*'],
    port:       2000
  }))
  .build(function(err){
    if (err) {
      console.log(err)
    }
  })