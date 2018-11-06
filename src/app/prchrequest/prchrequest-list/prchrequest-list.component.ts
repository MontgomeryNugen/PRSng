import { Component, OnInit } from '@angular/core';

import { PrchrequestService } from '../prchrequest.service';
import { Prchrequest } from '../prchrequest.class';

@Component({
  selector: 'app-prchrequest-list',
  templateUrl: './prchrequest-list.component.html',
  styleUrls: ['./prchrequest-list.component.css']
})
export class PrchrequestListComponent implements OnInit {

  prchrequests: Prchrequest[];

  constructor(private prchrequestsvc: PrchrequestService) { }

  ngOnInit() {
    this.prchrequestsvc.list()
    .subscribe(resp => {
      console.log("Purchase Requests:", resp);
      this.prchrequests = resp.data;
    });
  }

}
