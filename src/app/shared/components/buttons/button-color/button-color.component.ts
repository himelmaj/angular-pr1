import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-color',
  standalone: true,
  imports: [],
  templateUrl: './button-color.component.html',
  styles: ``
})
export class ButtonColorComponent {
  @Input() title !: string;
  @Input() color !: string;
  


}
