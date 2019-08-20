import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiddleGeneratorComponent } from './riddle-generator.component';

describe('RiddleGeneratorComponent', () => {
  let component: RiddleGeneratorComponent;
  let fixture: ComponentFixture<RiddleGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiddleGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiddleGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
