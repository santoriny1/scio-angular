import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokegamelistComponent } from './pokegamelist.component';

describe('PokegamelistComponent', () => {
  let component: PokegamelistComponent;
  let fixture: ComponentFixture<PokegamelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokegamelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokegamelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
