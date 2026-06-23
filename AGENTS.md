# AGENTS.md

## Contesto Del Progetto
La repo contiene una piccola applicazione per la gestione di ticket aperti.
Il backend è una API Express che espone ticket fittizi.
Il frontend è una UI React che recupera i ticket dall’API e li mostra in lista.

## Obiettivo Corrente
Quando non ci sono ticket aperti, la pagina deve mostrare un empty state semplice: un messaggio chiaro che spiega che non ci sono ticket da visualizzare.

## Regole Di Lavoro
- Prima di modificare file, riscrivi il task in una frase.
- Prima di modificare file, proponi un piano breve.
- Se la richiesta e' ambigua, fai una sola domanda.
- Se il task diventa troppo largo, fermati e proponi una versione piu' piccola.
- Non applicare patch finché il piano non è stato approvato.
- Non simulare modifiche non eseguite.
- Non mostrare chain-of-thought estesa: riporta solo assunzioni principali, criterio usato e verifica proposta.
- Usa esempi few-shot solo se chiariscono formato o criterio; non usarli per anticipare la soluzione.

## Confini
Durante il lavoro:
- non cambiare layout globale;
- non aggiungere nuove feature non richieste;
- non modificare routing o configurazione;
- non fare refactor non richiesti;
- non cambiare file fuori dallo scope del task.

## Comandi Utili
- install: pnpm install
- dev: pnpm dev

## Prova Di Controllo
Per ogni modifica, indica:
- come controllare il caso modificato;
- come controllare che il caso normale funzioni ancora;
- quali controlli non sono stati eseguiti.
- quali assunzioni principali e quale criterio hanno guidato la scelta.

## Output Finale
Alla fine rispondi con:
- file modificati;
- cosa e' cambiato;
- prova di controllo eseguita o da eseguire;
- strategia prompt usata se rilevante: zero-shot o few-shot;
- rischi o dubbi rimasti.