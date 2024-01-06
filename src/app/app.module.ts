import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './public/side-bar/side-bar.component';
import { SectionContainerComponent } from './public/section-container/section-container.component';
import { BreakingChangesComponent } from './breaking-changes/breaking-changes.component';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { DeprecationsComponent } from './deprecations/deprecations.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { MigrationsComponent } from './migrations/migrations.component';
import { I18nTransitionComponent } from './i18n-transition/i18n-transition.component';
import { NullishCoalescingComponent } from './nullish-coalescing/nullish-coalescing.component';
import { LearningResourceComponent } from './learning-resource/learning-resource.component';
import { StylishImprovementsComponent } from './stylish-improvements/stylish-improvements.component';
import { CodeContainerComponent } from './public/code-container/code-container.component';
import { StrictModeComponent } from './strict-mode/strict-mode.component';
import { StyictModeStrictTemplateComponent } from './strict-mode/styict-mode-strict-template/styict-mode-strict-template.component';
import { TodoComponent } from './todo/todo.component';
import { LanguageServiceComponent } from './language-service/language-service.component';
import { HttpContextComponent } from './http-context/http-context.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PageInterceptorInterceptor } from './public/version-specific/page-interceptor/page-interceptor.interceptor';
import { DeprecationsContentChildrenComponent } from './deprecations/deprecations-content-children/deprecations-content-children.component';
import { DocReviewerContainerComponent } from './public/doc-reviewer-container/doc-reviewer-container.component';
import { FooterComponent } from './public/footer/footer.component';
import { NavigationButtonContainerComponent } from './public/navigation-button-container/navigation-button-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageContainerComponent } from './public/page-container/page-container.component';
import { ThemeComponent } from './public/theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    BreakingChangesComponent,
    DeprecationsComponent,
    DocumentsComponent,
    HomeComponent,
    NotesComponent,
    MigrationsComponent,
    SideBarComponent,
    SectionContainerComponent,
    I18nTransitionComponent,
    NullishCoalescingComponent,
    LearningResourceComponent,
    StylishImprovementsComponent,
    CodeContainerComponent,
    StrictModeComponent,
    StyictModeStrictTemplateComponent,
    TodoComponent,
    LanguageServiceComponent,
    HttpContextComponent,
    DeprecationsContentChildrenComponent,
    DocReviewerContainerComponent,
    FooterComponent,
    NavigationButtonContainerComponent,
    PageContainerComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighlightModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PageInterceptorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
