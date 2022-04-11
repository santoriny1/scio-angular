import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGameCardComponent } from './pokemon-game-card.component';

describe('PokemonGameCardComponent', () => {
  let component: PokemonGameCardComponent;
  let fixture: ComponentFixture<PokemonGameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonGameCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonGameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
