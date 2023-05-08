import { Component, OnInit } from '@angular/core';
interface Cell {
  count: number;
  owner: number | null;
  color: string | null;
}
interface Player {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  gameName = 'Game 1';
  currentPlayer: number = 0;
  players = [
    { id: 1, name: 'Player 1', color: 'red', icon: 'person', score: 0 },
    { id: 2, name: 'Player 2', color: 'blue', icon: 'person', score: 0 },
  ];

  gameBoard: Cell[][] = Array.from({ length: 8 }, () =>
  Array.from({ length: 8 }, () => ({ count: 0, owner: null, color: null }))
);

  constructor() {}

  ngOnInit() {}

  placeMolecule(x: number, y: number): void {
    if (this.gameBoard[x][y].owner === null || this.gameBoard[x][y].owner === this.currentPlayer) {
      this.gameBoard[x][y].count++;
      this.gameBoard[x][y].owner = this.currentPlayer;
      this.gameBoard[x][y].color = this.players[this.currentPlayer].color;
  
      if (this.gameBoard[x][y].count >= this.maxCount(x, y)) {
        this.gameBoard[x][y].count = 0;
        this.gameBoard[x][y].owner = null;
        this.gameBoard[x][y].color = null;
        this.triggerChainReaction(x, y, this.currentPlayer, this.players[this.currentPlayer].color);
      }
  
      this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
    }
  }
  
  triggerChainReaction(x: number, y: number, player: number, color: string): void {
    const adjacentCells = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ];
  
    for (const [adjX, adjY] of adjacentCells) {
      if (adjX >= 0 && adjX < 8 && adjY >= 0 && adjY < 8) {
        this.gameBoard[adjX][adjY].count++;
        this.gameBoard[adjX][adjY].owner = player;
        this.gameBoard[adjX][adjY].color = color;
  
        if (this.gameBoard[adjX][adjY].count >= this.maxCount(adjX, adjY)) {
          this.gameBoard[adjX][adjY].count = 0;
          this.gameBoard[adjX][adjY].owner = null;
          this.gameBoard[adjX][adjY].color = null;
          this.triggerChainReaction(adjX, adjY, player, color);
        }
      }
    }
  }

  exitGame() {
    // Implement exit game logic here
  }
  maxCount(x: number, y: number): number {
    if ((x === 0 || x === 7) && (y === 0 || y === 7)) {
      return 2;
    } else if (x === 0 || x === 7 || y === 0 || y === 7) {
      return 3;
    } else {
      return 4;
    }
  }
}
