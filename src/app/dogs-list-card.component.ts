
import { DogsService } from './dogs.service';
import { Dog } from './dogs.service';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dogs-list-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <article class="pet-card">
    <p class="pet-headline">Meet <span class="pet-name">{{dog.name}}</span></p>
    <p class="pet-description">
      <span class="pet-name">{{dog.ownerName}}</span> wants you to know this about {{dog.name}}:
      {{dog.description}}
    </p>
    <!-- <p class="pet-learn-more"><a href="/details/{{index}}">Learn More</a></p> -->
</article>
    </ul>
  `,
  styles: [
  ]
})
export class DogsListCardComponent {
@Input() dog!: Dog;
constructor (readonly dogsService:DogsService){

}
}
