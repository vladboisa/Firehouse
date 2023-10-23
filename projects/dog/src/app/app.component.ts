import { DogsListComponent } from './dogs-list.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
            <nav>
              <div>
                <img class="logo" src="assets/dog-walker-logo.svg">
                <a href="/list">List</a>
              </div>
            </nav>
  `,
  styles: [`
      nav {
        display: flex;
        justify-content: space-between;
        margin: 20px 10px 10px 10px;
      }

      nav div.menu-items {
        display: flex;
        width: 10%;
        justify-content: space-between;
      }
      nav > div {
        display: flex;
      }
      .title {
        font-size: 25pt;
      }
      .logo {
        height: 40px;
        cursor: pointer;
      }
    `],
})
export class AppDogComponent {
  title = 'walk-my-dog';
}
