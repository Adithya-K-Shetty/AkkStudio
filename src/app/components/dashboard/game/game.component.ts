import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  gameData = [
    {
      gameName: 'Space Defender',
      gameThumbnail: '../../../../assets/Image/game1.png',
    },
    {
      gameName: 'Delivery Rush',
      gameThumbnail: '../../../../assets/Image/game2.png',
    },
    {
      gameName: 'Murder Mystery',
      gameThumbnail: '../../../../assets/Image/game3.png',
    },
    {
      gameName: 'Gdsc Game',
      gameThumbnail: '../../../../assets/Image/game4.png',
    },
    {
      gameName: 'The Last Vacation',
      gameThumbnail: '../../../../assets/Image/game5.png',
    },
    {
      gameName: 'Sign Sensei',
      gameThumbnail: '../../../../assets/Image/game6.png',
    },
    {
      gameName: 'The Last Light',
      gameThumbnail: '../../../../assets/Image/game7.png',
    },
  ];
}
