import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterDesignComponent } from './monster-design.component';

describe('MonsterDesignComponent', () => {
  let component: MonsterDesignComponent;
  let fixture: ComponentFixture<MonsterDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
