import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonToolbarComponent } from './pokemon-toolbar.component';

describe('PokemonToolbarComponent', () => {
  let component: PokemonToolbarComponent;
  let fixture: ComponentFixture<PokemonToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
