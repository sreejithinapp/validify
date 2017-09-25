/*
import {Directive, ElementRef, Input, Output, EventEmitter, OnDestroy} from '@angular/core';

@Directive({
  selector: '[img-fallback]'
})

export class ImgFallbackDirective implements OnDestroy {
  @Input('img-fallback') fallbackUrl: string;
  @Output('img-load-status') loadStatus = new EventEmitter<boolean>();

  private elem: HTMLElement;

  constructor(elem: ElementRef) {
    this.elem = elem.nativeElement;
    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
    this.addEvents();
  }

  private onLoad() {
    this.loadStatus.emit(true);
  }

  private onError() {
    if (this.fallbackUrl && this.elem.getAttribute('src') !== this.fallbackUrl) {
      this.elem.setAttribute('src', this.fallbackUrl);
    }
    this.loadStatus.emit(false);
    this.removeOnLoadEvent();
  }

  private addEvents() {
    this.elem.addEventListener('error', this.onError);
    this.elem.addEventListener('load', this.onLoad);
  }

  private removeErrorEvent() {
    this.elem.removeEventListener('error', this.onError);
  }

  private removeOnLoadEvent() {
    this.elem.removeEventListener('load', this.onLoad);
  }

  ngOnDestroy() {
    this.removeErrorEvent();
    this.removeOnLoadEvent();
  }
}
*/