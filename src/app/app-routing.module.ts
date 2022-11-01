import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { AgentHomeComponent } from './views/agent-home/agent-home.component';
import { DatabaseSelectionComponent } from './views/database-selection/database-selection.component';
import { DictionaryBuilderComponent } from './views/dictionary-builder/dictionary-builder.component';
import { DictionarySelectionComponent } from './views/dictionary-selection/dictionary-selection.component';

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
    path: '**',
    component: AdminHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
