import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReviewedFeedbackListPage } from './reviewed-feedback-list.page';

describe('ReviewedFeedbackListPage', () => {
  let component: ReviewedFeedbackListPage;
  let fixture: ComponentFixture<ReviewedFeedbackListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewedFeedbackListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewedFeedbackListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
