import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Znamenitost } from './znamenitost';
import { ZnamenitostiService } from './znamenitost.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'znamenitostimanagerapp';
  public znamenitosti: Znamenitost[];

  constructor(private znamenitostService: ZnamenitostiService){this.znamenitosti = []}

  ngOnInit(){
    this.getZnamenitosti();
  }
    public getZnamenitosti(): void {
      this.znamenitostService.getZnamenitosti().subscribe(
      (response: Znamenitost[]) => {
        this.znamenitosti = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
    }
  
}
