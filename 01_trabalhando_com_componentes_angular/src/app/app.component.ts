import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '01-trabalhando-com-componentes-angular';
  buttonLabel: string = 'Carrinho';
  buttonSecond: string = 'Adicionar aos Favoritos';
}
