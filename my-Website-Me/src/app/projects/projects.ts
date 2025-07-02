import { Component, ElementRef, ViewChild, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Github } from '../services/github'; // adjust path as needed

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {

  githubUsername = 'PatrickRQuijano';
  githubrepos:  any[] = [];

  // Only show repos matching these names
  includedRepoNames: string[] = ['Me', 'MrFocus'];
  projectImages: Record<string, string> = {
    'MrFocus': '/mrfocus.PNG',
    // will update and add more here...
  };  

  constructor(private Github: Github){

  }

  ngOnInit(): void {
    this.Github.getRepos(this.githubUsername).subscribe((repos) => {
      // Filter for only those repos in the includedRepoNames list
      this.githubrepos = repos
        .filter(repo => this.includedRepoNames.includes(repo.name))
        .map(repo => ({ 
          name: repo.name, 
          description: repo.description,
          html_url: repo.html_url, // GitHub link
          imageUrl: this.projectImages[repo.name] || 'assets/images/default-placeholder.png'
        }))
    });
  }

  sliderTransform = 'translateX(0)';
  isAnimating = false;

  scrollLeft() {
    if (this.isAnimating) return;
    this.isAnimating = true;
  
    this.sliderTransform = 'translateX(-260px)';
  
    setTimeout(() => {
      const first = this.githubrepos.shift();
      if (first) this.githubrepos.push(first);
  
      this.sliderTransform = 'translateX(0)';
      this.isAnimating = false;
    }, 500);
  }
  
  scrollRight() {
    if (this.isAnimating) return;
    this.isAnimating = true;
  
    this.sliderTransform = 'translateX(260px)';
  
    setTimeout(() => {
      const last = this.githubrepos.pop();
      if (last) this.githubrepos.unshift(last);
  
      this.sliderTransform = 'translateX(0)';
      this.isAnimating = false;
    }, 500);
  }    

}
