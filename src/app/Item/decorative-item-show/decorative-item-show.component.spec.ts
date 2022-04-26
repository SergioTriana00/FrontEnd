import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorativeItemShowComponent } from './decorative-item-show.component';

describe('DecorativeItemShowComponent', () => {
  let component: DecorativeItemShowComponent;
  let fixture: ComponentFixture<DecorativeItemShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorativeItemShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorativeItemShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
