import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
})
export class DetailsPage {
  data: any;

  constructor(private router: Router) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state;
    }
  }

}
