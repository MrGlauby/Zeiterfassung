import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZeiterfassungUserCreateModalComponent } from './user-create-modal.component';

describe('UserCreateModalComponent', () => {
  let component: ZeiterfassungUserCreateModalComponent;
  let fixture: ComponentFixture<ZeiterfassungUserCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeiterfassungUserCreateModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZeiterfassungUserCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
