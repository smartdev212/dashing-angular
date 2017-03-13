/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Directive, Input, Output } from '@angular/core';

import { PerformanceComponent } from './performance.component';
import { MaterialModule } from "@angular/material";
import { EventEmitter } from "@angular/common/src/facade/async";

@Directive({
  selector: '[baseChart]'
})
class ChartDirectiveStub {
  @Input() datasets;
  @Input() labels;
  @Input() options;
  @Input() legend;
  @Input() chartType;
  @Output() chartHover = new EventEmitter();
  @Output() chartClick = new EventEmitter();
}

describe('PerformanceComponent', () => {
  let component: PerformanceComponent;
  let fixture: ComponentFixture<PerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ PerformanceComponent, ChartDirectiveStub ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
