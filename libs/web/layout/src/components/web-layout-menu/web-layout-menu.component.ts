import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wl-web-layout-menu',
  templateUrl: './web-layout-menu.component.html',
  styleUrls: ['./web-layout-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebLayoutMenuComponent implements OnInit {
  fillerNav = Array.from({length: 7}, (_, i) => `Nav Item ${i + 1}`);

  constructor() {}

  ngOnInit(): void {}
}
