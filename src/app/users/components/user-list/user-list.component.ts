import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';

// rxjs
import { EMPTY, Observable, catchError } from 'rxjs';

import type { UserModel } from './../../models/user.model';
import { UserArrayService } from './../../services/user-array.service';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$!: Observable<Array<UserModel>>;

  constructor(
    private userArrayService: UserArrayService,
  ) { }

  ngOnInit(): void {
    this.users$ = this.userArrayService.users$
      .pipe(
        catchError(err => {
          console.log(err);
          return EMPTY;
        })
      );
  }

  trackByFn(index: number, user: UserModel): number | null {
    return user.id;
  }
}
