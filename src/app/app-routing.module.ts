import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { AgentHomeComponent } from './views/agent-home/agent-home.component';
import { CalendarViewComponent } from './views/calendar-view/calendar-view.component';
import { DatabaseSelectionComponent } from './views/database-selection/database-selection.component';
import { DictionaryBuilderComponent } from './views/dictionary-builder/dictionary-builder.component';
import { DictionarySelectionComponent } from './views/dictionary-selection/dictionary-selection.component';
import { DictionaryViewComponent } from './views/dictionary-view/dictionary-view.component';
import { GenerateDocsCompleteComponent } from './views/generate-docs-complete/generate-docs-complete.component';
import { GenerateDocsWizardComponent } from './views/generate-docs-wizard/generate-docs-wizard.component';
import { TemplateSelectionComponent } from './views/template-selection/template-selection.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent
  },
  {
    path: 'agent-home',
    component: AgentHomeComponent
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent
  },
  {
    path: 'database-selection',
    component: DatabaseSelectionComponent
  },
  {
    path: 'dictionary-selection',
    component: DictionarySelectionComponent
  },
  {
    path: 'dictionary-builder',
    component: DictionaryBuilderComponent
  },
  {
    path: 'template-selection',
    component: TemplateSelectionComponent
  },
  {
    path: 'data-dictionary',
    component: DictionaryViewComponent
  },
  {
    path: 'generate-docs',
    component: GenerateDocsWizardComponent
  },
  {
    path: 'docs-complete',
    component: GenerateDocsCompleteComponent
  },
  {
    path: 'calendar',
    component: CalendarViewComponent
  },
  {
    path: '**',
    component: AdminHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
