import { Component, OnInit } from '@angular/core';
import { authorUrl } from '../config/url';

@Component({
  selector: 'app-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.scss']
})
export class FooterContainerComponent {
  authorUrl = authorUrl;
}
