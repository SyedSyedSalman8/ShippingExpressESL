import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TandcPage } from './tandc.page';

describe('TandcPage', () => {
  let component: TandcPage;
  let fixture: ComponentFixture<TandcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TandcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TandcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
