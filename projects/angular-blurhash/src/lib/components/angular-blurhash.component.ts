import { Component, ChangeDetectionStrategy, Input, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { decode } from 'blurhash';

import { FadeIn } from '../animations/fade-int.animation';
import { AnimationState } from '../models/animation-state.enum';

@Component({
  selector: 'angular-blurhash',
  templateUrl: './angular-blurhash.component.html',
  styleUrls: ['./angular-blurhash.component.scss'],
  animations: [FadeIn],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularBlurhashComponent implements AfterViewInit {
  @Input() readonly hash: string;
  @Input() readonly URL: string;
  @Input() readonly width: number;
  @Input() readonly height: number;
  @Input() readonly alt?: string;
  @ViewChild('canvas', { static: false }) readonly canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('img', { static: false }) readonly img: ElementRef<HTMLImageElement>;
  resolve: boolean;
  animationState: AnimationState;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.resolve = false;
  }

  ngAfterViewInit(): void {
    this.createImgInstance();
    this.drawCanvas();
  }

  private createImgInstance(): void {
    const img = new Image();
    img.src = this.URL;
    img.onload = () => this.onLoadImg();
  }

  private onLoadImg(): void {
    [this.resolve, this.animationState] = [true, AnimationState.VISIBLE];
    this.changeDetectorRef.detectChanges();
    this.img.nativeElement.src = this.URL;
    if (this.alt) {
      this.img.nativeElement.alt = this.alt;
    }
  }

  private drawCanvas(): void {
    const pixels = decode(this.hash, this.width, this.height);
    const ctx = this.canvas.nativeElement.getContext('2d');
    const imageData = ctx.createImageData(this.width, this.height);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
  }
}
