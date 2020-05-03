import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormEnglishPage } from './form-english.page';

describe('FormEnglishPage', () => {
  let component: FormEnglishPage;
  let fixture: ComponentFixture<FormEnglishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEnglishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormEnglishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
