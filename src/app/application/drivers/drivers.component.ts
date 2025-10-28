import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [],
  templateUrl: './drivers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriversComponent { 
  drivers = [
    { id: 1, name: '' },
    { id: 2, name: 'Driver 2' },
    { id: 3, name: 'Driver 3' },
  ]
}
