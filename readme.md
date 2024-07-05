### Descrizione delle Cartelle e dei File

- `README.md`: Questo file, che descrive il progetto.
- `index.html`: Struttura della pagina web principale.
- `/assets`: Risorse del progetto come immagini, pdf, CSS e JavaScript.
    - `/css`: File styles.css con stili della pagina.
        - `/styles.css`
    - `/js`: File script.js per rendere la pagina interattiva.
        - `/script.js`
    - `/images`: Immagini usate per la pagina web.
        - `/cards`: Immagini per le cards.
            - `/immagine1.png`
            - `/immagine2.png`
            - `/immagine3.png`
            - `/immagine4.png`
            - `/immagineCV.png`
        - `/skills`: Immagini per le skills.
            - `/css_logo.png`
            - `/html_logo.png`
        - `/IMG9757.jpg`
        - `/sb.png`
        - `/sfondo.avif`
    - `/pdf`: Documenti pdf dei miei progetti.
        - `/progetto_blockchain.pdf`
        - `/progetto_ethereum.pdf`
- `/curriculum`: Cartella contenente la pagina web del mio curriculum che si apre cliccando il pulsande della card.
    - `/index.html`: Struttura della pagina web curriculum.
    - `/assets`: Risorse della pagina come file css.
        - `/css`: File styles.css con stili della pagina.
            - `/styles.css`
- `/progetto film`: Cartella contenente la pagina web del mio blog dedicato al cinema.
    - `/index.html`: Struttura della pagina web blog.
    - `/assets`: Risorse del progetto come immagini e CSS.
        - `/css`: Files css divisi per sezione con stili della pagina.
            - `/styles.css`: Stili generali pagina.
            - `/content.css`: Stili per la sezione content.
            - `/cta.css`: Stili per la sezione cta.
            - `/features.css`: Stili per la sezione features.
            - `/header.css`: Stili per la sezione header.
            - `/menu.css`: Stili per la sezione menu.
            - `/sign-up.css`: Stili per la sezione sign-up.
            - `/media-queries.css`: Stili per la responsività della pagina.
        - `/images`: Immagini usate per la pagina web.
            - `/img1-HolyMotors.webp`
            - `/img2-HugoCabret.webp`
            - `/img3-PorcoRosso.webp`
            - `/img4-LostInTranslation.webp`
            - `/img5-IlCorvo.webp`
            - `/sfondo_header.jpg`


### Pagina web principale

## File HTML

Il file `index.html` costituisce la base del progetto e contiene la struttura della pagina web. Le principali sezioni e le scelte stilistiche sono le seguenti:

- **Doctype e lingua**: Il documento inizia con la dichiarazione `<!DOCTYPE html>` e specifica la lingua inglese con l'attributo `lang="en"` nel tag `<html>`. Questo è importante per la corretta visualizzazione e interpretazione del documento da parte dei browser e dei motori di ricerca.

- **Meta tag**: Viene specificato il set di caratteri (`charset="UTF-8"`) e le impostazioni del viewport per garantire che la pagina sia responsive e visualizzata correttamente su dispositivi mobili.

- **Titolo della pagina**: Il tag `<title>` contiene il titolo del documento, che viene visualizzato nella scheda del browser.

- **Inclusione dei file CSS e JavaScript**: I file `styles.css` e `script.js` sono inclusi rispettivamente con i tag `<link>` e `<script>`. Il file reCAPTCHA API è incluso con un tag `<script>` fornito da Google, con gli attributi `async` e `defer` per caricarlo in modo asincrono e non bloccare il rendering della pagina.

- **Navbar**: La navbar è creata utilizzando un tag `<nav>` e include elementi di navigazione come logo, link e un menu a tendina. La navbar è responsive e utilizza classi CSS per adattarsi a diverse dimensioni di schermo. Questa struttura rende la navigazione intuitiva e accessibile su tutti i dispositivi.

- **Cards**: Le cards sono contenute all'interno di un container e utilizzano classi per disporre il contenuto in una griglia. Ogni card include un'immagine, un titolo e una descrizione. Questo layout è scelto per presentare il contenuto in modo visivamente accattivante e organizzato.

- **Struttura del modulo**: Il modulo di contatto è racchiuso in un tag `<form>` con l'id `contactForm`. Il modulo include campi per il nome (`<input type="text" id="name"`), l'email (`<input type="email" id="email"`) e il messaggio (`<textarea id="message"`). Alla fine del modulo è presente il widget reCAPTCHA e un pulsante di invio (`<button type="submit">`).

