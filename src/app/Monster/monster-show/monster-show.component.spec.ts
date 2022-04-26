import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterShowComponent } from './monster-show.component';

describe('MonsterShowComponent', () => {
  let component: MonsterShowComponent;
  let fixture: ComponentFixture<MonsterShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
