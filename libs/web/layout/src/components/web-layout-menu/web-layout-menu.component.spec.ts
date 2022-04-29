import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebLayoutMenuComponent } from './web-layout-menu.component';

describe('WebLayoutMenuComponent', () => {
  let component: WebLayoutMenuComponent;
  let fixture: ComponentFixture<WebLayoutMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebLayoutMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebLayoutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
