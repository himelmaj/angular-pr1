import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  year: number = new Date().getFullYear();
  title: string = 'Himel Majumder';

}
