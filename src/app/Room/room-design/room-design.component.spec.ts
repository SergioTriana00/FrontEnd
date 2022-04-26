import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDesignComponent } from './room-design.component';

describe('RoomDesignComponent', () => {
  let component: RoomDesignComponent;
  let fixture: ComponentFixture<RoomDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
