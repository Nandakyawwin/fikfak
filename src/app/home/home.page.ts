import { Component } from '@angular/core';
import { DataService } from '../data.service';
import Swiper from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  videoList: any = [];
  swiper!: Swiper;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.videoList = this.data.getVideoList();
    this.swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
    });
  }
  mySwiperOptions = {
    direction: 'vertical', // Set the direction to vertical
  };
}
