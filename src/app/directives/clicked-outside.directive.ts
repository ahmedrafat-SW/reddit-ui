import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickedOutside]'
})
export class ClickedOutsideDirective {

  @Output() clickedOutside = new EventEmitter();

  constructor(private element: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  onClicked(target: any):void {
    const clickedInside = this.element.nativeElement.contains(target);

    if(! clickedInside){
      this.clickedOutside.emit(target);
    }

  }



}
