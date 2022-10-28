import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PersoninfoViewComponent } from './components/personinfo/personinfo-view/personinfo-view.component';
import { PersoninfoCreateComponent } from './components/personinfo/personinfo-create/personinfo-create.component';
import { PersoninfoEditComponent } from './components/personinfo/personinfo-edit/personinfo-edit.component';
import { PersonSingalViewComponent } from './components/dialog/person-singal-view/person-singal-view.component';
import { ConfirmDeleteDialogComponent } from './components/dialog/confirm-delete-dialog/confirm-delete-dialog.component';
import { CountryService } from './services/country.service';
import { PersoninfoService } from './services/personinfo.service';
import { NotifyService } from './services/notify.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PersoninfoViewComponent,
    PersoninfoCreateComponent,
    PersoninfoEditComponent,
    PersonSingalViewComponent,
    ConfirmDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CountryService, PersoninfoService, NotifyService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
