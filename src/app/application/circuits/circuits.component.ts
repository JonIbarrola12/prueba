import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-circuits',
  standalone: true,
  imports: [],
  templateUrl: './circuits.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircuitsComponent { }
