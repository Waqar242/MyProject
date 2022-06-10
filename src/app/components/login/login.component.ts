import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  title = 'material-login';

  constructor(
    private router:Router,
    private LoginServiceService: LoginServiceService

  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)])
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.LoginServiceService.login(this.loginForm.value).subscribe(result =>{
      if(result.statusCode=="200")
      {
        //environment.auth_token = result.dist.jwtToken;
        sessionStorage.setItem('auth_token', result.dist.jwtToken);
        this.router.navigate(['/home'])
      }
      else{
        alert(result.message);
      }
    });
  }
}