import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  renderer: Renderer2;
  themes = ['theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6', 'theme7']
  today = new Date();

  
  constructor(private rendererfactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {

    this.renderer = this.rendererfactory.createRenderer(null, null);
  
  }

  enableTheme() {

    this.renderer.addClass(this.document.body, this.themes[this.today.getDay()]);
  
  }
}
