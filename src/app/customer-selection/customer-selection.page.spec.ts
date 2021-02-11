import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerSelectionPage } from './customer-selection.page';

describe('CustomerSelectionPage', () => {
  let component: CustomerSelectionPage;
  let fixture: ComponentFixture<CustomerSelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSelectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
