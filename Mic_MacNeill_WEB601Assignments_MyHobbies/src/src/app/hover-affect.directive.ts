import { Directive, ElementRef, HostListener, Input, Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface'; 
@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input('appHoverAffect') hoverStyle: any;
  initialFontWeight: any;

   constructor(private el: ElementRef) {
    this.initialStyles = this.el.nativeElement.style.fontWeight;
    this.initialFontWeight = this.el.nativeElement.style.fontWeight;
  } 


  // Cache the initial font weight and text decoration styles
private initialStyles: { fontWeight: string, textDecoration: string };

ngOnInit() {
  // Get the initial font weight and text decoration styles
  /* this.initialStyles = {
    fontWeight: this.el.nativeElement.style.fontWeight,
    textDecoration: this.el.nativeElement.style.textDecoration
  }; */
  // Get the list of tags from the hoverStyle property
  const tags = this.el.nativeElement[this.hoverStyle] as string[];
  // If there are tags, loop through them and cache the DOM elements with the tag class
  if (tags) {
    tags.forEach(tag => {
      const tagElement = this.el.nativeElement.querySelector(`.${tag}`);
      if (tagElement) {
        tagElement.dataset.initialFontWeight = tagElement.style.fontWeight;
      }
    });
  }
}

// Remove the highlight styles on the host element and tag elements when the mouse leaves
@HostListener('mouseenter') startHover() {
  this.hover(this.hoverStyle);
}

@HostListener('mouseleave') endHover() {
  this.el.nativeElement.style.fontWeight = this.initialFontWeight;
  this.el.nativeElement.style.textDecoration = 'none';
  const tags = this.el.nativeElement[this.hoverStyle] as string[];
  if (tags) {
    tags.forEach(tag => {
      const tagElement = this.el.nativeElement.querySelector(`.${tag}`);
      if (tagElement) {
        tagElement.style.fontWeight = tagElement.dataset.initialFontWeight;
      }
    });
  }
}

private hover(style: any) {
  for (const key in style) {
    if (style.hasOwnProperty(key)) {
      this.el.nativeElement.style[key] = style[key];
    }
  }
  const tags = this.el.nativeElement[this.hoverStyle] as string[];
  if (tags) {
    tags.forEach(tag => {
      const tagElement = this.el.nativeElement.querySelector(`.${tag}`);
      if (tagElement) {
        tagElement.dataset.initialFontWeight = tagElement.style.fontWeight;
        tagElement.style.fontWeight = '100';
      }
    });
  }
}
}
