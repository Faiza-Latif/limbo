import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComparisonPage } from './comparison.page';

describe('ComparisonPage', () => {
  let component: ComparisonPage;
  let fixture: ComponentFixture<ComparisonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComparisonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
