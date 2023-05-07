import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss'],
})
export class ServerListComponent implements OnInit {
  servers = [
    {
      id: 1,
      name: 'Game 1',
      admin: 'Alice',
      players: 3,
      maxPlayers: 6
    },
    {
      id: 2,
      name: 'Game 2',
      admin: 'Bob',
      players: 2,
      maxPlayers: 4
    },
    {
      id: 134,
      name: 'best',
      admin: 'Parul',
      players: 4,
      maxPlayers: 7
    }
  ];

  constructor() { }

  ngOnInit() { }
}
