import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebLayoutWrapperComponent } from './web-layout-wrapper.component';

describe('WebLayoutWrapperComponent', () => {
  let component: WebLayoutWrapperComponent;
  let fixture: ComponentFixture<WebLayoutWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebLayoutWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebLayoutWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
