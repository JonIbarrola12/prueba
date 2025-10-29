import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { }
