import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './public/side-bar/side-bar.component';
import { SectionContainerComponent } from './public/section-container/section-container.component';
import { BreakingChangesComponent } from './breaking-changes/breaking-changes.component';
import { HighlightModule } from 'ngx-highlightjs';
import { DeprecationsComponent } from './deprecations/deprecations.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { MigrationsComponent } from './migrations/migrations.component';
import { I18nTransitionComponent } from './i18n-transition/i18n-transition.component';

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
    I18nTransitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
