import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { SleepLogPage } from './sleep-log.page';

describe('Tab3Page', () => {
  let component: SleepLogPage;
  let fixture: ComponentFixture<SleepLogPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SleepLogPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
