import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { Dog, DogsService } from './dogs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dog-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      dog-view works!
    </p>
  `,
  styles: [
  ]
})
export class DogViewComponent {

dog$: Observable<Dog | undefined>
constructor (private dogsService: DogsService, private route: ActivatedRoute) {
}
ngOnInit():void {
  this.dog$ = this.route.paramMap.pipe(map())
}
}
