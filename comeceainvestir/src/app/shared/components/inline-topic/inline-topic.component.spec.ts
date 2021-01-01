import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTopicComponent } from './inline-topic.component';

describe('InlineTopicComponent', () => {
  let component: InlineTopicComponent;
  let fixture: ComponentFixture<InlineTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
