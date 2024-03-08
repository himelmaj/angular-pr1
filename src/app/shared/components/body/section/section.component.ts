import { Component } from '@angular/core';
import { Character } from '../../../interfaces/Character';
@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styles: ``,
})
export class SectionComponent {
  characters: Character[] = [
    {
      id: 'finn',
      name: 'Finn',
      img: '/assets/finn.webp',
      description: 'Finn el Humano',
      bg: 'bg-blue-500',
    },
    {
      id: 'jake',
      name: 'Jake',
      img: '/assets/jake.webp',
      description: 'Jake el Perro',
      bg: 'bg-yellow-500',
    },
    {
      id: 'marceline',
      name: 'Marceline',
      img: '/assets/marceline.webp',
      description: 'Marceline la Vampira',
      bg: 'bg-red-500',
    },
  ];
}
