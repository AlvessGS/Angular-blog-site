import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: false,
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  
  @Input()
  photoCover:string="https://i.ytimg.com/vi_webp/XSuj5KD17Xs/maxresdefault.webp"
  
  @Input()
  cardTitle:string="Nova Atualização!"
  constructor() { }

  ngOnInit(): void {
    
  }

}
