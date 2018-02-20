import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FuncTabComponent } from './func-tab/func-tab.component';
import { WritePassageComponent } from './write-passage/write-passage.component';
import { DocommentComponent } from './docomment/docomment.component';
import { AdsComponent } from './ads/ads.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {NavRoute} from './services/routes.interface';
import { UsersComponent } from './users/users.component';
import {AdminsComponent} from './admins/admins.component';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from '@angular/common';

export const navLinks: NavRoute[] = [
  {label: '文章编辑', name: 'Passages', path: '', component: WritePassageComponent},
  {label: '评论管理', name: 'Comments', path: 'comments', component: DocommentComponent},
  {label: 'ads管理', name: 'Ads', path: 'ads', component: AdsComponent},
  {label: '用户管理', name: 'Users', path: 'users', component: UsersComponent},
  {label: 'admin管理', name: 'Admins', path: 'admins', component: AdminsComponent},
];


const routes: Routes = [
  { path: '', component: WritePassageComponent, pathMatch: 'full' },
  { path: 'comments', component: DocommentComponent, pathMatch: 'full' },
  { path: 'ads', component: AdsComponent, pathMatch: 'full' },
  { path: 'users', component: UsersComponent, pathMatch: 'full' },
  { path: 'admins', component: AdminsComponent, pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MarkdownComponent,
    NavbarComponent,
    FuncTabComponent,
    WritePassageComponent,
    DocommentComponent,
    AdsComponent,
    UsersComponent,
    AdminsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: APP_BASE_HREF,    useValue: '/' },
    { provide: 'NavLinks',    useValue: navLinks },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
