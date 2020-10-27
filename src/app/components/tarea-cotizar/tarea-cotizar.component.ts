import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarea-cotizar',
  templateUrl: './tarea-cotizar.component.html',
  styleUrls: ['./tarea-cotizar.component.css']
})
export class TareaCotizarComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

}
