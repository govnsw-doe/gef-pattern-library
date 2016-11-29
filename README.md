# GEF Pattern Library (GEFPL)

A static site for GEF, describing design, themes, components, utilities for users, designers, developers and editors. 

---

## Quickstart

Clone this repo to a folder, then navigate to the repo

`cd path/to/folder`

### On Mac

`$ make`

### On PC

`$ npm install && bower install`

`$ node index.js`

## How it works

The library uses [Metalsmith](http://metalsmith.io) to generate a static site which displays content written in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) within [Pug](http://pugj.org) files

It leverages [GEF](https://bitbucket.org/dec-ce/gef) in order to pull in component and pattern examples as well as using GEF's Javascript library to make practical use of utilities.

## Adding content

1. Once you have the repository on your PC, look into the `src` folder, you will see a list of folders, each of which corresponds with a section on GEFPL. 

2. In each of these folders there's a file called `template-to-copy.pug`. Copy this file and rename to the name of the page you're creating keeping the pug extension e.g. `component-name.pug`.

3. Open the file in your favourite code editor. If you don't have a code editor, we recommend [Sublime Text](https://www.sublimetext.com/) or [Atom](https://atom.io/)

### Editing the metadata

At the top of each file is a section which we call "Front matter", and it looks like this:

```
---
layout: component.pug
collection: components
title: Show/Hides
display_title: Show/Hides
description: Show/hides are collections of content pairs, with each pair consisting of a title and an expandable content block.
available: <span>Squiz Matrix</span>
---
```

...and it's essentially structured data for the file which is read to build the site correctly. 

Edit this content to match the requirements. Some notes:

* The 'layout' defines the way the page looks, we have layouts based on the category of your document. 

* The 'collection' option groups the files in the navigation bar. Use lower case

* Make sure you wrap a span `<span>[content here]</span>` around each 'available' CMS option.


### Editing the content

There are a few things to look out for when editing the rest of the file. Some categories have special sections which display live examples and code examples, but we'll look at that later.

For now look at the 'Overview' category and the file `template-to-copy.pug`. Wherever you see the keyword `:marked`, you will be able to enter [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) below it, but you need to make sure that the content is _indented_ with _2 spaces_.

```
:marked
  
  # This is your content
  ## See how it is indented?

```

Now let's look at a more complex template. In 'components', open `template-to-copy.pug`. You will see a bit of pug syntax which has the necessary code to pull in the live examples and code examples. The important part here is the inclusion of the GEF component or pattern file, the processes will do the rest. If you do not use the correct path the site will not compile and you'll get an error, in which case you need to cancel the process (in your terminal) `ctrl + C`, and restart by typing `$ index.js` or `$ make`.

## Drafts

If you are working on a document and haven't finished, you can set the document to draft mode which means it will not compile by adding the following structured data in the front matter:

```
--- 
draft: true
...
...
---
````