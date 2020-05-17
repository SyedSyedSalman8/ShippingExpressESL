import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BomlPage } from './boml.page';

describe('BomlPage', () => {
  let component: BomlPage;
  let fixture: ComponentFixture<BomlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BomlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
