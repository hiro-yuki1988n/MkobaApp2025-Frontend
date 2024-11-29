import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'] // Changed from `styleUrl` to `styleUrls`
})
export class SidebarComponent {

  // Input property to determine if the sidebar is collapsed
  @Input() isLeftSidebarCollapsed!: boolean;

  // Output property to notify parent component about sidebar state changes
  @Output() changeIsLeftSidebarCollapsed = new EventEmitter<boolean>();

  // List of navigation items
  items = [
    {
      routeLink: 'dashboard',
      icon: 'fal fa-home',
      label: 'Home'
    },
    {
      routeLink: 'loans',  // Changed from RouterLink to routeLink
      icon: 'fa-solid fa-money-check-dollar',
      label: 'Loans'
    },
    {
      routeLink: 'shares', // Changed from RouterLink to routeLink
      icon: 'fa-regular fa-newspaper',
      label: 'Shares'
    },
    {
      routeLink: 'contributions', // Changed from RouterLink to routeLink
      icon: 'fa-solid fa-circle-dollar-to-slot',
      label: 'Contributions'
    },
    {
      routeLink: 'community-fund', // Changed from RouterLink to routeLink
      icon: 'fa-solid fa-hand-holding-dollar',
      label: 'Community Fund'
    },
    {
      routeLink: 'settings', // Updated route to match `settings`
      icon: 'fal fa-cog',
      label: 'Settings'
    }
  ];

  // Toggle the collapsed state of the sidebar
  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed);
  }

  // Close the sidebar
  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
