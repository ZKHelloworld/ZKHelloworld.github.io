---
layout: post
title: TypeScript Note
date: 2017-06-24 16:50
categories:
---

This blog is a note for collecting the important part of TypeScripe while learning.

### let vs var
1. Let-declared variables scope in block mode, while var-declared's scope in function mode.
2. And let-declared variables don't hoist, so they are not accessable before declaration. Var-declared variables can be accessed in scope before declared. The different is that you get `undefined` before declaration.