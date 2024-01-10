**Gioco dei dadi**

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
**Mail**

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
**Consigli del giorno:**

1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

---


Creare variabili per  
- numero rollato dalla persona (let persona)
- numero rollato dal computer (let computer)
- document.getelementbyID (outcomeWinLose)
  

creare funzione per randomare numero da 1-6 Math.random() per persona e computer 

funzione if (let persona > let computer ){

    outcomeWinLose.innerHtml =  "hai vinto"
}
    else if (let persona < let computer){

        outcomeWinLose.innerHtml  = "hai perso"
    }

    else (){
         outcomeWinLose.innerHtml  = "hai pareggiato"
    }

-chiamare buttonHtml