import { Component, Input, ElementRef, SimpleChanges, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-svg',
  standalone: false,
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.css'
})
export class SvgComponent {
  @Input() svgFile: string = ''; // Path to the SVG file
  @Input() bgColor: string = 'transparent'; // Background color
  @Input() svgSize: number = 50; // Width & height of the SVG
  @Input() svgColor: string = 'black'; // SVG color
  @Input() fill:boolean = true;

  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['svgColor'] || changes['svgFile']) {
      this.loadSVG();
    }
  }

  private loadSVG(): void {
    fetch(this.svgFile)
      .then(response => response.text())
      .then(svgContent => {
        const container = this.el.nativeElement.querySelector('.svg-container');
        if(this.fill) svgContent = svgContent.replace(/fill="[^"]*"/g, `fill="${this.svgColor}"`)
        container.innerHTML = svgContent;
        const svgElement = container.querySelector('svg');
        if (svgElement) {
          this.renderer.setStyle(svgElement, 'width', `${this.svgSize}px`);
          this.renderer.setStyle(svgElement, 'height', `${this.svgSize}px`);
          if(!this.fill)this.renderer.setAttribute(svgElement, 'fill' , `${this.svgColor}`)
        }
      })
      .catch(error => console.error('Error loading SVG:', error));
  }
}
