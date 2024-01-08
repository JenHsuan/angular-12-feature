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
  sectionTitles = [
    "Overview",
    "Custom Webpack Configurations In Angular",
    //"Webpack 5 New Features",
    "Reference"
  ];

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
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
  npm start
  `;

  namedChunk = `
  module.exports = {
    optimization: {
      chunkIds: 'named',
    }
  }
  `;
}