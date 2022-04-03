# use-detect-scroll

# What is this ?

useDetectScroll: detects scroll event types: scroll derection (horizontal, vertical) and whether page-top or page-bottom or middle.

# Installation

`npm i use-detect-scroll --save`

# Examples

```
import * as React from "react";
import { useDetectScroll } from "use-detect-scroll";

function App() {
   console.log('direction',useDetectScroll());
    return (
    <div className="App" style={{ height: '3000px', width: '5000px'}}>
    </div>
  );
}

export default App;

```

## Options

- `useDetectScroll()` handle and show all detect scroll.
- `useDetectScroll(true,)` detect scroll change based on axis X.
- `useDetectScroll(,true)` detect scroll change based on axis Y.

## Developing

- `useDetectScroll.isPageTop()` whether at the page top or not.
- `useDetectScroll.isPageBottom()` whether at the page bottom or not.
- `useDetectScroll.getPxToTop()` will return scrollTop amount in pixels.
