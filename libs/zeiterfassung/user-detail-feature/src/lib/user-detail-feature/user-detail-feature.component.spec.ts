import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailFeatureComponent } from './user-detail-feature.component';

describe('UserDetailFeatureComponent', () => {
  let component: UserDetailFeatureComponent;
  let fixture: ComponentFixture<UserDetailFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
