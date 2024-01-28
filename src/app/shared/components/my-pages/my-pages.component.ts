import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-my-pages',
  templateUrl: './my-pages.component.html',
  standalone: true,
  styleUrls: ['./my-pages.component.scss'],
  imports: [MatIconModule, MatTooltipModule],
})
export class MyPagesComponent implements OnInit {
  ngOnInit(): void {}

  readonly items: SocialMediaItem[] = [
    {
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/murilo-rodrigues-b410561a4/',
      tooltip: 'LinkedIn',
    },
    {
      icon: 'instagram',
      link: 'https://www.instagram.com/murilo.rodz/',
      tooltip: 'Instagram',
    },
    {
      icon: 'github',
      link: 'https://github.com/muriloGervasio',
      tooltip: 'GitHub',
    },
  ];
}

interface SocialMediaItem {
  icon: string;
  link: string;
  tooltip: string;
}
