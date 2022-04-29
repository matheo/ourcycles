import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { WebLayoutWrapperComponent } from './components/web-layout-wrapper/web-layout-wrapper.component';
import { WebLayoutMenuComponent } from './components/web-layout-menu/web-layout-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
  ],
  declarations: [
    WebLayoutWrapperComponent,
    WebLayoutMenuComponent,
  ],
  exports: [
    WebLayoutWrapperComponent,
  ],
})
export class WebLayoutModule {}