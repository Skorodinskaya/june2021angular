import {LOCALE_ID, NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';
import {Route, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {registerLocaleData} from '@angular/common';
import localRu from "@angular/common/locales/ru";
import localUK from "@angular/common/locales/uk";

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostResolveService, UserResolveService} from "./services";
import {HomeComponent} from './components/home/home.component';
import {TestGuard} from "./guards/test.guard";
import {FormsComponent} from './components/forms/forms.component';
import { TestComponent } from './components/test/test.component';
import {IncrementPipe, ToStringPipe} from './pipes';
import { BoldAndColourDirective } from './components/directives';

registerLocaleData(localRu, 'ru');
registerLocaleData(localUK, 'uk');

const routes:Route[] = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
        canActivateChild: [TestGuard],
        canDeactivate: [TestGuard],
        children: [
          {
            path: ':id', component: UserDetailsComponent,
            resolve: {data: UserResolveService}
          }
        ]
      },

      {
        path: 'posts',
        component: PostsComponent,
        children: [
          {
            path: ':id', component: PostDetailsComponent,
            resolve: {data: PostResolveService}
          }
        ]
      }
    ]
  },
];

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UsersComponent,
        PostsComponent,
        PostComponent,
        UserDetailsComponent,
        PostDetailsComponent,
        HomeComponent,
        FormsComponent,
        TestComponent,
        IncrementPipe,
        BoldAndColourDirective,
        ToStringPipe,
        ToStringPipe,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'},
    {provide: LOCALE_ID, useValue: 'uk'},
    IncrementPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
