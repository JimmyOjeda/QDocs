import { ChangeDetectionStrategy, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeMx from '@angular/common/locales/es-MX';

import { AppComponent } from './app.component';
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
import { TemplateSelectionComponent } from './views/template-selection/template-selection.component';
import { DictionaryViewComponent } from './views/dictionary-view/dictionary-view.component';
import { ReturnButtonComponent } from './components/return-button/return-button.component';
import { ModalComponent } from './components/modal/modal.component';
import { RemoveButtonComponent } from './components/remove-button/remove-button.component';
import { RemovableOptionComponent } from './components/removable-option/removable-option.component';
import { DictionarySearchComponent } from './components/dictionary-search/dictionary-search.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { SearchModalComponent } from './components/search-modal/search-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { GenerateDocsWizardComponent } from './views/generate-docs-wizard/generate-docs-wizard.component';
import { StepsComponent } from './components/steps/steps.component';
import { StepTemplateComponent } from './components/step-template/step-template.component';
import { GenerateDocsCompleteComponent } from './views/generate-docs-complete/generate-docs-complete.component';
import { TemplateWizardComponent } from './components/template-wizard/template-wizard.component';
import { WizardOptionComponent } from './components/wizard-option/wizard-option.component';
import { WizardService } from './services/wizard/wizard.service';
import { RecordWizardComponent } from './components/record-wizard/record-wizard.component';
import { SummaryWizardComponent } from './components/summary-wizard/summary-wizard.component';
import { CalendarViewComponent } from './views/calendar-view/calendar-view.component';
import { CalendarCommonModule,CalendarModule, CalendarMonthModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { LoginComponent } from './views/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { NotFoundComponent } from './views/not-found/not-found.component';

registerLocaleData(localeMx);

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
    RemoveButtonComponent,
    RemovableOptionComponent,
    DictionarySearchComponent,
    SearchButtonComponent,
    SearchModalComponent,
    RemovableOptionComponent,
    GenerateDocsWizardComponent,
    StepsComponent,
    StepTemplateComponent,
    GenerateDocsCompleteComponent,
    TemplateWizardComponent,
    WizardOptionComponent,
    RecordWizardComponent,
    SummaryWizardComponent,
    CalendarViewComponent,
    LoginComponent,
    NotFoundComponent,
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
    FormsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    CommonModule,
    CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory
    }),
    HttpClientModule
  ],
  providers: [WizardService, MatFormField, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
