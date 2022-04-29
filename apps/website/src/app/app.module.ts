import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    WebLayoutModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
