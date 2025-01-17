install:
	npm ci

test:
	npx jest

test-watch:
	npm test -s -- --watch

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish --dry-run