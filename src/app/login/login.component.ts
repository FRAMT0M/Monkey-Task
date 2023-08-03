import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router) { }
  
  login() {
    // Aquí debes realizar la lógica de autenticación
  

    // Si la autenticación es exitosa, redirigir al dashboard
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {}

}
