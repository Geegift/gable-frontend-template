import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  routing(page: string): void {
    switch (page) {
      case 'form':
        this.router.navigate(['/form'], {});
        break;

      default:
        break;
    }
  }
}
