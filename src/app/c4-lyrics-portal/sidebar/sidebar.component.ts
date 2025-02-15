import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouteService } from 'src/app/shared/services/route.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private routeService: RouteService) { }

  ngOnInit(): void {
    this.items = [
        {
            label: 'Lyric Formatter',
            icon: 'pi pi-pw pi-file',
            routerLink: '/c4-portal/dashboard',
            styleClass: this.routeService.startsWith('c4-portal/dashboard') ? 'active' : ''
        },
        {
            label: 'Presets',
            icon: 'pi pi-fw pi-book',
            routerLink: '/admin-portal/dashboard',
            styleClass: this.routeService.startsWith('admin-portal/dashboard') ? 'active' : ''
        },
        {
          label: 'Labels',
          icon: 'pi pi-fw pi-pencil',
          routerLink: '/admin-portal/dashboard',
          styleClass: this.routeService.startsWith('admin-portal/dashboard') ? 'active' : ''
        },
    ];
  }

 

}
