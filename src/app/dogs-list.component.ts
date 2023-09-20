import { DogsService } from './dogs.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsListCardComponent } from './dogs-list-card.component';

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [CommonModule,DogsListCardComponent],
  template: `
<section class="hero-section">
  <h2 class="hero-text">Discover pets</h2>
  <article class="pet-list">
    <app-dogs-list-card *ngFor="let dog of dogsService.dogs; let i = index" [index] = "i" [dog]="dog"></app-dogs-list-card>
  </article>
</section>
  `,
  styles: [`

  .pet-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px;
  }

  .hero-text {
    font-size: 25pt;
    padding: 10px;
  }
  `]
})
export class DogsListComponent {
constructor (readonly dogsService:DogsService){

}

}
