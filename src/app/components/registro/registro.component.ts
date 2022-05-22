import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceAuth } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  name!:string;
  surname!: string;
  nick!: string;
  email!: string;
  password!: string;
  @ViewChild("cajamail") cajamail! : ElementRef;
  @ViewChild("cajapassword") cajapassword! : ElementRef;

  constructor(private _auth : ServiceAuth, private _router : Router) { }

  ngOnInit(): void {
  }

  registro():void{
    var mail = this.cajamail.nativeElement.value;
    var contra = this.cajapassword.nativeElement.value;
    this._auth.registro(mail, contra).then(res=>{
      console.log(res);
      this._router.navigate(['perfil']);
      console.log(this.name);
      console.log(this.surname);
      console.log(this.nick);
      
      console.log(this.email);
      console.log(this.password);
    });
  }

}
