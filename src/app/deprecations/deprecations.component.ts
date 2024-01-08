import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';
import { DeprecationsContentChildrenComponent } from './deprecations-content-children/deprecations-content-children.component';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-deprecations',
  templateUrl: './deprecations.component.html',
  styleUrls: ['./deprecations.component.scss']
})
export class DeprecationsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DEPRECATIONS);
  escapeHtml = escapeHtml;
  
  items:number[] = [];
  cnt = 0;

  @ViewChild("itemWrapper", {read: ElementRef}) itemWrapper: ElementRef;
  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  titles = [
    "Introduction",
    "Differences between View Enginee and Ivy",
    "Incremental DOM",
    "Enable Ivy for applications before v12",
    "Reference"
  ];

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
  
  add() {
    this.items.push(this.cnt++);
  }

  renderModule = `
  import 'reflect-metadata';
  import 'zone.js/dist/zone-node';
  import { renderModuleFactory } from '@angular/platform-server'
  import { enableProdMode } from '@angular/core'
  import * as express from 'express';
  import { join } from 'path';
  import { readFileSync } from 'fs';

  enableProdMode();

  const PORT = process.env.PORT || 4200;
  const DIST_FOLDER = join(process.cwd(), 'dist');

  const app = express();

  const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
  const { AppServerModuleNgFactory } = require('main.server');

  app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
    });

  app.set('view engine', 'html');
  app.set('views', 'src')

  app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

  app.get('*', (req, res) => {
    res.render('index', { req });
  });

  app.listen(PORT, () => {
    console.log('listening on PORT!');
  });
  `;

  emitDistinctChangesOnlyUsage = `
  export class DeprecationsContentChildrenComponent {
    @ContentChildren('item', { 
      emitDistinctChangesOnlyUsage: false 
    }) 
    items: QueryList<ElementRef<any>> | undefined;
    
    ngAfterContentInit() {
      //will print logs when initialized
      this.items?.changes.subscribe(items => {
        console.log(items)
      });
    }
  }
  `;

  emitDistinctChangesOnly = `
  //child component
  export class DeprecationsContentChildrenComponent {
    @ContentChildren('item') 
    items: QueryList<ElementRef<any>> | undefined;
    
    ngAfterContentInit() {
      //won't print logs when initialized
      this.items?.changes.subscribe(items => {
        console.log(items)
      });
    }
  }

  //parent component
  export class DeprecationsComponent {
    cnt = 0;
    add() {
      this.items.push(this.cnt++);
    }
  }

  //parent template
  <button (click)="add()">add</button>
  <app-deprecations-content-children #itemWrapper>
    <div *ngFor="let item of items" #item>
      {{ item }}
    </div>
  </app-deprecations-content-children>
  `

  enableIvy = `
  //Before v12

  //tsconfig.json
  {
    "compilerOptions": {
      "module": "esnext",
      // ...
    },
    "angularCompilerOptions": {
      "enableIvy": true,
      "allowEmptyCodegenFiles": true
    }
  }

  //ng new
  ng new Angular11Project --enable-ivy
  `;

  tsconfigProd = `
  //tsconfig.lib.prod.json
  {
    "extends": "./tsconfig.lib.json",
    "compilerOptions": {
      "declarationMap": false
    },
    "angularCompilerOptions": {
      "enableIvy": false
    }
  }
  `;

  tsconfig = `
  {
    "compilerOptions": {
      "module": "esnext",
      // ...
    },
    "angularCompilerOptions": {
      "enableIvy": true,
      "allowEmptyCodegenFiles": true
    }
  }
  `;

  angularJson = `
  {
    "projects": {
      "your-project": {
        "architect": {
          "build": {
            "options": {
              ...
              "aot": true,
            }
          }
        }
      }
    }
  }
  `;

  ngcc = `
  "postinstall": "ngcc
  `;

  ngNew = `
  ng new Angular11Project --enable-ivy
  `;

  angularExampleCode = `
  import { Component } from '@angular/core';

  //@Component directive
  @Component({
    selector: 'app-root',
    template: '
      <!-- template HTML -->
      <div>
        <span>{{title}}</span>
        <app-child *ngIf="show"></app-child>
      </div>
    ',
    styles: []
  })
  export class AppComponent {
    //Typecript properties
    title = 'example';
    show: boolean;
  }
  `;
}
