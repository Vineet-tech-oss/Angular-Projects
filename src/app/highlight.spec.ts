import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight';

@Component({
  template: `<div appHighlight>Highlight me!</div>`
})
class TestComponent {}

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.configureTestingModule({
      imports: [HighlightDirective, TestComponent]
    }).createComponent(TestComponent);
    const directiveEl = fixture.debugElement.query(By.directive(HighlightDirective));
    const directive = directiveEl.injector.get(HighlightDirective);
    expect(directive).toBeTruthy();
  });
});
