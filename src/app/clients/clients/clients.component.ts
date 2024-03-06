import { Component, OnInit } from '@angular/core';

import { Client } from '../model/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})

export class ClientsComponent implements OnInit{

  clients: Client[] = [
    { id:'1', fist_name: 'Alex', last_name: 'Rocha' }
  ];
  displayedColumns = [ 'id','fist_name','last_name' ];

  constructor() {
   }

  ngOnInit(): void {

  }

}
