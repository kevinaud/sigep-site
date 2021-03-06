import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { routing } from './app.routing';
import { NavModule } from './nav/nav.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ExecBoardComponent } from './exec-board/exec-board.component';
import { AlumniComponent } from './alumni/alumni.component';
import { DonateComponent } from './donate/donate.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    SignUpComponent,
    ExecBoardComponent,
    AlumniComponent,
    DonateComponent,
    RecruitmentComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
    NavModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
