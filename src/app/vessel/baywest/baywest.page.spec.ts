import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaywestPage } from './baywest.page';

describe('BaywestPage', () => {
  let component: BaywestPage;
  let fixture: ComponentFixture<BaywestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaywestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaywestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
