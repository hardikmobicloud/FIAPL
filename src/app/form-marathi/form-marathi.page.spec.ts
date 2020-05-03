import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormMarathiPage } from './form-marathi.page';

describe('FormMarathiPage', () => {
  let component: FormMarathiPage;
  let fixture: ComponentFixture<FormMarathiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMarathiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormMarathiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
