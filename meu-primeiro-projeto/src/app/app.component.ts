import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public destruir: boolean = true;

  constructor () {

  }

  ngOnInit(): void {

    setTimeout(() => {
      console.log(1);
    }, 5000)
  }

  public destruirComponent(): boolean {
    return this.destruir = false;
  }

  title = 'meu-primeiro-projeto';
       
}
