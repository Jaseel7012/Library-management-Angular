import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryBookDeleteComponent } from './library-book-delete.component';

describe('LibraryBookDeleteComponent', () => {
  let component: LibraryBookDeleteComponent;
  let fixture: ComponentFixture<LibraryBookDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryBookDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryBookDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
