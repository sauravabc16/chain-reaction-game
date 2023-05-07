import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ServerCreationComponent } from './components/server-creation/server-creation.component';
import { ServerListComponent } from './components/server-list/server-list.component';
import { PlayerSetupComponent } from './components/player-setup/player-setup.component';
import { GameComponent } from './components/game/game.component';
import { EndGameComponent } from './components/end-game/end-game.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'server-creation', component: ServerCreationComponent },
  { path: 'server-list', component: ServerListComponent },
  { path: 'player-setup', component: PlayerSetupComponent },
  { path: 'game', component: GameComponent },
  { path: 'end-game', component: EndGameComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: RouterModule })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
