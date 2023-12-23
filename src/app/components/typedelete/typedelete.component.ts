import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-typedelete',
  templateUrl: './typedelete.component.html',
  styleUrls: ['./typedelete.component.css'],
})
export class TypedeleteComponent implements OnInit, AfterViewInit {
  @ViewChild('textElement') textElement!: ElementRef;
  @ViewChild('blinkElement') blinkElement!: ElementRef;

  @Input() wordArray: string[] = [
    'Welcome To Akk Studio',
    'We Build 🎮',
    'And Ship 😊',
  ];
  @Input() textColor = '#FDFEFF ';
  @Input() fontSize = '5rem';
  @Input() blinkWidth = '2px';
  @Input() typingSpeedMilliseconds = 200;
  @Input() deleteSpeedMilliseconds = 200;

  private i = 0;

  requiredTextStyles = {
    color: this.textColor,
    'font-size': this.fontSize,
    'border-right-color': this.textColor,
    padding: '0.1em',
  };

  requiredBlinkStyles = {
    color: this.textColor,
    'font-size': this.fontSize,
    'border-right-color': this.textColor,
  };

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initVariables();
    this.typingEffect();
  }

  private initVariables(): void {
    let property: keyof typeof this.requiredTextStyles;
    for (property in this.requiredTextStyles) {
      this.renderer.setStyle(
        this.textElement.nativeElement,
        property,
        this.requiredTextStyles[property]
      );
    }

    // let blinkProperty: keyof typeof this.requiredBlinkStyles;
    // for (blinkProperty in this.requiredBlinkStyles) {
    //   this.renderer.setStyle(
    //     this.blinkElement.nativeElement,
    //     blinkProperty,
    //     this.requiredTextStyles[blinkProperty]
    //   );
    // }

    // this.renderer.setStyle(
    //   this.blinkElement.nativeElement,
    //   'border-right-width',
    //   this.blinkWidth
    // );
    // this.renderer.setStyle(
    //   this.blinkElement.nativeElement,
    //   'border-right-color',
    //   this.textColor
    // );
    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      'font-size',
      this.fontSize
    );
  }

  private typingEffect(): void {
    const word = this.wordArray[this.i].split('');
    const loopTyping = () => {
      if (word.length > 0) {
        this.textElement.nativeElement.innerHTML += word.shift();
      } else {
        //this.i = this.wordArray.length > this.i + 1 ? this.i++ : 0;
        this.deletingEffect();
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
  }

  private deletingEffect(): void {
    const word = this.wordArray[this.i].split('');
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        this.textElement.nativeElement.innerHTML = word.join('');
      } else {
        if (this.i >= 2) {
          this.i = 0;
          this.wordArray = [
            'You Can...',
            'Write Anything You want...',
            'SBZ 🍻 Enjoy 🍸🍻🍺🍷🍹',
          ];
        } else {
          this.i += 1;
        }
        this.typingEffect();
        return;
      }
      setTimeout(loopDeleting, this.deleteSpeedMilliseconds);
    };
    loopDeleting();
  }
}
