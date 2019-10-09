import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId;
  userRole;
  Custname;
  constructor(private logInService: UserService, private router: Router, private authService: AuthService, private custService: UserService) { }

  ngOnInit(){ }

  us: any;

  UserLogIn(nf: NgForm) {
    this.logInService.Login(nf.value)
      .subscribe(
        (res: any) => 
        {
          localStorage.setItem('token', res.token);
          this.userId = res.id;
          this.userRole = res.role;
          this.Custname = res.custName;
          console.log(this.userId);
          localStorage.setItem('custId', this.userId);
          localStorage.setItem('role', this.userRole);
          localStorage.setItem('userName', this.Custname);

          if (localStorage.getItem('token') != null)
          {
            console.log(this.authService.getRole())
            let check = this.authService.getRole();
            if (check == 'admin')
            {
              console.log("inside admin")
              this.router.navigate(['/admin']);
            }
            else 
            {
              console.log("inside customer");
              this.router.navigate(['/customer']);
            }
          }
          else 
          {
            this.router.navigate(['/home']);
          }

        }) 
    this.custService.getUsers()
      .subscribe
      (
        (res: any) => 
        {
          console.log(res),
            this.us = res;
          this.us =
            localStorage.setItem("role", JSON.stringify(this.us))
        },
      );    
  } 
}
