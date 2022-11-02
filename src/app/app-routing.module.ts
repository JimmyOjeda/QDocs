import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { AgentHomeComponent } from './views/agent-home/agent-home.component';
import { DatabaseSelectionComponent } from './views/database-selection/database-selection.component';
import { DictionaryViewComponent } from './views/dictionary-view/dictionary-view.component';
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
    path: 'template-selection',
    component: TemplateSelectionComponent
  },
  {
    path: 'data-dictionary',
    component: DictionaryViewComponent
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
