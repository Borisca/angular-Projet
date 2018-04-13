import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LePremierCompComponent } from './le-premier-comp/le-premier-comp.component';
import { AppareilComponent } from './appareil/appareil.component';

import {AppareilService} from './Services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './Services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuard} from './Services/auth-guar.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from './Services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  {path: 'appareils' , canActivate: [AuthGuard], component: AppareilViewComponent},
  {path : 'auth' , component: AuthComponent},
  {path : 'appareils/:id' , canActivate: [AuthGuard],  component : SingleAppareilComponent},
  {path: '' , component: AuthComponent},
  {path : 'not-found' , component : FourOhFourComponent},
  {path: 'edit', canActivate: [AuthGuard], component : EditAppareilComponent},
  {path: 'users', canActivate: [AuthGuard], component: UserListComponent},
  {path: 'new-user', canActivate: [AuthGuard], component: NewUserComponent},
  {path : '**' , redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    LePremierCompComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
