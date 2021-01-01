import { Component } from '@angular/core';
import { BigTitle } from 'src/app/models/bit-title.models';
import { InlineTopic } from 'src/app/models/inline-topic.model';

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
    subtitle: 'Simule investimentos na bolsa de valores em uma competição divertida onde aquele que faz as melhores escolhas ganha prêmios!',
    buttonAction: 'signin',
    buttonText: 'Clique aqui para começar!'
  }

  inlineTopics: InlineTopic[] = [{
      imageAlt: 'Desafio aceito!',
      imageUrl: 'assets/pages/home/estrategia.png',
      title: 'Desafio aceito!',
      description: 'Escolha um desafio para participar e todos que entrarem recebem um valor fictício em suas carteiras'
    },
    {
      imageAlt: 'Em grego strateegia',
      imageUrl: 'assets/pages/home/analise.png',
      title: 'Em grego strateegia',
      description: 'Durante o desafio simule compras e vendas de ativos em nosso homebroker simulado, que acompanha dados reais das ações'
    },
    {
      imageAlt: 'Playstation! Playstation!',
      imageUrl: 'assets/pages/home/comemoracao.png',
      title: 'Playstation! Playstation!',
      description: 'Ao término do desafio, a pessoa que obtiver o maior valor em sua carteira fictícia ganhará o prêmio do desafio'
    }
  ]
}