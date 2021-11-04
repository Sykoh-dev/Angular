import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.scss']
})
export class PremierComponent implements OnInit {

  messageBienvenue: string;
  disabledButton = true;

  constructor() { this.messageBienvenue = 'Bonjour les amis'
  }

  ngOnInit(): void {

  }

  // Affiche le message quand je clique sur le bouton lié
  showMessage(msg:string): void{
  console.log(msg);
  }

  // Affiche l'évènement lié au clique du boutton
    showMouseEvent($event: MouseEvent){
    console.log($event);
    }

  // active/desactive l'input quand on clique sur le boutton lié
  activeInput() {
    this.disabledButton = !this.disabledButton;
  }
}
