import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBoldAndColour]'
})
export class BoldAndColourDirective implements OnInit {
  @Input('appBoldAndColour')
  color: string;

  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.elementRef.nativeElement.style.fontSize = '25px';
  }

  ngOnInit(): void{
    this.elementRef.nativeElement.style.backgroundColor = this.color
  }
}
