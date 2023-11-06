import { Directive, ElementRef , HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) { 
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }
  //LES METHODES
   private setHeight(height: number)
  {
this.el.nativeElement.style.Height= height + 'px';
  }
 private  setBorder(color: string)
  {
    let border=' solid 4 px' + color;
this.el.nativeElement.style.border= border;
  }
  //Input
  @Input ('pkmnBorderCard')borderColor: string;
  //les HostListener
  @HostListener('mouseenter') onMouseEnter()
  {
    this.setBorder(this.borderColor ||  '#009688');
  }
  @HostListener('mouseleave') onMouseLeave()
  {
    this.setBorder('#f5f5f5');
  }





}
