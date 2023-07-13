import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditItemPage } from './add-edit-item.page';
import { async } from '@angular/core/testing';

describe('AddEditItemPage', () => {
  let component: AddEditItemPage;
  let fixture: ComponentFixture<AddEditItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
