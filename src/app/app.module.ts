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
import { MatTableModule } from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentComponent } from './components/content/content.component';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { HomeOptionComponent } from './components/home-option/home-option.component';
import { AgentHomeComponent } from './views/agent-home/agent-home.component';
import { DatabaseSelectionComponent } from './views/database-selection/database-selection.component';
import { OptionComponent } from './components/option/option.component';
import { TemplateSelectionComponent } from './views/template-selection/template-selection.component';
import { DictionaryViewComponent } from './views/dictionary-view/dictionary-view.component';
import { ReturnButtonComponent } from './components/return-button/return-button.component';
import { GenerateDocsWizardComponent } from './views/generate-docs-wizard/generate-docs-wizard.component';
import { StepsComponent } from './components/steps/steps.component';
import { StepTemplateComponent } from './components/step-template/step-template.component';
import { GenerateDocsCompleteComponent } from './views/generate-docs-complete/generate-docs-complete.component';
import { TemplateWizardComponent } from './components/template-wizard/template-wizard.component';
import { WizardOptionComponent } from './components/wizard-option/wizard-option.component';
import { WizardService } from './services/wizard/wizard.service';
import { RecordWizardComponent } from './components/record-wizard/record-wizard.component';
import { SummaryWizardComponent } from './components/summary-wizard/summary-wizard.component';

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
    TemplateSelectionComponent,
    DictionaryViewComponent,
    ReturnButtonComponent,
    GenerateDocsWizardComponent,
    StepsComponent,
    StepTemplateComponent,
    GenerateDocsCompleteComponent,
    TemplateWizardComponent,
    WizardOptionComponent,
    RecordWizardComponent,
    SummaryWizardComponent
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
    MatTableModule,
    MatInputModule,
  ],
  providers: [WizardService, MatFormField],
  bootstrap: [AppComponent]
})
export class AppModule { }
