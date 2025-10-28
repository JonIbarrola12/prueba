import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [],
  templateUrl: './drivers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriversComponent { }
