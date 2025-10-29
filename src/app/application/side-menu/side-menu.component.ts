import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Flag, Home, Info, LucideAngularModule, UserCheck, ChevronLeft, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  collapsed = false;

  ChevronLeft = ChevronLeft;
  ChevronRight = ChevronRight;

  
  pages = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'About', path: '/about', icon: Info },
    { label: 'Drivers', path: '/drivers', icon: UserCheck },
    { label: 'Circuits', path: '/circuits', icon: Flag }
  ];
  toggleMenu() {
    this.collapsed = !this.collapsed;
  }
}
