import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VesselPage } from './vessel.page';

describe('VesselPage', () => {
  let component: VesselPage;
  let fixture: ComponentFixture<VesselPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VesselPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VesselPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
