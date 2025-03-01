import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: false,
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {
  @Input() bgColor: string = '#f0f0f0';
  @Input() headerTemplate!: TemplateRef<any>;
  @Input() contentTemplate!: TemplateRef<any>;
  @Input() footerTemplate!: TemplateRef<any>;
}
