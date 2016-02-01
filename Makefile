.PHONY: all build

all: build

build: node_modules

clean:
	rm -rf dist lib node_modules

env=dev
deploy:
	./node_modules/.bin/lfcdn -e $(env)

dist: build src requirejs.conf.js tools
	mkdir -p dist
	./node_modules/requirejs/bin/r.js -o ./tools/build.conf.js	

# if package.json changes, install
node_modules: package.json
	npm install
	touch $@

package: build

run: server

server: build
	npm start
