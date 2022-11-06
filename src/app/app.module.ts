import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { DatabaseDataModalComponent } from './components/database-data-modal/database-data-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateSelectionComponent } from './views/template-selection/template-selection.component';
import { DictionaryViewComponent } from './views/dictionary-view/dictionary-view.component';
import { ReturnButtonComponent } from './components/return-button/return-button.component';

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
    DatabaseDataModalComponent,
    TemplateSelectionComponent,
    DictionaryViewComponent,
    ReturnButtonComponent
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
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
