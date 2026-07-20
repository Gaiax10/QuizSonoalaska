let punteggio = 0;
let domandaAttuale = 0;

const quiz = [
    {
        domanda: 'Da quale canzone viene questa frase: <<Ti sei fatto le analisi? Hai controllato le visceri? I risultati che dicono? Devi operarti il tuo è un caso clinico>>',
        risposta: 'Dopo di me'
    },
    {
        domanda: 'Da quale canzone viene questa frase: <<Uffa siamo grandi, ci siamo persi un altra volta tra i pnesieri negativi,ti leggo in faccia, che oggi è stato aggressivo e violento>>',
        risposta: 'Dolore amico'
    },
    {
        domanda: 'Da quale canzone viene questa frase: <<E avevo fatto una lista di cose per cui ho una fobia, ho scritto il tuo nome insieme al fuoco, lo specchio e l ipocondria>>',
        risposta: 'Come lupi'
    },
    {
        domanda: 'Da quale canzone viene questa frase: <<Viola vuole fare la mamma, ma è meglio non dirlo, ma al colloquio è sincera quando le chiedono <<Vorrebbe un figlio?>> Scusa, ma l azienda non ha soldi per pagarti>>',
        risposta: 'Marco, viola e...'
    },
    {
        domanda: 'Da quale canzone viene questa frase: <<Per non annegare nei pensieri la porterei al mare. Le onde non nascondo la pelle e le ferite mi fanno amle se metti il tuo sale>>',
        risposta: 'Felpa XXL'
    },
    {
        domanda: 'Da quale canzone viene questa frase: <<Le mie amiche piangono per uno stronzo, diranno di me che faccio lo stesso, non mi sembravi il tipo, ma alla fine anche tu fai schifo. Dania in seduta ci starebbe ore, davanti a Nicole non pronunciare quel nome>>',
        risposta: 'Bambole voodoo'
    },
    {
        domanda: 'Da quale canzone viene questa frase: <<La vita è solo una, ed è tutta una scelta, prendere il treno al volo, o camminare di fretta, ma sono rimasto in dietro, i miei amici del liceo fanno carriera>>',
        risposta: '500 ragazzi'
    },
    {
        domanda: 'Da quale canzone viene questa frase: <<Bimba cosa hai detto? Lo sai bene questa è una bugia, bimba cosa hai fatto? Attenta che fa male dire una bugia, forse vuoi un po di attenzioni, ma sai chi ha potere tra noi due',
        risposta: 'Bimbapazza'
    },
    {
        domanda: 'Da quale canzone viene questa frase: <<A dieci anni io volevo un altro corpo e un sorriso senza le finestre aperte, lui mi ha detto che può darmi tutto, se la sua mano se ne va>>',
        risposta: 'Orsetti'
    },
    {
        domanda: 'Da quale canzone viene questa frase: <<Preferisco fare l amore con le bugie, lo vedi ch echiudi gli occhi che vorrebbe dire? Che forse non sono così speciale, dire <<Ti amo>> è convenzionale>>',
        risposta: 'Lenzuola nere'
    },
    {
        domanda: 'Da quale canzone viene questa frase: <<Non mi invitano colori a ballare questo lento, la pazienza cambia petto e rimane solo sesso, io ho messo il cervello in modalità aereo questo viaggio senza te>>',
        risposta: 'Pupille'
    },
    {
        domanda: 'Da quale canzone viene questa frase : <<Ma chi me lo ha fatto fare di amare va tutto male quando provo a stare bene poi cado in un burrone proprio quando avevo tutto, la casa e il buon umore>>',
        risposta: 'Madonna che sfiga'
    }
     
];

const domanda =
document.getElementById("domanda");
const risposta =
document.getElementById("risposta");
const messaggio =
document.getElementById("messaggio");
const punteggioTesto =
document.getElementById("punteggio");

function mostraDomanda() {
    domanda.textContent =
quiz[domandaAttuale].domanda;
}

function iniziaQuiz() {

    document.getElementById("schermatainiziale")
    .style.display = "none";

    document.getElementById("quiz")
    .style.display="block";

    mostraDomanda();
}

function controllaRisposta() {
    if (risposta.value === quiz[domandaAttuale].risposta) {
        punteggio++;
        messaggio.textContent = "Bravo/a! + 1 punto";
    } else {
        messaggio.textContent = "Hai sbagliato! La risposta corretta era: " +
        quiz[domandaAttuale].risposta;
    }

    domandaAttuale++;
    risposta.value = "";

    if(domandaAttuale < quiz.length) {
        setTimeout(() => {
            messaggio.textContent = "";
            mostraDomanda();
        }, 1500);
    } else {
        domanda.textContent = "Quiz finito!";
        
    document.getElementById("risposta").style.display = "none";

    document.getElementById("btnInvia").style.display = "none";
        
        messaggio.textContent = "Hai finito il quiz!"
        messaggio.textContent =
        "Hai fatto " + punteggio +
        " punti su " + quiz.length;
    }
}
