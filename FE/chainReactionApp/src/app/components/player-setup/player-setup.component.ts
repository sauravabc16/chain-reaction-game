import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'player-setup',
  templateUrl: './player-setup.component.html',
  styleUrls: ['./player-setup.component.scss'],
})
export class PlayerSetupComponent implements OnInit {
  server: any;
  playerName = '';
  selectedColor = '';
  colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const serverId = parseInt(params.get('id')?? '0', 10);
      // Replace with a call to the backend to get the server information
      this.server = {
        id: serverId,
        name: 'Game 1',
        admin: 'Alice',
        players: 3,
        maxPlayers: 6,
      };
    });
  }

  ngOnInit() { }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  joinGame() {
    // Implement the logic to join the game server with playerName and selectedColor
    console.log('Joining game:', this.server, this.playerName, this.selectedColor);
  }
}
