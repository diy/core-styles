build:
	node build

start: build
	cd ./public && ../node_modules/.bin/simple

test:
	tap test/governance/*.js

.PHONY: build, start
