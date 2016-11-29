
build: node_modules bower_components
	node index.js

bower_components: bower.json
	bower install

node_modules: package.json
	npm install

.PHONY: build