import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextareaPage } from './textarea.page';

describe('TextareaPage', () => {
  let component: TextareaPage;
  let fixture: ComponentFixture<TextareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
