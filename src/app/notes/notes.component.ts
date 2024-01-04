import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.NOTES);

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  titles = [
    "Overview",
    "Custom Webpack Configurations In Angular",
    "Webpack 5 New Features",
    "Reference"
  ];

  constructor(private changeDetectorRef: ChangeDetectorRef){}

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
  
  ngBuildMigration = `
  ng update @angular/cli --migrate-only production-by-default
  `;

  maxMinValidator = `
  <input type="number" min="30" max="100">
  `;

  packagesInstallation = `
  npm install @angular-builders/custom-webpack@^12 --save-dev
  npm install @angular-devkit/build-angular@^12 --save-dev  
  npm install webpack-bundle-analyzer@^4 --save-dev    
  npm install -g webpack@^5
  npm install -g webpack-cli@^5
  `;

  angularJson = `
  "architect": {
    "build": {
      "builder": "@angular-builders/custom-webpack:browser",
      "options": {
        "customWebpackConfig": {
          "path": "./webpack.config.js"
        },
      ...
    },
    "serve": {
      "builder": "@angular-builders/custom-webpack:dev-server",
      ...
  `;

  webpackConfig = `
  const webpack = require('webpack');
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

  module.exports = {
    plugins: [
      new BundleAnalyzerPlugin(),
    ]
  }
  `;

  ngBuild = `
  ng build --prod --output-hashing none
  `;

  webpackBuild = `
  webpack --profile --json build
  `;

  namedChunk = `
  module.exports = {
    optimization: {
      chunkIds: 'named',
    }
  }
  `;
}