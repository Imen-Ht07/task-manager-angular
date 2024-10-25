import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router) { }

  logout(): void {
    // Supprimez le token d'authentification stocké (exemple pour Local Storage)
    localStorage.removeItem('authToken');

    // Redirigez l'utilisateur vers la page de connexion
    this.router.navigate(['/login']);
  }
}
