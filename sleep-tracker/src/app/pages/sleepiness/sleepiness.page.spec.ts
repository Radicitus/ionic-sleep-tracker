import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { SleepinessPage } from './sleepiness.page';

describe('Tab2Page', () => {
  let component: SleepinessPage;
  let fixture: ComponentFixture<SleepinessPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SleepinessPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
