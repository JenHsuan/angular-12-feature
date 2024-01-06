import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BYPASS_ALERT } from 'src/app/public/version-specific/http-token/http-token';

const HEADER = 'Copyright@Sean Hsieh 2023';
const PDF_NAME = 'chart.pdf';

@Injectable({
  providedIn: 'root'
})
export class HttpContextService {

  constructor(protected http: HttpClient) { }

  //Implementation with Puppeteer
  exportPdfFromServer(path: string, byPassAlert: boolean) {
    //Parameters for the PDF
    const cssHeaderStyle = "<style> h1 { font-size:20px; margin-left:50px;}</style>";

    const pdfOptions = {
      format: 'A2',
      landscape: true,
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: `${cssHeaderStyle}<h1>${HEADER}</h1>`,
      footerTemplate: `${cssHeaderStyle}<h1>${HEADER}</h1>`,
      margin: { top: "100px", bottom: "200px", right: "30px", left: "30px" } 
    };

    //Parameters for the customized style tag
    const styleTagOptions = {
      content: '.export {display: none}'
    };

    return this.http.post<any>(`pdf/remote`, {
      path,
      pdfOptions,
      styleTagOptions
    },{
      responseType: 'blob' as 'json',
      context: new HttpContext().set(BYPASS_ALERT, byPassAlert) 
    }).pipe(
      tap(res => {
        //dowmload the PDF files
        const blob = new Blob([res], {type: 'application/pdf'});
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = `${path}.pdf`;
        link.click();
      })
    );
  }
}
