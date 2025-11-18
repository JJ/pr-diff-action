# Capture the diff data structure in a PR

This basic action is intended to be used as a first step in a PR. It
captures and outputs in a data structure the diff, which can be
checked (in another step) for whatever you want to.

## Description

This is the `action.yml`, hosted in another branch.


```
name: 'Node 12 Template Action'
description: 'Get started with Node actions'
author: 'GitHub'
inputs:
  myInput:
    description: 'Input to use'
    default: 'world'
runs:
  using: 'node12'
  main: 'lib/main.js'
```
