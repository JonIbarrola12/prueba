import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { SideMenuComponent } from "./side-menu/side-menu.component";

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './application.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationComponent { }
