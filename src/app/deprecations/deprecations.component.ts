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

  titles = ["Description", "Reference"];

  constructor(private changeDetectorRef: ChangeDetectorRef){}

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
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

  emitDistinctChangesOnly = `
  //child component
  export class DeprecationsContentChildrenComponent {
    @ContentChildren('item') items: QueryList<ElementRef<any>> | undefined;
    ngAfterContentInit() {
      this.items?.changes.subscribe(items => {
        console.log(items)
      });
    }
  }

  //parent component
  export class DeprecationsComponent {
    cnt = 0;
    @ViewChild("itemWrapper", {read: ElementRef}) itemWrapper: ElementRef;
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

  tsconfigProd = `
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
}
