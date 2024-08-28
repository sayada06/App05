import { DetailPage } from './../detail/detail.page';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail: NavController) {}

    items=[
      {
        id: 1,
        name:' นูเทล่า ฝอยทอง โกโก้ครั้น เยลลี่',
        price: 45,
        detail:'เมนูนี้อร่อยมากกกกกกกก!!',
        ImageURL:'../../assets/pic/product/1.1.jpg'
      },
      {
        id: 2,
        name:'เครปกรอบวิปครีม สตอสด',
        price: 69,
        detail:'ผู้ใหญ่กินได้เด็กกินดี อร่อยสุดๆ',
        ImageURL:'../../assets/pic/product/2.2.jpg'
      },
      {
        id: 3,
        name:'ไข่ไก่ ลูกเกด เม็ดสี เยลลี่',
        price: 45,
        detail:'เด็กๆชอบม๊ากกกกกกกกกก',
        ImageURL:'../../assets/pic/product/3.3.jpg'
      },
      {
        id: 4,
        name:'เครปกรอบวิปครีม โอริโอ้ ไมโล',
        price: 59,
        detail:'สายดาาร์กต้องลอง อร่อยสุดๆ',
        ImageURL:'../../assets/pic/product/4.4.jpg'
      }
  ]

  gotodetail(i:any){
    this.detail.navigateForward('/detail',{state:{i}})
  }

}
