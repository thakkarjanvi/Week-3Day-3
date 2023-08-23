import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  name: string = 'Janvi Thakkar'
  color: string = 'Yellow';
  colors: string ='White'

  changeColor() {
    
    this.color = 'Red';

    // const randomColor = this.getRandomColor();
    // this.color = randomColor;
  }

  randomColor(){
    const randomColor = this.getRandomColor();
    this.colors = randomColor;
  }
  private getRandomColor() {
  
    const letters = '0123456789ABCDEF';
    let colors = '#';
    for (let i = 0; i < 6; i++) {
      colors += letters[Math.floor(Math.random() * 16)];
    }
    return colors;
}
}
