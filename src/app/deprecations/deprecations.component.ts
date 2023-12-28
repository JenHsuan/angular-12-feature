import { Component, OnInit } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-deprecations',
  templateUrl: './deprecations.component.html',
  styleUrls: ['./deprecations.component.scss']
})
export class DeprecationsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DEPRECATIONS);
  escapeHtml = escapeHtml;

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
}
