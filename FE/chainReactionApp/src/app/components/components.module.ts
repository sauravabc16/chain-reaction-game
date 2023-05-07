import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServerCreationComponent } from './server-creation/server-creation.component';
import { ServerListComponent } from './server-list/server-list.component';
import { PlayerSetupComponent } from './player-setup/player-setup.component';
import { GameComponent } from './game/game.component';
import { EndGameComponent } from './end-game/end-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ServerCreationComponent,
    ServerListComponent,
    PlayerSetupComponent,
    GameComponent,
    EndGameComponent,
  ],
  imports: [CommonModule, IonicModule, RouterModule, ReactiveFormsModule, FormsModule ],
  exports: [
    HomeComponent,
    ServerCreationComponent,
    ServerListComponent,
    PlayerSetupComponent,
    GameComponent,
    EndGameComponent,
  ],
})
export class ComponentsModule {}
