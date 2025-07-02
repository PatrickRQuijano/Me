import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})

export class Resume implements AfterViewInit {
  @ViewChild('resumeWindow') resumeWindow!: ElementRef;

  ngAfterViewInit(): void {
    this.animateOnScroll();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.animateOnScroll();
  }

  animateOnScroll() {
    if (!this.resumeWindow) return;

    const top = this.resumeWindow.nativeElement.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.9) {
      this.resumeWindow.nativeElement.classList.add('in-view');
    }
  }
}