## File CSS

Il file `styles.css` contiene gli stili per il modulo di contatto. Le scelte stilistiche principali sono:

- **Stile della navbar e delle cards**: La navbar utilizza classi per il posizionamento e la stilizzazione che la rendono responsive, garantendo una buona esperienza utente su dispositivi mobili. Le cards sono stilizzate per avere margini uniformi, bordi arrotondati e ombre per un effetto visivo piacevole.

- **Stile del modulo**: Viene definito uno stile centrato per il modulo (`max-width: 600px; margin: 0 auto; padding: 20px;`) per migliorare la leggibilità e l'usabilità. Il modulo è anche bordato e arrotondato per un aspetto estetico migliore.

- **Stile dei campi di input e della textarea**: Viene applicato uno stile uniforme per i campi di input e la textarea (`width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px;`) per garantire coerenza e facilità d'uso.

- **Stile del pulsante**: Il pulsante di invio ha uno stile che ne enfatizza la cliccabilità (`background-color: #007BFF; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;`). Un effetto hover (`background-color: #0056b3;`) è incluso per migliorare l'interazione dell'utente.

## File JavaScript

Il file `script.js` contiene il codice JavaScript necessario per gestire la sottomissione del modulo e l'integrazione con reCAPTCHA ed EmailJS. Le scelte principali includono:

- **Uso di jQuery**: jQuery viene utilizzato per semplificare la manipolazione del DOM e la gestione degli eventi. In particolare, il metodo `$(document).ready()` garantisce che il codice venga eseguito solo dopo che il DOM è completamente caricato.

- **Gestione della sottomissione del modulo**: L'evento `submit` del modulo è intercettato per prevenire il comportamento predefinito (`event.preventDefault()`). Questo permette di eseguire ulteriori controlli prima di inviare i dati.

- **Validazione reCAPTCHA**: Prima di inviare i dati, viene verificato che il reCAPTCHA sia stato completato (`var recaptchaResponse = grecaptcha.getResponse();`). Se il reCAPTCHA non è completo, viene mostrato un messaggio di avviso e il modulo non viene inviato.

- **Invio dei dati con EmailJS**: Se il reCAPTCHA è completato, i dati del modulo vengono raccolti e inviati tramite EmailJS. In caso di successo, viene mostrato un messaggio di conferma e il reCAPTCHA viene resettato (`grecaptcha.reset();`). In caso di errore, viene mostrato un messaggio di errore.

## Integrazione reCAPTCHA

L'integrazione del reCAPTCHA è fondamentale per prevenire lo spam. Il widget reCAPTCHA viene incluso nel modulo e la sua risposta viene validata prima di inviare i dati del modulo. Questo aggiunge un livello di sicurezza al modulo di contatto.

## Integrazione EmailJS

EmailJS consente di inviare email direttamente dal client senza dover configurare un server backend. Questo rende l'invio di email semplice e veloce. La libreria EmailJS viene utilizzata per inviare i dati del modulo a un servizio email configurato.

## Finestra Modale per la Prima Card

La prima card nella pagina ha una funzionalità aggiuntiva che apre una finestra modale quando si clicca sul pulsante "Visualizza". Questa finestra modale permette all'utente di aprire e visualizzare due file PDF. 

- **Utilizzo della Modale**: La modale è utilizzata per presentare informazioni aggiuntive senza abbandonare la pagina corrente. Questo migliora l'esperienza utente permettendo di accedere a contenuti supplementari in modo rapido e intuitivo.

- **Gestione degli Eventi**: Il pulsante "Visualizza" è associato a un evento click che apre la modale. All'interno della modale, sono presenti link o pulsanti che permettono di aprire i file PDF. Questo design è scelto per mantenere l'interfaccia pulita e organizzata.

## Conclusioni

Questo progetto combina diverse tecnologie per creare un modulo di contatto sicuro e funzionale. Le scelte stilistiche e di codice sono state fatte per garantire una buona esperienza utente, sicurezza e facilità di manutenzione. La navbar e le cards migliorano l'organizzazione e l'estetica del contenuto della pagina, rendendola più user-friendly e visivamente accattivante. La funzionalità della finestra modale per la prima card aggiunge un livello di interattività e accesso rapido a risorse aggiuntive. Se hai ulteriori domande o suggerimenti, sentiti libero di contattarmi.
