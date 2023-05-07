import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { GameService } from './services/game/game.service';
import { PlayerService } from './services/player/player.service';
import { ServerService } from './services/server/server.service';
import { TimerService } from './services/timer/timer.service';
import { WebSocketService } from './services/web-socket/web-socket.service';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GameService,
    PlayerService,
    ServerService,
    TimerService,
    WebSocketService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
