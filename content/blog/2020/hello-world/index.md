---
title: Hello World
date: "2020-05-01T22:12:03.284Z"
description: "Hello World"
category: "post"
tags: ["nodejs", "scss"]
featured: true
published: true
---

import { Butt } from '../../../../src/components/butt';

This is my first post on my new fake blog! How exciting!

<Butt>yoyoyo</Butt>

I'm sure I'll write a lot more interesting things in the future.

Oh, and here's a great quote from this Wikipedia on
[salted duck eggs](https://en.wikipedia.org/wiki/Salted_duck_egg).

```jsx
import React from "react"

const Dump = props => (
  <div
    style={{
      fontSize: 20,
      border: "1px solid #efefef",
      padding: 10,
      background: "white",
    }}
  >
    {Object.entries(props).map(([key, val]) => (
      <pre key={key}>
        <strong style={{ color: "white", background: "red" }}>{key} 💩</strong>
        {JSON.stringify(val, "", " ")}
      </pre>
    ))}
  </div>
)

export default Dump
```

> A salted duck egg is a Chinese preserved food product made by soaking duck
> eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted
> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color.

```javascript
console.log("Hello World!")
```

```css
.hello {
  font-size: 3.5rem;
}
```

![Chinese Salty Egg](./salty_egg.jpg)
