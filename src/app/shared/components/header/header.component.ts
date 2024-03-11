import { Component } from '@angular/core';
import { ButtonColorComponent } from '../buttons/button-color/button-color.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from '../body/section/section.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ ButtonColorComponent, NavbarComponent, SectionComponent ],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  sectionColor: string = 'bg-violet-500';

  changeColor(color: string) {
    this.sectionColor = color;
  }
  
}
