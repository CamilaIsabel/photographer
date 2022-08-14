import { Component } from '@angular/core';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  photos: any[] = [
  {
    src: '/assets/pictures/portfolioimg1.png',
    alt: 'Black jeans'
  },
  {
    src: '/assets/pictures/portfolioimg2.png',
    alt: 'Black jeans'
  },
  {
    src: '/assets/pictures/portfolioimg3.png',
    alt: 'Black jeans'
  },
  {
    src: '/assets/pictures/portfolioimg4.png',
    alt: 'Black jeans'
  },
  {
    src: '/assets/pictures/portfolioimg5.png',
    alt: 'Black jeans'
  },
  {
    src: '/assets/pictures/portfolioimg6.png',
    alt: 'Black jeans'
  },
  {
    src: '/assets/pictures/portfolioimg7.png',
    alt: 'Black jeans'
  },
  {
    src: '/assets/pictures/portfolioimg8.png',
    alt: 'Black jeans'
  }
 

];

}

