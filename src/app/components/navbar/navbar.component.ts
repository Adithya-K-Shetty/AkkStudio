import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('navbaranimmenu') navbarAnimmenu!: ElementRef;

  menuItems = [
    '< Intro />',
    '< Games />',
    '< Release />',
    '< Say Hi />',
    '< Connect />',
  ];
  selectedMenuItem!: string;
  audio = new Audio();
  audioOn = false;

  ngOnInit(): void {
    this.selectedMenuItem = this.menuItems[0];
    this.audio.src = '../../../assets/Audio/piano.mp3';
    this.audio.load();
  }

  ngAfterViewInit(): void {
    if (this.navbarAnimmenu) {
      this.selectItem(this.menuItems[0]);
    }
  }

  selectItem(item: string): void {
    console.log(item);
    this.selectedMenuItem = item;
    if (this.navbarAnimmenu) {
      setTimeout(() => {
        const activeItem =
          this.navbarAnimmenu.nativeElement.querySelector('.active');

        const itemPosLeft = activeItem ? activeItem.offsetLeft : 0;
        const itemWidth = activeItem ? activeItem.offsetWidth : 0;

        const horiSelector =
          this.navbarAnimmenu.nativeElement.querySelector('.hori-selector');

        if (horiSelector) {
          horiSelector.style.left = itemPosLeft + 'px';
          horiSelector.style.width = itemWidth + 'px';
        }
      });
    }
  }

  playPauseAudio() {
    this.audioOn = !this.audioOn;
    console.log(this.audioOn);
    if (this.audioOn) {
      this.audio.play();
    } else {
      console.log('pause audio');
      this.audio.pause();
    }
  }
}
