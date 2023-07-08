import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private router:Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: res => console.log(res),
      error: (error:Error) => console.log(error)
    });

    this.activatedRoute.queryParams.subscribe({
      next: res => console.log(res),
      error: (error:Error) => console.log(error)
    });

    setInterval( () => {
      //this.router.navigate(['404']);
      this.router.navigateByUrl('404');
    }, 5000 );

  }




}
