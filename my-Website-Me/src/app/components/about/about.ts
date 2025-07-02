import {
  Component,
  HostListener,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About implements AfterViewInit {
  @ViewChild('floatingIcon') floatingIcon!: ElementRef;
  imageList: string[] = [
    'photos/1.JPG',
    'photos/2.JPG',
    'photos/3.JPG',
    'photos/4.JPG',
    'photos/5.JPG',
    'photos/6.jpg'
  ];

  ngAfterViewInit(): void {
    this.animateImagesOnScroll();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.animateImagesOnScroll();
    this.followScrollIcon();
  }

  private followScrollIcon() {
    const y = window.scrollY;
    if (this.floatingIcon?.nativeElement) {
      this.floatingIcon.nativeElement.style.transform = `translateY(${y / 8}px)`;
    }
  }

  private animateImagesOnScroll() {
    const wrappers = document.querySelectorAll('.scroll-image-wrapper');
    const triggerBottom = window.innerHeight * 0.85;

    wrappers.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add('in-view');
      }
    });
  }
}
