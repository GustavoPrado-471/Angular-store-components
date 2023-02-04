import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighline]'
})
export class HighlineDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = 'white';
  }

  constructor(
    private element: ElementRef
  ) {
    // En esta parte vamos a tomar nuestro Elemento de HTML nativo y manipulamos el DOM con JS plano
    // this.element.nativeElement.style.backgroundColor = 'red';
  }

}
