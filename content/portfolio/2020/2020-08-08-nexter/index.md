---
title: Nexter
date: "2020-08-08"
description: "Realestate agency website project"
cover: ./cover.jpg
repo: "https://github.com/markrall/nexter"
site: "https://nexter.netlify.app/"
category: "portfolio"
tags: ["HTML", "CSS", "SCSS", "Grid"]
featured: true
published: true
---

#### Summary
Based on the best seller [Advanced CSS and Sass: Flexbox, Grid, Animations and More!](https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8312924#overview) by [Jonas Schmedtmann](https://www.udemy.com/user/jonasschmedtmann/) on Udemy, I wanted to take this course to refresh my skills, that practically speaking, were now a decade old by this point. 

A lot has changed with advancements in the CSS spec, preprocessors and tooling. In completing this course, I wanted to make sure that I had a contemporary understanding of the technology and current practices. 

As the the author mentions, you can learn all this stuff organically over time. But it takes lots of time, and trial and error. I wanted to accelerate my development through focused learning.

This section of the course focused solely on CSS Grids. Oh grids, where have you been all my life! Flexbox makes life easier on a single plane, but now with an advanced understanding of CSS Grid page and component layouts, I have the foundations to style anything from sophisticated page layouts to Pinterest style, masonary image gallaries. Awesome!

Resources like [CSS Tricks](https://css-tricks.com/) are invaluable to deeply understand more advanced CSS concepts. So much so, I decided to buy the annual premium subscription. For example, [A Complete Guide to Grid ](https://css-tricks.com/snippets/css/complete-guide-grid/) introduced me to breaking fluid width columns that I've used on this site.

```javascript
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* This is better for small screens, once min() is better supported */
  /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
  grid-gap: 1rem;
  /* This is the standardized property now, but has slightly less support */
  /* gap: 1rem */
}
```