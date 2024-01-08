import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { MigrationsComponent } from './migrations/migrations.component';
import { BreakingChangesComponent } from './breaking-changes/breaking-changes.component';
import { DeprecationsComponent } from './deprecations/deprecations.component';
import { DocumentsComponent } from './documents/documents.component';
import { I18nTransitionComponent } from './i18n-transition/i18n-transition.component';
import { NullishCoalescingComponent } from './nullish-coalescing/nullish-coalescing.component';
import { StylishImprovementsComponent } from './stylish-improvements/stylish-improvements.component';
import { StrictModeComponent } from './strict-mode/strict-mode.component';
import { LanguageServiceComponent } from './language-service/language-service.component';
import { HttpContextComponent } from './http-context/http-context.component';
import { DebuggingListComponent } from './debugging-list/debugging-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'migrations',
    component: MigrationsComponent
  },
  {
    path: 'breaking-changes',
    component: BreakingChangesComponent
  },
  {
    path: 'deprecations',
    component: DeprecationsComponent
  },
  {
    path: 'deprecations#:id',
    component: DeprecationsComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    path: 'i18n-transition',
    component: I18nTransitionComponent
  },
  {
    path: 'nullish-coalescing',
    component: NullishCoalescingComponent
  },
  {
    path: 'stylish-improvements',
    component: StylishImprovementsComponent
  },
  {
    path: 'strict-mode',
    component: StrictModeComponent
  },
  {
    path: 'language-service',
    component: LanguageServiceComponent
  },
  {
    path: 'http-context',
    component: HttpContextComponent
  },
  {
    path: 'debugging-playlist',
    component: DebuggingListComponent
  }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
