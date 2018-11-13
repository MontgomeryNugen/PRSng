import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LineItemService } from '../lineitem.service';
import { LineItem } from '../lineitem.class';
import { PrchrequestService } from '../../prchrequest/prchrequest.service';
import { Prchrequest } from '../../prchrequest/prchrequest.class';

@Component({
  selector: 'app-lineitem-list',
  templateUrl: './lineitem-list.component.html',
  styleUrls: ['./lineitem-list.component.css']
})

export class LineitemListComponent implements OnInit {

  lineitems: LineItem[];
  prchrequest: Prchrequest;
  constructor(
    private linesvc: LineItemService,
    private prsvc: PrchrequestService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.linesvc.getPrli(id)
    .subscribe(resp => {
      console.log("Line Items: ", resp);
      this.lineitems = resp.data;
    });
    this.prsvc.get(id)
    .subscribe(resp => {
      console.log("Requests: ", resp);
      this.prchrequest = resp.data;
    })
  }

}
