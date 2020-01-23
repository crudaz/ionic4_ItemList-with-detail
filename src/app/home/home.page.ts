import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users = [];
  page: 0;
  itemsPage = 20;

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  loadUsers(event?) {
    this.http.get(`https://randomuser.me/api/?results=${this.itemsPage}&page=${this.page}`)
      .subscribe(res => {
        this.users = this.users.concat(res['results']);
      });

      if(event) {
        event.target.complete();
      }
  }

  loadData(event) {
    this.page++;
    this.loadUsers(event);
  }

}
