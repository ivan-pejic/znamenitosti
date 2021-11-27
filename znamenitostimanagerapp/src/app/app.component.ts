import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Status } from './enum/status.enum';
import { Znamenitost } from './interface/znamenitost';
import { ZnamenitostiService } from './service/znamenitost.service';
import { AuthenticationService } from './service/authentication.service';
import { LogInData } from './model/logInData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'znamenitostimanagerapp';
  public znamenitostiAll: Znamenitost[];
  public znamenitostiFiltered: Znamenitost[];
  public znamenitosti: Znamenitost[];
  public editZnamenitost!: Znamenitost;
  public deleteZnamenitost!: Znamenitost;
  readonly Status = Status;

  constructor(public authenticationService: AuthenticationService, private znamenitostService: ZnamenitostiService){this.znamenitosti = [], this.znamenitostiAll = [], this.znamenitostiFiltered = []}

  ngOnInit(){
    this.getZnamenitosti();
  }
    public getZnamenitosti(): void {
      this.znamenitostService.getZnamenitosti().subscribe({
        next: (response: Znamenitost[]) => {
        this.znamenitosti = response;
        this.znamenitostiAll = response;
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
      this.znamenitostService.updateZnamenitost(znamenitost).subscribe({
        next: (response: Znamenitost) => {
          document.getElementById('update-znamenitost-form')?.click();
          this.getZnamenitosti();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
    });
    }

    //CORS BLOKIRA DELETE (?)

    public onDeleteZnamenitost(znamenitostId: number): void {
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

  // public searchZnamenitosti(key: string): void {
    
  //   if (!key){
  //     this.getZnamenitosti();
  //   }
  // }

  public filterZnamenitosti (status?: Status, key?: string): void {    
    var results: Znamenitost[] = [];
    this.znamenitosti=this.znamenitostiAll;
    if (status === Status.ALL) {
      this.znamenitosti=this.znamenitostiAll;
    }
    else if (status === Status.ZNAMENITOST_UP || status === Status.ZNAMENITOST_DOWN) {
    for (const znamenitost of this.znamenitosti) {
      if (znamenitost.status === status) {
        results.push(znamenitost);
      }
    }
    this.znamenitosti = results;
    this.znamenitostiFiltered = results;
    }

    if (key){
    results = [];
      for (const znamenitost of this.znamenitostiFiltered) {
          if (znamenitost.naziv.toLocaleLowerCase().indexOf(key.toLowerCase()) !== -1) {
            results.push(znamenitost);
          }
          this.znamenitosti=results;
      }
    }
  }

  public onSubmit(loginForm: NgForm): void {
    const logInData = new LogInData(loginForm.value.user, loginForm.value.password);
    this.authenticationService.authenticate(loginForm.value);
    console.log(this.authenticationService.isAuthenticated);
  }
}
