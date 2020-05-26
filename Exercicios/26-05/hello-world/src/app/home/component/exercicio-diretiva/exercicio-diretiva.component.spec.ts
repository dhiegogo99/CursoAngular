import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDiretivaComponent } from './exercicio-diretiva.component';

describe('ExercicioDiretivaComponent', () => {
  let component: ExercicioDiretivaComponent;
  let fixture: ComponentFixture<ExercicioDiretivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioDiretivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioDiretivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
