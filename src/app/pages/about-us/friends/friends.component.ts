import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  friends = [
    {
      name: 'Vlad',
      id: 1,
    },
    {
      name: 'Vitalii',
      id: 2,
    },
    {
      name: 'Taras',
      id: 3,
    },
    {
      name: 'Arthem',
      id: 4,
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goToMap() {
    this.router.navigate(['../../map'], { relativeTo: this.route});
  }
}
