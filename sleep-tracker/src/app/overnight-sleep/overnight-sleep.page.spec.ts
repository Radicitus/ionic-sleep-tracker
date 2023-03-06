import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { OvernightSleepPage } from './overnight-sleep.page';

describe('Tab1Page', () => {
  let component: OvernightSleepPage;
  let fixture: ComponentFixture<OvernightSleepPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OvernightSleepPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(OvernightSleepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
