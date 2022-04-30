import { NgModule } from '@angular/core';
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
        pathMatch: 'full',
        component: AppComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    WebLayoutModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
