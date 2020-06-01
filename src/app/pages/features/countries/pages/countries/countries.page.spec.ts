import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesPage } from './countries.page';

describe('CountriesPage', () => {
  let component: CountriesPage;
  let fixture: ComponentFixture<CountriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
