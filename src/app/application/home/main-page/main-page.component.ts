import { Component } from '@angular/core';
import { NewsComponent } from "../../news/news.component";

@Component({
  selector: 'app-home-main-page',
  templateUrl: 'main-page.component.html',
  imports: [NewsComponent]
})

export class MainPageComponent{
}
