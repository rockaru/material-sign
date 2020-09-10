![Build](https://github.com/rockaru/material-sign/workflows/Build/badge.svg)
![Demo](https://github.com/rockaru/material-sign/workflows/Demo/badge.svg)

# Material Sign

Simple dual list box component to use with your Angular app, along with Angular Material.

If you don't need drag and drop support you can use [this one](https://github.com/rockaru/material-sign) without Angular cdk

[Demo](https://rockaru.github.io/material-sign/)

## Dependencies
You will need:

- Angular ^10
- Angular Material ^10

## Instalation

To install this library, run:

```
$ npm install material-sign --save
```

and then from your Angular AppModule:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the module
import { MaterialSignModule } from 'material-sign';