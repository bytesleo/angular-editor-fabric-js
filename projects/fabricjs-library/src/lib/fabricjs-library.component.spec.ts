import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricjsLibraryComponent } from './fabricjs-library.component';

describe('FabricjsLibraryComponent', () => {
  let component: FabricjsLibraryComponent;
  let fixture: ComponentFixture<FabricjsLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricjsLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricjsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
