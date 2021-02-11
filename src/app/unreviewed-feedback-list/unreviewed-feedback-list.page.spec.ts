import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnreviewedFeedbackListPage } from './unreviewed-feedback-list.page';

describe('UnreviewedFeedbackListPage', () => {
  let component: UnreviewedFeedbackListPage;
  let fixture: ComponentFixture<UnreviewedFeedbackListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnreviewedFeedbackListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnreviewedFeedbackListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
