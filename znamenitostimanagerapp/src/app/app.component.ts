import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Status } from './enum/status.enum';
import { Znamenitost } from './interface/znamenitost';
import { ZnamenitostiService } from './service/znamenitost.service';
import { AuthenticationService } from './service/authentication.service';
import { User } from './interface/user';
import { Role } from './enum/role.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selected: number[];
  hovered = 0;
  readonly = true;
  title = 'znamenitostimanagerapp';
  public user: User[];
  public znamenitostiAll: Znamenitost[];
  public znamenitostiFiltered: Znamenitost[];
  public znamenitosti: Znamenitost[];
  public editZnamenitost!: Znamenitost;
  public deleteZnamenitost!: Znamenitost;
  readonly Status = Status;
  isAuthenticated = false;
  isAdmin = false;


  constructor(public authenticationService: AuthenticationService, private znamenitostService: ZnamenitostiService){this.selected= [], this.user = [], this.znamenitosti = [], this.znamenitostiAll = [], this.znamenitostiFiltered = []}

  ngOnInit(){
    this.getZnamenitosti();
    this.getUsers();
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

    public getUsers(): void {
      this.authenticationService.getUsers().subscribe({
        next: (response: User[]) => {
        this.user = response;
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

  public filterZnamenitosti (status?: Status, key?: string): void {
    var results: Znamenitost[] = [];
    this.znamenitosti=this.znamenitostiAll;
    this.znamenitostiFiltered=this.znamenitostiAll;
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
    this.authenticate(loginForm.value);
  }  

  authenticate(logInData: User): void {
    this.authenticationService.findUser(logInData.user, logInData.sifra).subscribe({
      next: (response: User) => {
        this.isAuthenticated  = true;
        this.readonly = false;
        if (response.uloga===Role.USER_ADMIN)
          this.isAdmin = true;
      },
      error: (error: HttpErrorResponse) => {
        this.isAuthenticated = false;
        this.isAdmin = false;
      }
    });
  }

  logout() {
    this.isAuthenticated = false;
    this.isAdmin = false;
    this.readonly = true;
  }

  public onRateChange(id: number): void{
    console.log(this.user);
  }
}
