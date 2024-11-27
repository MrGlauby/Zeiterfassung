import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListFeatureComponent } from './user-list-feature.component';

describe('UserListFeatureComponent', () => {
  let component: UserListFeatureComponent;
  let fixture: ComponentFixture<UserListFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
