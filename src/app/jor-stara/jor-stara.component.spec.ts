import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JorStaraComponent } from './jor-stara.component';

describe('JorStaraComponent', () => {
  let component: JorStaraComponent;
  let fixture: ComponentFixture<JorStaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JorStaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JorStaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
