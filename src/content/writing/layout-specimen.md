---
title: 'Layout specimen, not a post'
description: 'A draft entry kept so the /writing template can be checked at any width without publishing anything. Delete it when the first real post lands.'
published: '2026-09-27'
draft: true
---

This entry exists to exercise the post template. It is `draft: true`, so it builds no page, no Open
Graph card and no sitemap entry; flip it to `false` locally, look at the result, and flip it back. It
makes no claim about anyone's work, and it should not survive the first real post.

The paragraph above and this one are here to show the measure at work. Prose is capped at 66
characters, which is roughly where a line stops being comfortable to track back from, and the row gap
between blocks does the spacing rather than paragraph margins — one place to change, and no collapsed
margins to reason about when a heading follows a list.

## A second-level heading

Headings are part of the reading order here, not labels in the margin. That is the one real
difference from a case-study page, where `Problem`, `What I did` and `Result` sit in a column of
their own because there are always exactly three of them and they are always the same three.

A sentence with a [link to the Astro content collections documentation](https://docs.astro.build/en/guides/content-collections/)
in it, so underline colour and offset can be judged against surrounding text rather than in
isolation. Inline code such as `kubectl get nodes` sits at 0.9em, because Overpass Mono sets large
beside Overpass and matching the x-height matters more than matching the nominal size.

### A third-level heading

Below it, a list:

- A first item, long enough to wrap at a phone width and show how the indent behaves on the second
  line rather than only on the first.
- A short second item.
- A third, with `inline code` inside it.

Then an ordered list, because the markers align differently:

1. First step.
2. Second step.
3. Third step.

## Code, quotes and rules

A fenced block should end exactly where the paragraphs beside it end, which is what the registered
`--prose-measure` property in `base.css` is for:

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: specimen
data:
  note: "one colour, on the deep ground"
```

> A block quote is a hairline in the margin and muted text. No quotation marks, no italics, no
> indent beyond the rule — the same quiet edge the rest of the site uses.

---

A horizontal rule above, then a closing paragraph so the foot of the page has something to sit
under. Long-form is where measure, line height and heading rhythm get exposed, so this is the file to
open at 390 px before deciding the template is finished.
