import { Component } from '@angular/core';
import { F1NewsComponent } from "../f1News/f1News.component";

@Component({
  selector: 'app-home-main-page',
  standalone: true,
  templateUrl: 'main-page.component.html',
  imports: [F1NewsComponent]
})

export class MainPageComponent{
}
