import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PrchrequestService } from '../prchrequest.service';
import { Prchrequest } from '../prchrequest.class';

@Component({
  selector: 'app-prchrequest-review-detail',
  templateUrl: './prchrequest-review-detail.component.html',
  styleUrls: ['./prchrequest-review-detail.component.css']
})
export class PrchrequestReviewDetailComponent implements OnInit {

  prchrequest: Prchrequest

  delete(): void {
    this.prchrequestsvc.remove(this.prchrequest)
    .subscribe(resp => {
      console.log("resp:", resp);
      this.router.navigateByUrl('/prchrequests/list');
    });
  }

  constructor(
     private prchrequestsvc: PrchrequestService,
     private route: ActivatedRoute,
     private router: Router
     ) { }

  ngOnInit() {
    //gets the :id from the route
    let id = this.route.snapshot.params.id;
    // get the user from the user service
    this.prchrequestsvc.get(id)
    .subscribe(resp => {
      console.log("resp", resp);
      this.prchrequest = resp.data;
    });
  }

}