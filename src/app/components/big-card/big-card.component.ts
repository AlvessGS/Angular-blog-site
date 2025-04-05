import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: false,
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string="https://cdn2.unrealengine.com/01-1920x1080-1920x1080-88255a697e4f.jpg"
  @Input()
  cardTitle:string=""
  @Input()
  cardDescription:string=""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void{
  }
}
