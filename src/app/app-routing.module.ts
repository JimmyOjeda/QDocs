import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoleGuard } from './guards/admin/admin-role.guard';
import { AgentRoleGuard } from './guards/agent/agent-role.guard';
import { UnknownGuard } from './guards/unknown/unknown.guard';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { AgentHomeComponent } from './views/agent-home/agent-home.component';
import { CalendarViewComponent } from './views/calendar-view/calendar-view.component';
import { DatabaseSelectionComponent } from './views/database-selection/database-selection.component';
import { DictionaryBuilderComponent } from './views/dictionary-builder/dictionary-builder.component';
import { DictionarySelectionComponent } from './views/dictionary-selection/dictionary-selection.component';
import { DictionaryViewComponent } from './views/dictionary-view/dictionary-view.component';
import { GenerateDocsCompleteComponent } from './views/generate-docs-complete/generate-docs-complete.component';
import { GenerateDocsWizardComponent } from './views/generate-docs-wizard/generate-docs-wizard.component';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { TemplateSelectionComponent } from './views/template-selection/template-selection.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'agent-home',
    component: AgentHomeComponent,
    canActivate: [AgentRoleGuard]
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: 'database-selection',
    component: DatabaseSelectionComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: 'dictionary-selection',
    component: DictionarySelectionComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: 'dictionary-builder',
    component: DictionaryBuilderComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: 'template-selection',
    component: TemplateSelectionComponent,
    canActivate: [AgentRoleGuard]
  },
  {
    path: 'data-dictionary',
    component: DictionaryViewComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: 'generate-docs',
    component: GenerateDocsWizardComponent,
    canActivate: [AgentRoleGuard]
  },
  {
    path: 'docs-complete',
    component: GenerateDocsCompleteComponent,
    canActivate: [AgentRoleGuard]
  },
  {
    path: 'calendar',
    component: CalendarViewComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [UnknownGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
