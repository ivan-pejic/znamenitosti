import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Status } from './enum/status.enum';
import { Znamenitost } from './interface/znamenitost';
import { ZnamenitostiService } from './service/znamenitost.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'znamenitostimanagerapp';
  public znamenitosti: Znamenitost[];
  public editZnamenitost!: Znamenitost;
  public deleteZnamenitost!: Znamenitost;
  readonly Status = Status;

  constructor(private znamenitostService: ZnamenitostiService){this.znamenitosti = []}

  ngOnInit(){
    this.getZnamenitosti();
  }
    public getZnamenitosti(): void {
      this.znamenitostService.getZnamenitosti().subscribe({
        next: (response: Znamenitost[]) => {
        this.znamenitosti = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }}
      );
    }

    public onOpenModal(znamenitost: Znamenitost, mode: string): void {
      if (mode==='edit')
        this.editZnamenitost = znamenitost;
      else if (mode==='delete')
        this.deleteZnamenitost = znamenitost;
    }

    public onUpdateZnamenitost(znamenitost: Znamenitost): void {
      console.log(znamenitost.id);
      this.znamenitostService.updateZnamenitost(znamenitost).subscribe({
        next: (response: Znamenitost) => {
          document.getElementById('update-znamenitost-form')?.click();
          this.getZnamenitosti();
          //updateForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          //updateForm.reset();
        }
    });
    }

    //CORS BLOKIRA DELETE (?)

    public onDeleteZnamenitost(znamenitostId: number): void {
      console.log(znamenitostId);
      this.znamenitostService.deleteZnamenitost(znamenitostId).subscribe({
        next: (response: void) => {
          this.getZnamenitosti();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
    });
    }
    
    public onAddZnamenitost(addForm: NgForm): void {
    this.znamenitostService.addZnamenitost(addForm.value).subscribe({
      next: (response: Znamenitost) => {
        document.getElementById('add-znamenitost-form')?.click();
        this.getZnamenitosti();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    });
  }

  public searchZnamenitosti(key: string): void {
    const results: Znamenitost[] = [];
    for (const znamenitost of this.znamenitosti) {
      if (znamenitost.naziv.toLocaleLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(znamenitost);
      }
    }
    this.znamenitosti = results;
    if (!key){
      this.getZnamenitosti();
    }
  }

  public filterZnamenitosti (status: Status): void {
    if (status === Status.ALL) {
      this.getZnamenitosti();
    }
    else if (status === Status.ZNAMENITOST_UP || status === Status.ZNAMENITOST_DOWN) {
    const results: Znamenitost[] = [];
    for (const znamenitost of this.znamenitosti) {
      if (znamenitost.status === status) {
        results.push(znamenitost);
      }
    }
    this.znamenitosti = results;
    }
  }
}
