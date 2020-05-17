import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PshaheenPage } from './pshaheen.page';

describe('PshaheenPage', () => {
  let component: PshaheenPage;
  let fixture: ComponentFixture<PshaheenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PshaheenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PshaheenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
