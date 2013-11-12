# diy core styles – [Styleguide](http://diy.github.io/core-styles/)
#### Core css for diy web projects

This module is meant to be as minimal as possible and only provide base styling 
for things like typography, colors, forms, buttons, avatars and logos. It should 
be used for all web projects that require a consistent look/feel to the diy brand.

Other UI components (popovers, tooltips etc...) should be abstracted out in to 
separate modules unless there is a good reason for including them here.

# Usage

```
npm install --save-dev diy/core-styles
```

There are a few interfaces for getting the css.

```js
var ds = require('diy-core-styles');

console.log(ds.p); // path to index.less
ds.css(function (err, css) {});
ds.less(function (err, lessTree) {});
ds.createReadStream();
```

## ds.p

This is a string path relative to where `diy-core-styles` is installed. Most 
likely in your project's `node_modules` 
dir – `node_modules/diy-core-styles/index.less`. This is really handy for 
build tasks that take a file path as input or you want to use a different 
version of `less`.

## ds.css(function (err, css) {})

Parses `index.less` and compiles to css and runs the provided callback providing 
the autoprefixed css.

## ds.less(function (err, lessTree) {})

Parses `index.less` and returns the less tree.

## ds.createReadStream()

Returns a readable stream of the index.less file.

# Styleguide

```
npm start
```

And navigate to [http://localhost:8000](http://localhost:8000)

You can build the styleguide by running `make`

```
make
```

Which will build `public/main.css` and `public/index.html`.

All example html in the styleguide can be found in the `examples` directory. 
When running `make` these files are parsed for headings to build up the 
navigation and the rendered in the styleguide `index.html` file.

# Dev Tips

It may seem like a bit more work to edit styles in a separate repo from web, 
but it helps keeps things small and allows more people to hack on our styles 
w/ out the burden of running an entire www instance. That said it's easy to 
test core-style changes in other projects while developing.

Clone this repo, install dependencies and link globally.

```
git clone git@github.com:diy/core-styles.git diy-core-styles
cd diy-core-styles
npm install
npm link
```

`npm link` will setup npm to symlink to your clone when you run 
`npm link diy-core-styles` in your project.

So if we want to test core-style changes against `www` for example:

```
cd path/to/www
npm link diy-core-styles
```

Now any changes in your `diy-core-styles` repo will immediately be reflected 
in `www`.

Otherwise you can verify against the included styleguide.
