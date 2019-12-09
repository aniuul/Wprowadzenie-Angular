import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: "./hello.component.html,
  styles: [`./hello.component.css`]
})
export class HelloComponent  {
  @Input() name: string;
}
