import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentComponent } from './components/content/content.component';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { HomeOptionComponent } from './components/home-option/home-option.component';
import { AgentHomeComponent } from './views/agent-home/agent-home.component';
import { DatabaseSelectionComponent } from './views/database-selection/database-selection.component';
import { OptionComponent } from './components/option/option.component';
import { DictionarySelectionComponent } from './views/dictionary-selection/dictionary-selection.component';
import { DictionaryBuilderComponent } from './views/dictionary-builder/dictionary-builder.component';
import { ContentButtonComponent } from './components/content-button/content-button.component';
import { SidenavBuilderComponent } from './components/sidenav-builder/sidenav-builder.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateSelectionComponent } from './views/template-selection/template-selection.component';
import { DictionaryViewComponent } from './views/dictionary-view/dictionary-view.component';
import { ReturnButtonComponent } from './components/return-button/return-button.component';
import { ModalComponent } from './components/modal/modal.component';
import { RemoveButtonComponent } from './components/remove-button/remove-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    ContentComponent,
    AdminHomeComponent,
    HomeOptionComponent,
    AgentHomeComponent,
    DatabaseSelectionComponent,
    OptionComponent,
    DictionarySelectionComponent,
    DictionaryBuilderComponent,
    ContentButtonComponent,
    SidenavBuilderComponent,
    AddButtonComponent,
    TemplateSelectionComponent,
    DictionaryViewComponent,
    ReturnButtonComponent,
    ModalComponent,
    RemoveButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
