import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretRouteComponent } from './secret-route.component';

describe('SecretRouteComponent', () => {
  let component: SecretRouteComponent;
  let fixture: ComponentFixture<SecretRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
