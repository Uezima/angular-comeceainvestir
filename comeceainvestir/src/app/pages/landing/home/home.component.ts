import { Component } from '@angular/core';
import { BigTitle } from 'src/app/models/bit-title.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  bigTitle: BigTitle = {
    imageUrl: 'assets/pages/home/astronauta.png',
    imageAlt: 'Desenho de um astronauta com moedas e notas de dinheiro ao redor dele no espaço',
    imageAnimation: 'floating',
    title: 'Treine seu lado investidor concorrendo a prêmios!',
    subtitle: 'Simule investimentos na bolsa de valores em uma competição divertida onde aquele que fizer as melhores escolhas ganhará um prêmio!',
    buttonAction: 'signin',
    buttonText: 'Clique aqui para começar!'
  }
}