import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { WebLayoutModule, WebLayoutWrapperComponent } from '@ourcycles/web-layout';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: WebLayoutWrapperComponent,
    children: [
      {
        path: '',
        component: AppComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    WebLayoutModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
