import { RouterModule } from '@angular/router';

import { DogsService } from './dogs.service';
import { Dog } from './dogs.service';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dogs-list-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="pet-card">
      <img
        class="pet-img"
        src="{{ dog.photoUrl }}"
        alt="Photo of {{ dog.name }}"
      />
      <p class="pet-headline">
        Meet <span class="pet-name">{{ dog.name }}</span>
      </p>
      <p class="pet-description">
        <span class="pet-name">{{ dog.ownerName }}</span> wants you to know this
        about {{ dog.name }}:
        {{ dog.description }}
      </p>
      <p class="pet-learn-more"><a href="details/{{ index }}">Learn More</a></p>
    </article>
  `,
  styles: [
    `
      .pet-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 10px;
        box-shadow: rgb(0 0 0 / 16%) 0px 10px 36px 0px,
          rgb(0 0 0 / 6%) 0px 0px 0px 1px;
        width: 300px;
        height: 100%;
      }

      .pet-img {
        border-radius: 10px 10px 0 0;
        aspect-ratio: 1;
        object-fit: fill;
      }

      .pet-name {
        font-weight: bolder;
      }

      .pet-description,
      .pet-headline,
      .pet-learn-more {
        padding: 10px;
      }

      .pet-headline {
        font-size: 18pt;
      }
    `,
  ],
})
export class DogsListCardComponent {
  @Input() dog!: Dog;
  @Input() index!: Number;
  constructor() {}
}
