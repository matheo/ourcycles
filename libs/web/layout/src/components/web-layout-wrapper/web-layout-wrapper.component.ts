import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'wl-web-layout-wrapper',
  templateUrl: './web-layout-wrapper.component.html',
  styleUrls: ['./web-layout-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebLayoutWrapperComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
