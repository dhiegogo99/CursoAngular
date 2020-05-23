import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSecundariaComponent } from './tela-secundaria.component';

describe('TelaSecundariaComponent', () => {
  let component: TelaSecundariaComponent;
  let fixture: ComponentFixture<TelaSecundariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaSecundariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
