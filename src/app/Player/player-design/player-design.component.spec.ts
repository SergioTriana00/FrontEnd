import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDesignComponent } from './player-design.component';

describe('PlayerDesignComponent', () => {
  let component: PlayerDesignComponent;
  let fixture: ComponentFixture<PlayerDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
