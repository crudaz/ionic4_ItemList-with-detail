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

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get(`https://randomuser.me/api/?results=20&page=${this.page}`)
      .subscribe(res => {
        console.log(res);
        this.users = this.users.concat(res['results']);
      });
  }

}
