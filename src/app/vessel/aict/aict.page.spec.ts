import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AictPage } from './aict.page';

describe('AictPage', () => {
  let component: AictPage;
  let fixture: ComponentFixture<AictPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AictPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AictPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
