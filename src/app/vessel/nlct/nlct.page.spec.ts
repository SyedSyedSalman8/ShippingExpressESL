import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NlctPage } from './nlct.page';

describe('NlctPage', () => {
  let component: NlctPage;
  let fixture: ComponentFixture<NlctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlctPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NlctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
