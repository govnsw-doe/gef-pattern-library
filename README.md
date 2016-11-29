# GEF Pattern Library (GEFPL)

A static site for GEF, describing design, themes, components, utilities for users, designers, developers and editors. 

---

## Quickstart

Clone this repo to a folder, then navigate to the repo

`cd path/to/folder`

### On Mac

`$ make`

### On PC

`$ npm install && bower install && node index.js`

## How it works

The library uses [Metalsmith](http://metalsmith.io) to generate a static site which displays content written in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) within [Pug](http://pugj.org).

It leverages [GEF](https://bitbucket.org/dec-ce/gef) in order to pull in component and pattern examples as well as using GEF's Javascript library to make practical use of utilities.

## Adding content

1. Once you have the repository on your PC, look into the `src` folder, you will see a list of folders, each of which corresponds with a section on GEFPL. 
2. In each of these folders there's a file called `template-to-copy.pug`. Copy this file and rename to the name of the page you're creating keeping the pug extension e.g. `component-name.pug`.
3. Open the file in your favourite code editor. If you don't have a code editor, we recommend [Sublime Text]() or [Atom]()

tbc...