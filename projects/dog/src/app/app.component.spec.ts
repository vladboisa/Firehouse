import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppDogComponent } from './app.component';

describe('AppDogComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppDogComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppDogComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'walk-my-dog'`, () => {
    const fixture = TestBed.createComponent(AppDogComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('walk-my-dog');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppDogComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('walk-my-dog app is running!');
  });
});
