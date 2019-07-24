import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeExternalTransferComponent } from './make-external-transfer.component';

describe('MakeExternalTransferComponent', () => {
  let component: MakeExternalTransferComponent;
  let fixture: ComponentFixture<MakeExternalTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeExternalTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeExternalTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
