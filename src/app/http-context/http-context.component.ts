import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { combineLatest } from 'rxjs';
import { HttpContextService } from './service/http-context.service';
import { SectionContainerComponent } from '../public/section-container/section-container.component';


const PAGES = ['/'];

@Component({
  selector: 'app-http-context',
  templateUrl: './http-context.component.html',
  styleUrls: ['./http-context.component.scss']
})
export class HttpContextComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.HTTP_CONTEXT);

  legacyInterceptor = `
  @Injectable()
  export class PageInterceptorInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            alert("The proxy was not ready. Please try it later.")
          }
          return throwError(error)
        }
      ));
    }
  }`;

  newInterceptor = `
  export class PageInterceptorInterceptor implements HttpInterceptor {

    constructor() {}
  
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          if (request.context.get(BYPASS_ALERT) === true) {
            return throwError(error)
          }
        
          if (error.status === 404) {
            alert("The proxy was not ready. Please try it later.")
          }
          return throwError(error)
        }
      ));
    }
  }
  `;

  httpService = `
  exportPdfFromServer(path: string, byPassAlert: boolean) {
    return this.http.post<any>('pdf/remote', {
      path,
      ...
    },{
      ...,
      context: new HttpContext().set(BYPASS_ALERT, byPassAlert) 
    }).pipe(
      ...
    );
  }`;

  httpContextToken = `
  import { HttpContextToken } from "@angular/common/http";
  export const BYPASS_ALERT = new HttpContextToken(() => false);
  `;

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  titles = ["Description", "Pass Metadata to Interceptors", "Demo", "Reference"];


  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
  constructor(
    private service: HttpContextService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }
  
  printFromServer(byPassAlert: boolean) {
    combineLatest(PAGES.map(page => this.service.exportPdfFromServer(page, byPassAlert))).subscribe();
  }
}
