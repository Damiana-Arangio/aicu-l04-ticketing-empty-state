# AICU Lab 04 - Ticketing Empty State

Starter repo per il Lab 04 del Modulo 01.

L'app e' volutamente piccola: una API Express espone ticket aperti fittizi, una UI React mostra la lista. Il task del lab e' aggiungere un empty state semplice quando la lista e' vuota.

## Stack

- Node.js
- Express
- React
- Vite
- JavaScript e JSX

Non c'e' TypeScript.

## Setup

Installa le dipendenze:

```bash
pnpm install
```

Avvia API e frontend:

```bash
pnpm dev
```

Apri:

```txt
http://127.0.0.1:5173/
```

## Stati Da Verificare

Stato con ticket:

```txt
http://127.0.0.1:5173/
```

Stato vuoto:

```txt
http://127.0.0.1:5173/?empty=true
```

API diretta:

```txt
http://127.0.0.1:3001/api/tickets
http://127.0.0.1:3001/api/tickets?empty=true
```

## Task Del Lab

Quando l'API restituisce una lista vuota, la pagina deve mostrare un messaggio chiaro e sobrio al posto dello spazio vuoto.

La modifica deve restare piccola e revisionabile.

## Prima Della Patch

Questa starter repo non include il kit L03.

Prima di chiedere modifiche al codice, aggiungi e adatta dal tuo lavoro L03:

```txt
AGENTS.md
prompt-kit/
  02-piano-breve.md
  03-modifica-controllata.md
  04-controllo-diff.md
  05-handoff.md
handoff-note.md
```

Usa prima `02-piano-breve.md`. Chiedi una patch solo dopo aver letto e accettato il piano.

## File Principali

```txt
server/index.js
server/data/tickets.js
src/App.jsx
src/api.js
src/components/TicketList.jsx
src/components/TicketCard.jsx
src/styles.css
```

`TicketList.jsx` e' il punto piu' probabile in cui intervenire, ma verifica sempre il piano prima di modificare.

## Fuori Scope

- Redesign.
- Filtri.
- Routing.
- Creazione ticket.
- Database.
- Auth.
- Refactor generale.
- Test automatici obbligatori.

## Build

Per controllare che il frontend compili:

```bash
pnpm run build
```

Per servire la build con Express:

```bash
pnpm start
```
