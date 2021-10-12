-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Ott 12, 2021 alle 11:22
-- Versione del server: 10.4.21-MariaDB
-- Versione PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `biblioteca`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `anagrafiche`
--

CREATE TABLE `anagrafiche` (
  `id_anagrafica` int(11) NOT NULL,
  `nome` varchar(20) DEFAULT NULL,
  `cognome` varchar(30) DEFAULT NULL,
  `data_nascita` date DEFAULT NULL,
  `indirizzo` varchar(50) DEFAULT NULL,
  `cap` varchar(5) DEFAULT NULL,
  `localita` varchar(50) DEFAULT NULL,
  `provincia` varchar(2) DEFAULT NULL,
  `telefono_cellulare` varchar(30) DEFAULT NULL,
  `codice_fiscale` varchar(16) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `anagrafiche`
--

INSERT INTO `anagrafiche` (`id_anagrafica`, `nome`, `cognome`, `data_nascita`, `indirizzo`, `cap`, `localita`, `provincia`, `telefono_cellulare`, `codice_fiscale`, `email`, `password`) VALUES
(1, 'Pasquale', 'Scommegna', '2000-02-10', 'Vicinale Tratturo Regio', '76121', 'Barletta', 'BT', '3801961628', 'SCMPQL00B10A669F', 'pasqualee.scommegna@gmail.com', 'gino'),
(2, 'Simone', 'Castelluccio', '1996-10-17', 'Via Brigata Rossa', '85044', 'Lauria', 'Pz', '3458941684', 'CSTSMN96R17E483L', 'simone.castelluccio@gmail.com', 'paolo'),
(3, 'Mario', 'Rossi', '1994-02-12', 'Via trani', '80100', 'Napoli', 'NA', '3948168423', 'RSSMRA94S02F839S', 'mario.rossi@hotmail.com', 'franco'),
(4, 'Davide', 'Giaracuni', '1997-11-18', 'Viale Japigia', '70121', 'Bari', 'BA', '3461578456', 'GRCDVD97E18A662G', 'davide.giaracuni@gmail.com', 'pino'),
(5, 'Vincenzo', 'Morelli', '2001-03-14', 'via foggia', '73100', 'Gallipoli', 'LE', '3206248259', 'MRLVCN01C14E506X', 'vincenzo.morelli@libero.it', 'fino');

-- --------------------------------------------------------

--
-- Struttura della tabella `autori`
--

CREATE TABLE `autori` (
  `id_autore` int(11) NOT NULL,
  `nominativo` varchar(50) NOT NULL,
  `data_nascita` date DEFAULT NULL,
  `luogo_nascita` varchar(50) DEFAULT NULL,
  `data_morte` date DEFAULT NULL,
  `luogo_morte` varchar(50) DEFAULT NULL,
  `biografia` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `autori`
--

INSERT INTO `autori` (`id_autore`, `nominativo`, `data_nascita`, `luogo_nascita`, `data_morte`, `luogo_morte`, `biografia`) VALUES
(1, 'J. K. Rowling', '1965-07-31', ' Yate, Regno Unito', NULL, NULL, 'Nata a Yate il 31 luglio 1965, durante la sua infanzia Joanne dimostra una notevole e spiccata fantasia, divenendo autrice di numerosi racconti: a sei anni scrisse la storia di Rabbit, un coniglio malato di morbillo, mentre a dodici anni scrisse un romanzo che trattava di sette diamanti maledetti. Durante tutto il periodo scolastico conosce numerose persone che ispireranno diversi personaggi della saga di Harry Potter: il preside delle elementari diventa Albus Silente; il suo migliore amico, alla guida di una Ford Anglia, sarà ispiratore del rosso Ronald Weasley; e il suo professore di chimica, con cui non ha mai avuto brillanti rapporti, sarà d\'ispirazione per il personaggio di Severus Piton. Rowling ascolta musica pop ed è appassionata del gruppo musicale The Smiths e della cantante Siouxsie Sioux, il cui look ha adottato per diversi anni, anche all\'università.'),
(2, 'Stephen King', '1947-09-21', 'Portland, Stati Uniti d\'America', NULL, NULL, 'Stephen Edwin King, il re della letteratura horror, l\'uomo che ha venduto tonnellate di libri in tutto il mondo, è nato il 21 settembre 1947 a Scarborough, nel Maine. Suo padre era un militare impegnato nella Seconda Guerra Mondiale come capitano nella Marina Mercantile mentre la madre era una donna di origini modeste. Pur avendo la coppia adottato anche un secondo figlio, la famiglia di King subisce un brutto trauma quando Stephen è ancora piccolo. Il padre, uscito di casa per fare una passeggiata, si dileguerà nel nulla senza più fornire alcuna notizia di sè.'),
(3, 'Alessandro Manzoni', '1785-03-07', 'Milano', '1873-05-22', 'Milano', 'Alessandro Manzoni (1785, Milano – 1873, Milano) è considerato uno dei più grandi scrittori italiani. Esponente di spicco del Romanticismo, la sua carriera è ricordata soprattutto per il capolavoro I promessi sposi, probabilmente il romanzo più famoso della letteratura italiana.'),
(4, 'Isaac Asimov', '1920-01-02', 'Petroviči, Russia', '1992-04-06', ' Brooklyn, New York, Stati Uniti', 'Isaac Asimov è stato uno dei più grandi scrittori di fantascienza e uno dei più ineguagliati divulgatori scientifici del mondo.\r\nNato da una famiglia ebraica il 2 gennaio 1920 a Petrovichi, in Bielorussia, a soli tre anni emigra con la famiglia negli Stati Uniti, stabilendosi a Brooklyn. Il padre acquista un emporio di giornali e dolci, e Asimov inizia ad appassionarsi alla fantascienza leggendo le riviste che periodicamente arrivano al padre.Le sue doti straordinarie emergono da subito: impara a leggere da solo a cinque anni e da quel momento in poi non smetterà più di leggere libri e di studiare. Prenderà due lauree, una in Chimica e una in Filosofia.'),
(5, 'Marco Tesei', NULL, 'Roma', NULL, NULL, 'Marco Tesei è nato a Roma. Laureato in lettere, è giornalista professionista. Lavora nella redazione rubriche del Giornale Radio Rai e di RadioUno, dove si occupa di argomenti culturali. Conduce e cura, tra l’altro, “Radiogames” e “Fuori Scaffale”. Nel 1993 ha realizzato per Rai 2 un documentario sulla vita di Carlo Emilio Gadda.'),
(6, 'Terry Pratchett ', '1948-04-28', ' Beaconsfield, Regno Unito', '2015-03-15', 'Broad Chalke, Regno Unito', 'Sir Terry Pratchett, all\'anagrafe Terence David John Pratchett, è stato uno scrittore britannico, noto per i suoi romanzi di fantasy umoristico. È conosciuto dai suoi fan come Pterry, suo nickname nel newsgroup dedicato alle sue opere. È principalmente noto per la sua lunga serie di romanzi ambientati nel Mondo Disco.'),
(7, 'Neil Gaiman', '1960-11-10', 'Portchester, Regno Unito', NULL, NULL, 'Nato a Portchester, un sobborgo di Portsmouth (Hampshire), il 10 novembre 1960 da una famiglia ebraica di origini polacche ed est-europee, comincia la sua carriera come giornalista, scrivendo anche racconti di fantascienza per sceneggiature a fumetti.\r\nArriva alla casa editrice di fumetti DC Comics durante la cosiddetta British invasion (invasione britannica) degli anni ottanta, insieme a Grant Morrison, Jamie Delano, Peter Milligan, Pat Mills, Alan Grant, Matt Wagner e altri ancora, e debutta con Black Orchid, un oscuro personaggio della DC, che trasforma completamente.'),
(8, 'Massimo Pericolo', '1992-11-30', 'Gallarate, Italia', NULL, NULL, 'Massimo Pericolo, pseudonimo di Alessandro Vanetti (Gallarate, 30 novembre 1992), è un rapper italiano.'),
(9, 'Antonino Cannavacciuolo', '1975-04-16', 'Vico Equense', NULL, NULL, 'Antonino Cannavacciuolo è nato il 16 aprile 1975 a Vico Equense (dove nasce anche Gino D’Acampo), in provincia di Napoli. Studia all’Istituto Alberghiero “F.De Gennaro” del suo paese natale, dove ha insegnato anche il padre. Dopo il diploma, nel 1994, inizia a lavorare come cuoco in Penisola Sorrentina. Successivamente iniziano le esperienze all’estero: tra cui quella in Alsazia, a Strasburgo. Ritorna in Italia e lavora all’Hotel Quisisana a Capri nel tempo in cui Gualtiero Marchesi ne era il consulente. Villa Crespi arriva solo nel 1999, dimora storica che prende con sua moglie e grazie al quale riceve ben due stelle Michelin (nel 2003 e nel 2006).'),
(10, 'Carlo Cracco', '1965-10-08', 'Creazzo', NULL, NULL, 'È il più famoso tra i grandi chef usciti dalle feconda covata di Gualtiero Marchesi. Carlo Cracco, vicentino classe 1965, deve la propria notorietà presso il vasto pubblico al fatto di essere diventato anche un personaggio tv, di quelli ambiti da cacciatori (e soprattutto cacciatrici, visto il crescente fascino acquistato con l’età) di selfie. Ma i buongustai non sono attirati da Masterchef, quanto dalla sua cucina, forse la più creativa tra quelle celebrate a Milano.'),
(11, 'Papa Francesco', '1936-12-17', ' Flores, Buenos Aires, Argentina', NULL, NULL, 'Francesco, papa. – Nome assunto da Jorge Mario Bergoglio (n. Buenos Aires 1936) dopo la sua elezione papale. Nato in Argentina da emigranti piemontesi è il primo papa latinoamericano eletto al ministero petrino, nonché il primo gesuita ad assurgere a tale carica. Dopo essersi diplomato come tecnico chimico, ha poi scelto il sacerdozio ed ha studiato in seminario, nel 1958 è entrato a far parte come novizio della Compagnia di Gesù. Ha compiuto studi umanistici in Cile e si è laureato a Buenos Aires in Filosofia.'),
(12, 'James Dunn', '1939-10-21', ' Birmingham, Regno Unito', '2020-06-26', ' Birmingham, Regno Unito', 'Per un certo periodo James Dunn seguì le orme professionali del padre, agente di cambio a New York. Successivamente iniziò la carriera artistica compiendo il proprio apprendistato nel vaudeville, prima di passare al cinema alla fine degli anni venti per lavorare come generico negli studi newyorkesi della Paramount ad Astoria. Nel 1931 firmò un contratto con la 20th Century Fox e attirò l\'attenzione di pubblico e critica fin dal suo primo film, Bad Girl (1931), per la regia di Frank Borzage.\r\nTra gli altri film interpretati da Dunn durante gli anni trenta, da ricordare Society Girl (1932), in cui l\'attore impersonò un pugile distratto dalla propria ragazza (Peggy Shannon), al fianco di Spencer Tracy nella parte del suo frustrato manager sportivo; e Hello, Sister! (1933), versione ispirata al film di Erich Von Stroheim Walking Down Broadway. Tra gli altri successi di Dunn nel decennio, si ricordano i quattro film interpretati al fianco di Shirley Temple, Il trionfo della vita (1933), Piccola stella (1934), Primo amore (1934) e La mascotte dell\'aeroporto (1934).\r\nNella seconda metà del decennio la carriera di Dunn andò incontro al declino, complice anche la battaglia dell\'attore contro l\'alcolismo. Tuttavia, nel 1945 la sua performance in Un albero cresce a Brooklyn gli valse il premio Oscar al miglior attore non protagonista, per il ruolo di un padre irlandese alcolizzato ma bonario, un sognatore capace di regalare gioia a chi gli sta intorno, pur non essendo un vincente.\r\nIl ritorno al successo fu però di breve durata e per Dunn non si concretizzarono ulteriori prospettive di carriera. Dopo il 1950, apparve in soli tre film, Il letto di spine (1960), Le avventure di un giovane (1962) e Tramonto di un idolo (1966), ma continuò a lavorare per la televisione fino alla sua morte. Dal 1954 al 1956 recitò nel ruolo di Earl Morgan, cognato della protagonista Amy Morgan (Frances Bavier) nella sitcom It\'s a Great Life.'),
(13, 'Linda L. Paget', '1955-05-23', 'Calgary, Canada', NULL, NULL, 'Linda Lou Paget, educartice sessuale, dirige da anni cicli di seminari. collabora inoltre con Hollywood supports, un\'organizzazione non-profit per la prevenzione informata delle malattie a trasmissione sessuale.'),
(14, 'Ashley Wheeler', '1986-08-06', 'St. Johnsbury, Vermont, U.S.', NULL, NULL, 'Ashley Wheeler è una famosa concorrente di concorso di bellezza, nata il 6 agosto 1986 negli Stati Uniti. Ashley Ruth Wheeler (nata il 6 agosto 1986) è stata incoronata Miss Vermont 2008 sabato 26 aprile 2008 a Barre, nel Vermont. Secondo gli astrologi, il segno zodiacale è il Capricorno.'),
(15, 'Franco Baresi', '1960-05-08', 'Travagliato', NULL, NULL, 'Franco Baresi è un dirigente sportivo, ex allenatore di calcio ed ex calciatore italiano, di ruolo difensore, vicepresidente onorario del Milan. Campione del mondo nel 1982 e vicecampione nel 1994 con la Nazionale italiana, da giovane era soprannominato Piscinin e in seguito Kaiser Franz.\r\n'),
(16, 'Beppe Severgnini', '1956-12-06', 'Crema', NULL, NULL, 'Giuseppe Severgnini, detto Beppe (Crema, 26 dicembre 1956), è un giornalista, saggista, opinionista e conduttore televisivo italiano. È editorialista e vicedirettore del Corriere della Sera, dov\'è arrivato nel 1995. Per il quotidiano ha il creato blog/forum Italians nel 1998, tiene l\'omonima rubrica sul quotidiano dal 2001, la videorubrica FotoSintesi dal 2019 e il podcast RadioItalians dal 2021. Ha diretto il settimanale 7-Sette per 777 giorni, dal 2017 al 2019. È stato corrispondente in Italia per The Economist (dal 1996 al 2003). Dal 2013 al 2021 è stato opinionista per The New York Times[1]. Ha scritto una ventina di libri e condotto alcuni programmi televisivi. È un allievo di Indro Montanelli.'),
(17, 'Jack London', '1876-01-12', 'San Francisco, California, Stati Uniti', '1916-12-22', 'Glen Ellen, California, Stati Uniti', 'Nacque a San Francisco in California nel 1876, figlio naturale (secondo Clarice Stasz e altri biografi) di un astrologo ambulante irlandese, William Henry Chaney, e di Flora Wellman figlia di un ricco inventore dell\'Ohio. Il padre si disinteressò di lui, anche perché otto mesi dopo la sua nascita la madre si risposò con John London, contadino vedovo con due figli. Jack venne cresciuto dalla madre e dal padre adottivo. Terminata la scuola elementare nel 1889, London iniziò a passare da un lavoro all\'altro frequentando compagnie assai poco raccomandabili, come ladri e contrabbandieri. Dopo numerose esperienze lavorative, tornò a Oakland per frequentare la Oakland High School, dove partecipò alla redazione del giornale scolastico, The Aegis.'),
(18, 'Herman Melville', '1819-08-01', 'New York, New York, Stati Uniti', '1891-09-28', ' New York, New York, Stati Uniti', 'Nacque a New York il 1º agosto del 1819, figlio di Allan Melville e Maria Gansevoort. Herman Melville ricevette la prima istruzione a New York, dove il padre Allan, ricco commerciante, stimolò con i suoi racconti il desiderio d\'avventura del suo secondogenito. La vita della famiglia trascorse agiata fino all\'estate del 1830, quando il padre subì un tracollo finanziario, dichiarò bancarotta e manifestò una malattia psichica che lo portò alla morte. Dopo questo evento, che lasciò segni indelebili in Melville, la famiglia (composta di otto figli tra fratelli e sorelle), ridotta in povertà, si trasferì nel villaggio di Lansingburgh, sul fiume Hudson. Qui Herman lasciò definitivamente la scuola; dapprima lavorò nell\'azienda di uno zio, poi nel negozio del fratello maggiore, infine come insegnante.'),
(19, 'H. P. Lovecraft', '1890-08-20', 'Providence, Rhode Island, Stati Uniti', '1937-03-15', 'Providence, Rhode Island, Stati Uniti', 'Howard Phillips Lovecraft, spesso citato come H.P. Lovecraft, è stato uno scrittore, poeta, critico letterario e saggista statunitense, riconosciuto tra i maggiori scrittori di letteratura horror insieme con Edgar Allan Poe e considerato da molti uno dei precursori della fantascienza angloamericana');

-- --------------------------------------------------------

--
-- Struttura della tabella `case_editrici`
--

CREATE TABLE `case_editrici` (
  `id_casa_editrice` int(11) NOT NULL,
  `nominativo` varchar(50) DEFAULT NULL,
  `citta` varchar(50) DEFAULT NULL,
  `cap` varchar(5) DEFAULT NULL,
  `indirizzo` varchar(50) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `sito_web` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `case_editrici`
--

INSERT INTO `case_editrici` (`id_casa_editrice`, `nominativo`, `citta`, `cap`, `indirizzo`, `telefono`, `email`, `sito_web`) VALUES
(1, 'Mondadori', 'Milano', '20121', ' P.za del Duomo,1', '02 7542 9008', 'pressoffice@mondadori.it', 'www.mondadoristore.it'),
(2, 'Feltrinelli', 'Milano', '20145', 'Piazza Piemonte, 2/4', '02.91947777', 'clienti@lafeltrinelli.it', 'www.lafeltrinelli.it');

-- --------------------------------------------------------

--
-- Struttura della tabella `consegne`
--

CREATE TABLE `consegne` (
  `id_consegna` int(11) NOT NULL,
  `descrizione` varchar(100) DEFAULT NULL,
  `id_anagrafica` int(11) DEFAULT NULL,
  `data_consegna` date DEFAULT NULL,
  `data_restituzione` date DEFAULT NULL,
  `id_libro` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `consegne`
--

INSERT INTO `consegne` (`id_consegna`, `descrizione`, `id_anagrafica`, `data_consegna`, `data_restituzione`, `id_libro`) VALUES
(1, 'Consegna 1', 2, '2021-10-01', '2021-11-01', 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `generi`
--

CREATE TABLE `generi` (
  `id_genere` int(11) NOT NULL,
  `descrizione` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `generi`
--

INSERT INTO `generi` (`id_genere`, `descrizione`) VALUES
(1, 'Fantascienza'),
(2, 'Romanzo'),
(3, 'Avventura e Azione'),
(4, 'Horror'),
(5, 'Umorismo'),
(6, 'Religione'),
(7, 'Sport'),
(8, 'Musica'),
(9, 'Gastronomia'),
(10, 'Erotismo');

-- --------------------------------------------------------

--
-- Struttura della tabella `libri`
--

CREATE TABLE `libri` (
  `id_libro` int(11) NOT NULL,
  `titolo` varchar(50) DEFAULT NULL,
  `id_autore` int(11) DEFAULT NULL,
  `prefazione` text DEFAULT NULL,
  `id_casa_editrice` int(11) DEFAULT NULL,
  `id_genere` int(11) DEFAULT NULL,
  `isbn` int(11) DEFAULT NULL,
  `numero_pagine` int(11) DEFAULT NULL,
  `lingua` varchar(50) DEFAULT NULL,
  `quantita` int(11) DEFAULT NULL,
  `url_copertina` varchar(100) DEFAULT NULL,
  `id_scaffale` int(11) DEFAULT NULL,
  `id_ripiano` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `libri`
--

INSERT INTO `libri` (`id_libro`, `titolo`, `id_autore`, `prefazione`, `id_casa_editrice`, `id_genere`, `isbn`, `numero_pagine`, `lingua`, `quantita`, `url_copertina`, `id_scaffale`, `id_ripiano`) VALUES
(1, 'Harry Potter e la pietra filosofale', 1, 'All’inizio della storia Harry vive con gli zii in un sobborgo di Londra. È un ragazzo infelice, soggetto alle vessazioni degli zii e del cugino, finché un giorno arriva una lettera, portata da un gufo, in cui si dice che Harry è chiamato a frequentare la Scuola di magia e stregoneria di Hogwarts. Gli zii fanno di tutto per nascondere la notizia e impedire al ragazzo di partire e alla fine Hagrid, il custode della scuola, dovrà andare di persona per portare via Harry. Da Hagrid Harry viene a sapere la sua storia, di essere un mago e della morte dei suoi genitori per mano di Voldemort.', 1, 2, 214748365, 304, 'Italiano', 5, 'https://images-na.ssl-images-amazon.com/images/I/51q5l-TtOUL._SX320_BO1,204,203,200_.jpg', 1, 2),
(2, 'Harry Potter e la camera dei segreti', 1, 'A Privet Drive, durante le vacanze estive, mentre la famiglia Dursley ha invitato a cena i coniugi Mason, due potenziali clienti della ditta di zio Vernon, Harry Potter viene relegato nella sua nuova stanza, dove si domanda perché i suoi amici non gli abbiano scritto durante tutta l\'estate. Un elfo domestico di nome Dobby compare all\'improvviso nella stanza di Harry e lo avverte di non tornare a Hogwarts, poiché altrimenti la sua vita sarebbe in pericolo. L\'elfo poi confessa di aver nascosto le lettere degli amici di Harry per fargli credere che si fossero dimenticati di lui, sperando che a seguito di ciò il ragazzo non avrebbe più voluto tornare ad Hogwarts. Nonostante tutto, Harry vuole tornare a scuola, perciò Dobby decide di eseguire una magia, facendo cadere a terra la torta preparata da zia Petunia, per poi scomparire. Un gufo irrompe nel salotto dei Dursley, spaventando i Mason e portando a Harry una lettera ufficiale del Ministero della Magia, nella quale gli viene ricordato il divieto per i maghi minorenni di effettuare magie al di fuori della scuola e avvertendolo che, se il fatto si ripeterà, verrà espulso. I Mason fuggono terrorizzati e zio Vernon, avendo scoperto che Harry non può fare magie fuori dalla scuola, decide di non permettergli di tornare ad Hogwarts, rinchiudendolo nella sua stanza e mettendogli delle sbarre alla finestra.', 1, 2, 214743564, 309, 'Italiano', 4, 'https://images-na.ssl-images-amazon.com/images/I/71CUTxwwt6L.jpg', 1, 2),
(3, 'Harry Potter e il prigioniero di Azkaban', 1, 'Harry Potter sta frequentando il terzo anno a Hogwarts e questa volta deve difendersi da un pericoloso assassino, Sirius Black, scappato dalla sorvegliata prigione per maghi di Azkaban e legato alla famiglia del piccolo mago.', 1, 2, 214484347, 400, 'Italiano', 7, 'https://images-na.ssl-images-amazon.com/images/I/71MRVoDMtDL.jpg', 1, 2),
(4, 'Harry Potter e il calice di fuoco', 1, 'Durante l\'estate dopo il terzo anno scolastico, Harry Potter sogna che Lord Voldemort e il suo servo Codaliscia, alias Peter Minus, hanno trovato rifugio presso la villa abbandonata dei Riddle a Little Hangleton. Frank Bryce, l\'anziano custode babbano della casa, nota una luce proveniente dalla villa e va a vedere chi siano gli intrusi, ma viene scoperto dal serpente di Voldemort, Nagini, e ucciso dal Signore Oscuro in persona.\nQualche giorno dopo, i Weasley invitano Harry ad assistere alla finale della Coppa del Mondo di Quidditch, disputata tra Irlanda e Bulgaria. La vittoria va all\'Irlanda nonostante il cercatore della Bulgaria, Viktor Krum, uno dei migliori cercatori in circolazione, riesca a prendere il Boccino d\'oro. Al termine dei festeggiamenti, l\'accampamento dei maghi al di fuori dello stadio di Quidditch viene attaccato da un gruppo di Mangiamorte, che fanno apparire in cielo il Marchio Nero, simbolo di Lord Voldemort.', 1, 2, 247487647, 656, 'Italiano', 3, 'https://images-na.ssl-images-amazon.com/images/I/71zf3P+mSXL.jpg', 1, 2),
(5, 'Harry Potter e l\'Ordine della Fenice J. K. Rowling', 1, 'Una volta terminato il quarto anno alla scuola di magia e stregoneria di Hogwarts, che si è concluso con il ritorno di Lord Voldemort, Harry Potter torna per l\'estate dai suoi zii babbani.\r\nUn pomeriggio, mentre litiga con il cugino Dudley Dursley, Harry viene aggredito da due Dissennatori ed è costretto a ricorrere all\'Incanto Patronus per salvare Dudley. Soccorso da Arabella Figg, sua vicina di casa che si rivelerà essere una Maganò, Harry torna dagli zii con Dudley ferito e riceve una lettera che gli annuncia di essere stato espulso da Hogwarts per aver usato la magia fuori dalla scuola (cosa di solito consentita ai maghi minorenni solamente in occasioni di emergenza).', 1, 2, 274813647, 853, 'Italiano', 4, 'https://images-na.ssl-images-amazon.com/images/I/712w1DGRizL.jpg', 1, 2),
(6, 'Harry Potter e il Principe Mezzosangue J. K. Rowli', 1, 'Il sesto libro della saga inizia con un cambio al vertice del Ministero della Magia: il ministro Cornelius Caramell abbandona l\'incarico perché allontanato dopo aver negato per un anno intero il ritorno di Lord Voldemort e viene sostituito da Rufus Scrimgeour.\r\nIn seguito al ritorno annunciato del Signore Oscuro nel precedente libro, la situazione del mondo magico è dominata da paura e terrore: i Mangiamorte hanno già compiuto vari attacchi, che hanno avuto conseguenze anche nel mondo dei babbani, con la complicità dei Dissennatori, Diagon Alley è ormai semideserta e molte famiglie magiche sono contrarie al ritorno dei propri figli ad Hogwarts.', 1, 2, 244883647, 576, 'Italiano', 2, 'https://images-na.ssl-images-amazon.com/images/I/7161khaYW0L.jpg', 1, 2),
(7, 'Harry Potter e i doni della morte', 1, 'Con l\'avvicinarsi del suo diciassettesimo compleanno, Harry Potter rischia di perdere la protezione offerta dalla casa degli zii; i Dursley vengono quindi trasferiti per la loro sicurezza, mentre l\'Ordine della Fenice si prepara a scortare Harry verso la Tana, trasformando sei suoi affiliati in copie fisiche del ragazzo in modo da confondere eventuali inseguitori. Durante il tragitto i Mangiamorte li attaccano e Alastor Moody e Edvige vengono uccisi. Lord Voldemort tenta di assassinare Harry, ma una reazione inattesa tra le loro due bacchette glielo impedisce.', 1, 2, 217488347, 672, 'Italiano', 4, 'https://images-na.ssl-images-amazon.com/images/I/51-+axLQBWL._SX320_BO1,204,203,200_.jpg', 1, 2),
(8, 'I promessi Sposi', 3, 'I Promessi Sposi sono un\'opera scritta da Alessandro Manzoni e rappresenta uno dei testi\r\nfondamentali della lingua italiana tanto da essere letto e studiato nel biennio delle scuole superiori.\r\nL\'epoca di elaborazione dell\'opera è la seconda metà dell\'800 e la sua diffusione fu enorme tanto da\r\npoter parlare di un vero e proprio bestseller per l\'epoca, le ragioni di ciò vanno ricercate nei\r\ncontenuti e nelle scelte linguistiche. La vicenda è ambientata nella Lombradia del XVII secolo\r\nsottoposta alla dominazione spagnola, tale scelta non è casuale dal momento che anche negli anni in\r\ncui Manzoni compone l\'opera, la Lombardia è costretta a subire un\'altra dominazione, quella\r\naustriaca, contro la quale il movimento risorgimentale si batte al fine di ottenere l\'indipendenza\r\ndella penisola. Inoltre l\'autore opera delle importantissime scelte linguistiche in una realtà come\r\nquella italiana nella quale la lingua parlata corrispondeva ai dialetti e quella letteraria era legata a\r\nmodelli tradizionali sconosciuti alla maggioranza della popolazione. Insomma si voleva unificare la\r\npenisola, ma non sia aveva una lingua comune. Lo scopo di Manzoni era proprio quello di dare agli\r\nitaliani un idioma comune e condiviso e lo fa prendendo come modello il fiorentino parlato dalle\r\nclassi colte di Firenze, l\'operazione è straordinaria: l\'autore crea una lingua organica e sistematica e\r\ndona al suo Paese qualcosa di imprescindibile e cioè un modo per comunicare e per capirsi. L\'unità\r\nlinguistica è però molto posteriore all\'unità politica (1870): le classi subalterne restano ancora per\r\ndecenni ai margini della vita politica e sociale, e continuano a parlare i vari dialetti. Lo strumento di\r\ndiffusione di questa nuova lingua sarà la scuola: i Promessi Sposi saranno letti in tutte le scuole del\r\nRegno d\'Italia in edizioni in cui si riportava il testo manzoniano e a fianco la “traduzione” nel\r\ndialetto del posto.', 2, 2, 742655214, 592, 'Italiano', 6, 'https://images-na.ssl-images-amazon.com/images/I/41UVLfuI4zL._SX319_BO1,204,203,200_.jpg', 1, 2),
(9, 'Io, Robot', 4, 'Io, robot è una raccolta di racconti di fantascienza di Isaac Asimov, del 1950. Contiene 9 storie scritte fra il 1940 e il 1950, che hanno per protagonisti i robot positronici. Sono basate sul tema delle tre leggi della robotica, sulle loro contraddizioni e le loro apparenti falle.', 2, 1, 853641145, 253, 'Inglese', 2, 'https://www.itacalibri.it/System/188172/Io-Robot-Asimov-6.jpg', 2, 3),
(10, 'Tutti i racconti Vol 1/2', 4, 'Tutti i racconti (The Complete Stories) è un\'antologia di racconti di fantascienza di Isaac Asimov, raggruppata in 2 volumi usciti rispettivamente nel 1990 e nel 1992. Contengono insieme oltre 80 storie scritte fra gli anni quaranta e settanta, più lettere e poesie scritte da Asimov stesso. Entrambi i volumi sono stati pubblicati in italiano, nel 1991 e nel 1992, più un terzo volume, non presente nella collana originale, nel 1996.', 2, 1, 741329546, 704, 'Inglese', 3, 'https://images-na.ssl-images-amazon.com/images/I/51nt8WnKTVL._SX340_BO1,204,203,200_.jpg', 2, 3),
(11, ' Fare musica. Discografia, piattaforme, tecnologie', 5, 'In questi ultimi anni la musica e la sua diffusione stanno vivendo accelerazioni inedite, mai registrate prima, che investono tutti gli aspetti della creazione, dell\'esecuzione e dell\'ascolto, ma anche del mercato e dei modelli di marketing. La spiegazione la conosciamo bene: le tecnologie e la loro rapida e continua innovazione sono alla base di questa metamorfosi, che produce effetti a catena tanto veloci da impedire spesso persino valutazioni compiute. Questo libro parla dell\'evoluzione della discografia, delle major, delle etichette indipendenti, di download, di Spotify e di come lo streaming abbia rivoluzionato l\'industria musicale. Comprendiamo così quali aspetti hanno influito sull\'affermarsi di nuove modalità di registrazione, riproduzione e fruizione del suono, attraverso storie e testimonianze di esperti, artisti e discografici.', 1, 8, 756963852, 140, 'Italiano', 8, 'https://images-na.ssl-images-amazon.com/images/I/91puqt7+JML.jpg', 3, 3),
(12, 'Buona Apocalisse a tutti!', 7, 'L\'Apocalisse sta per avverarsi e, pertanto, viene consegnato sulla Terra l\'Anticristo affinché metta in moto gli eventi che porteranno alla distruzione del pianeta e la guerra finale tra Paradiso e Inferno. Tuttavia, Aziraphale e Crowley, un angelo e un demone che vivono sulla Terra dall\'inizio dei tempi come rappresentanti delle rispettive fazioni (finendo per perdere parte dei loro attributi angelici e demoniaci e stringere un\'alleanza sfociante nell\'amicizia), decidono di prevenire l\'Apocalisse essendosi ormai affezionati alla vita sulla Terra; pertanto, tentano di influenzare l\'Anticristo nella sua crescita in modo che non dimostri inclinazioni né particolarmente volte al bene né al male e non scateni l\'Armageddon una volta compiuti gli undici anni.', 2, 5, 563256942, 288, 'Inglese', 3, 'https://images-na.ssl-images-amazon.com/images/I/81mm0XtDGGL.jpg', 2, 4),
(13, 'L\'intrepida Tiffany e i Piccoli Uomini Liberi', 6, 'Il libro racconta la presa di coscienza di sé, del proprio ruolo, e della riscoperta della propria nonna da parte della giovane Tiffany Aching, una ragazza di nove anni, cresciuta in una famiglia di pastori di lunga tradizione; ma è anche la storia di un\'intrusione di un mondo in un altro, e del contatto tra una ragazzina e vari esseri mitici, alcuni nemici e altri alleati, tra cui spicca decisamente il variopinto popolo dei Piccoli Uomini Liberi, spiritelli dediti all\'abigeato, alle risse e alle bevute, ma dotati di una struttura fortemente matriarcale; oppure una storia alla Labyrinth - Dove tutto è possibile, con un bambino che viene rapito dalla Regina delle Fate e deve essere salvato; tuttavia la storia racconta molto più di questo fatto. In realtà il libro ha una grande varietà di temi, non ultima la satira di luoghi comuni sulle fiabe.', 2, 5, 632596148, 311, 'Italiano', 4, 'https://images-na.ssl-images-amazon.com/images/I/41Vatpi8WSL.jpg', 2, 4),
(14, 'Il signore del bosco', 8, 'L\'infanzia difficile, sballottato come un pacco tra la provincia di Varese, Treviso e la Sicilia. La scoperta della letteratura, delle arti marziali, della filosofia orientale. Gli amici, il carcere, l\'amore. La musica, il successo, con singoli come \"7 miliardi\", \"Polo Nord\" e tanti altri. E soprattutto, ad abbracciare tutto, la provincia come scelta di vita, come culla di contraddizioni - il lago, i \"fantaboschi\" che possono essere luoghi da cartolina oppure tetri e minacciosi. \"Il signore del bosco\" è il racconto duro, sincero fino al sangue, per parole e immagini, di uno degli artisti più solidi e interessanti e complessi della scena rap italiana.', 2, 8, 625842162, 216, 'Italiano', 10, 'https://images-na.ssl-images-amazon.com/images/I/41jGsyyWDFL._SX344_BO1,204,203,200_.jpg', 3, 3),
(15, 'Shining', 2, 'La storia è ambientata nell\'immaginaria cittadina di Stovington (Vermont) tra la fine del 1975 e gli inizi del 1976. Jack Torrance, che ha perso il proprio lavoro d\'insegnante di letteratura inglese dopo aver aggredito uno studente di nome George Hatfield, cerca di portare a termine una commedia alla quale lavora da tempo e accetta un lavoro offertogli dall\'amico Al Shockley: trasferirsi come guardiano invernale all\'Overlook Hotel, un imponente albergo costruito all\'inizio del XX secolo, che domina le alte montagne del Colorado e situato a 65 chilometri dal più vicino centro abitato. Jack accetta la proposta e porta con sé la moglie Wendy e il figlio Danny di cinque anni. La famiglia spera di ritrovare nell\'albergo un periodo di serenità, correndo il rischio però di rimanere isolati da tutto il mondo esterno a causa della neve che li bloccherà durante l\'inverno. Appena arrivati Jack ha un colloquio col direttore dell\'albergo, Stuart Ullman, il quale informa che molti anni prima Delbert Grady, guardiano invernale di quell\'anno, impazzì e si uccise dopo aver fatto a pezzi la moglie e le sue due figlie. Quello è stato solo uno dei tanti omicidi e suicidi avvenuti nell\'albergo.', 2, 4, 429615874, 429, 'Italiano', 1, 'https://th.bing.com/th/id/OIP.P17TvlmqSYXyL6jVHKRAuQHaJ4?pid=ImgDet&rs=1', 4, 2),
(16, 'It', 2, 'Ottobre 1957. Una misteriosa entità multiforme si risveglia da un letargo di 27 anni trascorso nelle viscere della città di Derry, Maine, e assume la forma del clown Pennywise. Il primo incontro avviene con un bambino di sei anni, Georgie Denbrough, che sta tentando di recuperare una barchetta di carta da un canale di scolo. Pennywise avvicina Georgie al tombino per rendergli la barchetta, poi lo uccide brutalmente divorandogli il braccio sinistro.', 2, 4, 451152584, 1216, 'Italiano', 3, 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501175466/it-9781501175466_hr.jpg', 4, 2),
(17, 'Il meglio di Antonino', 9, 'Le migliori ricette dello chef piú amato d\'Italia selezionate da lui stesso e riunite in un unico volume. Quella di Antonino Cannavacciuolo è una cucina che nasce dal cuore, fatta di ingredienti scelti con cura ed elaborati con passione, sempre attenta a mantenere un perfetto equilibrio fra tradizione e innovazione. Ora, per la prima volta, le preparazioni complete, i suggerimenti per rendere eccezionale ogni piatto e i segreti che hanno conquistato migliaia di appassionati sono raccolti da Antonino in un libro che è una sintesi della sua arte: dall\'antipasto al dolce.', 2, 9, 749511210, 567, 'Italiano', 5, 'https://www.einaudi.it/content/uploads/2020/07/cover_web.jpg', 4, 4),
(18, 'Il pranzo di Natale', 9, '«Nelle feste, in cucina, basta applicare la saggezza delle nonne». I consigli del grande chef per le ricorrenze più importanti dell\'inverno. E visto che buttare il cibo è sempre un peccato, alcuni originali suggerimenti su come recuperare gli avanzi in modo creativo e gustoso. 5 ricette tradizionali rese uniche dal tocco del maestro. 5 invenzioni perché nulla vada sprecato. I ricordi di Antonino. La cena della vigilia, il pranzo di Natale, il cenone di San Silvestro: forse le occasioni per stare insieme più attese da tutti gli italiani. Anche da Antonino Cannavacciuolo. Questo suo nuovo libro è un invito a sedersi a tavola e a rendere certi momenti indimenticabili.', 2, 9, 475515687, 128, 'Italiano', 4, 'https://th.bing.com/th/id/OIP.tt3pTO3FU1LNk0L0lhNE0gHaLi?pid=ImgDet&rs=1', 4, 4),
(19, 'Se vuoi fare il figo usa lo scalogno (VINTAGE)', 10, 'Ricette classiche della tradizione e piatti rivisitati dall\'estro di uno chef stellato, lezioni di cucina con procedimenti spiegati fin nei minimi dettagli (per non sbagliare) e racconti di una vita ai fornelli e non: dai picnic al lago con il sugo di pomodoro fresco della mamma, alla cucina di Gualtiero Marchesi a Milano e di Alain Ducasse a Montecarlo. Carlo Cracco accompagna gli amanti della cucina (veri esperti e semplici principianti) in un percorso esclusivo e innovativo che permetterà a tutti di apprendere le preparazioni di base, le tecniche di cottura dei cibi, i trucchi e i segreti ai fornelli, con la soddisfazione garantita di portare in tavola piatti di alto livello. Si impara cucinando, eseguendo le ricette dello chef che con precisione e rigore fa da Cicerone nell\'affascinante universo del cibo. Un corso di cucina unico, adatto sia a chi muove i primi passi, sia a chi vuole avere l\'opportunità di mettersi alla prova con le idee più sorprendenti della cucina di Carlo Cracco.', 1, 9, 455415464, 249, 'Italiano', 2, 'https://cs.ilgiardinodeilibri.it/cop/s/w501/se-vuoi-fare-il-figo-usa-lo-scalogno.jpg', 4, 4),
(20, 'I dolci di casa con il tocco dello chef', 10, 'Carlo Cracco si lancia in una nuova avventura: la pasticceria.Per la prima volta entra nella tua cucina con tanti consigli, idee e trucchi per preparare dolci, torte e biscotti. Lo chef più famoso d’Italia mette a disposizione la sua arte reinterpretando con il suo tocco le ricette di pasticceria più amate. Dalla torta di mele al salame di cioccolato, dalla crostata al tiramisù fino alla veneziana, oltre 70 ricette tutte da gustare, per aggiungere una marcia in più ai nostri peccati di gola.• Dolci da forno (torta di mele classica ed evolution, torta alle pere e gianduia, plumcake affogato, torta variegata, crostate Sicilia, alle ciliegie, di albicocca, con crema alla vaniglia e frutta fresca, clafoutis alle ciliegie, tarte satin, torta paradiso, Pan di Spagna, torta di ricotta)• Dolci al cucchiaio (tiramisù versione torta e con crumble alla liquirizia, zuppa inglese, Chantilly di frutta fresca, semifreddo, budino ‘sbagliato’ alla crema e vaniglia, al cioccolato e versione bonet, semifreddo al pistacchio e cioccolato bianco)• Dolci della tradizione (pan meino, pan dei morti, ciambellone, pasticciotto, chiacchiere, babà, krapfen, sbrisolona al cacao, zuccotto, parrozzo, zeppole, brioche con il tuppo)• Dolci al cioccolato (cioccolate calde al cioccolato bianco, al cioccolato al latte e al fondente, torta ai tre cioccolati, frizzantini, salame al cioccolato, crostate al cioccolato classica e con ganache al cioccolato fondente)• Dolci senza farina (caprese bianca con scorza di mandarino e al cioccolato, torta al limone e prugne, torta alla zucca, torta alle carote)• Lievitati (veneziane ai canditi, alla crema e al cioccolato, pan brioche salato e dolce, pane ai semi, focaccia dolce e salata)• Biscotteria (sablé al cioccolato fondente e peperoncino, al cioccolato al latte, nocciola e sale, al pistacchio e limone, frollini al cioccolato bianco e pompelmo, al limone e timo, al cioccolato fondente e arancia, crumble Africa, alla frutta secca e svuota dispensa, baci di dama classici, affumicati e al tè Matcha, meringhe al pistacchio e sale, al cacao e nocciole, alla cannella)', 1, 9, 545654640, 208, 'Italiano', 6, 'https://th.bing.com/th/id/OIP.kfDFOo1v5QNbEh1H4VySWwHaJz?pid=ImgDet&rs=1', 4, 4),
(23, 'Gesù secondo il Nuovo Testamento', 12, 'James Dunn, uno dei più rispettati e prolifici biblisti del nostro tempo, ha pubblicato le sue ricerche sulle origini del cristianesimo in numerosi commentari, testi e saggi. In questo volume di facile accesso, destinato a un pubblico largo e nondimeno frutto di uno studio cinquantennale, Dunn si dedica a delucidare qual è la testimonianza resa a Gesù in tutto il Nuovo Testamento, dal Vangelo secondo Matteo fino all\'Apocalisse di Giovanni.\r\nIl movimento cristiano, i cui scritti sono rappresentati dai vangeli canonici, dagli Atti e dalle lettere, ha avuto inizio con il racconto su una figura storica e precisa, le cui parole e le cui azioni erano evidentemente diverse dalla norma quanto basta per suscitare attenzione. Ecco allora che questo Gesù secondo il Nuovo Testamento punta continuamente a riscoprire la meraviglia di quei primi testimoni e, così, arricchisce di molto la nostra stessa comprensione di Gesù.\r\nUn\'opera di grande valore, preziosa per la competenza del suo autore ed essenziale per il modo fresco di riproporre la figura di Gesù Cristo.', 1, 6, 715655541, 208, 'Inglese', 7, 'https://img.libreriadelsanto.it/books/i/IOuwclnpulEP_s4-mb.jpg', 5, 4),
(24, 'Laudato si\'', 11, 'Il nome Laudato si\' deriva dal Cantico delle creature di san Francesco, che loda il Signore per le sue meravigliose creature. ... L\'argomento principale trattato è l\'interconnessione tra crisi ambientale della Terra e crisi sociale dell\'umanità, ossia l\'ecologia integrale.', 2, 6, 456951384, 238, 'Italiano', 4, 'https://d3s1b1zelykba8.cloudfront.net/Articulo/Original/1473.jpg', 4, 4),
(25, 'Fallo felice', 13, 'Il desiderio di ogni donna (e forse anche di ogni uomo) è vivere con il proprio partner (che sia di turno o abituale) un sano, pieno e libero rapporto fisico e di piacere. E allora: \"Non credete anche voi che, quando siamo brave a fare qualcosa, ci divertiamo di più nel farlo? Il sesso non dovrebbe essere un\'esperienza da consumare, ma un\'esperienza da gustare, dall\'inizio alla fine. E perché questo accada, dovete sapere quello che state facendo\". Senza falsi pudori e sfatando il pregiudizio secondo cui non si può essere amanti sopraffine e al tempo stesso fidanzate, mogli o madri di famiglia, Lou Paget ci mette a disposizione i frutti di anni di seminari, in cui centinaia di donne si sono scambiate esperienze e consigli. Per migliorare la propria vita sessuale, l\'armonia di coppia e il rapporto con se stessi.', 2, 10, 954516484, 207, 'Inglese', 5, 'https://www.macrolibrarsi.it/data/cop/zoom/f/fallo-felice-libro-73016.jpg', 1, 4),
(26, 'Ti voglio da sempre', 14, 'Tamara proprio non ci sta. Conosce Kyle da parecchio tempo, ma lui non le ha mai dedicato le attenzioni che rivolge alle altre ragazze e la considera solo per scambiarsi gli appunti delle lezioni o fare due chiacchiere. Tamara vuole qualcosa di più. Vuole essere una delle sue ragazze, una di quelle che Kyle si porta a letto per divertirsi e che scarica il giorno dopo. Non è innamorata, così pensa. Semplicemente, lo desidera. Quando gli spiattellerà in faccia la sua ardita richiesta, tra dubbi e titubanze, Kyle le regalerà ciò che desidera. E allora… scoppieranno scintille. Ma la verità è un’altra: Tamara non è mai stata invisibile agli occhi di Kyle e non potrà mai essere una delle tante ragazze. Lei è il suo passato, il suo presente, ciò che ha sempre voluto.', 1, 10, 855451454, 312, 'Italiano', 3, 'https://m.media-amazon.com/images/I/51ak1phHqSL.jpg', 1, 4),
(27, 'Inter nos. Interismi 2021', 16, '«Il mondo si divide in due. Ci sono quelli che amano i gatti, Londra e l\'Inter. E quelli cui piacciono i cani, Parigi e la Juventus. L\'Inter (come i gatti e Londra) è fascinosa e imprevedibile. La Juve (come i cani e Parigi) è solida e rassicurante. Il resto è contorno.» Lo scudetto 2021 ce lo ricorda, perché segna il ritorno alla vittoria dei nerazzurri allenati da Antonio Conte. Ma anche la batosta dei bianconeri del divo Ronaldo, e la fine di un\'epoca, dopo nove scudetti di fila. Beppe Severgnini torna a scrivere della sua squadra del cuore, che negli ultimi vent\'anni ha saputo raccontare con passione e ironia, dal disastro (5 maggio 2002) al trionfo (Triplete, 22 maggio 2010), dal post-Mourinho all\'arrivo di Conte, su cui non ha mai avuto dubbi: «Un ottimo allenatore e un grande attore». Inter nos vuol dire «tra di noi». In questo libro si intrecciano l\'interiorità del tifoso nerazzurro, le difficoltà del lungo interregno (2011-2021), le interposizioni con i fulminanti ritratti della formazione titolare (finalmente ce n\'è una!), le interruzioni di un campionato affaticato dalla pandemia. E le interferenze. Come il goffo tentativo, ispirato da Real Madrid e Juventus, di creare una Superlega europea. Inter nos è una dichiarazione d\'amore, divertente e serissima, che va oltre il calcio e arriva alle radici della passione sportiva: ricordi e famiglie, figli e amici, ansie ed euforia, fibrillazioni e fantasia (Lautaro e Lukaku, quanto li abbiamo aspettati!). E poi lo scudetto, finalmente.', 2, 7, 565468414, 160, 'Italiano', 4, 'https://img.ibs.it/images/9788828207627_0_0_300_75.jpg', 3, 2),
(28, 'Libero di sognare', 15, 'A cosa servono il potere dell\'immaginazione, la determinazione e il coraggio? A realizzare il sogno di un bambino: diventare leggenda. Questa storia comincia a Travagliato, nella campagna di Brescia, con un\'infanzia scandita dal ritmo della vita contadina. Su quei campi Franco Baresi ha dato i primi calci al pallone e ha cominciato a inventare il gioco semplice ed elegante che l\'ha reso un mito. A quattordici anni inizia l\'avventura nel Milan, e non ne ha ancora compiuti diciotto quando esordisce in Serie A. Fin dall\'inizio Baresi ha conosciuto il calcio del coraggio gentile, e qui racconta il suo viaggio attraverso le tappe di una carriera straordinaria, svela le emozioni che hanno accompagnato le brillanti vittorie e i momenti di crisi, ci fa vivere l\'impresa epocale dei Mondiali \'94, negli Stati Uniti, quando si riprese miracolosamente dopo un grave infortunio al ginocchio. Un lungo viaggio di libertà e passione, fino alla partita d\'addio nell\'ottobre del 1997 e il primo indimenticabile ritiro di una grande maglia del calcio italiano: la numero 6 del Milan. \"Forse qualcosa cambia tra i campetti improvvisati di campagna e i migliori stadi del mondo, ma io sono sempre rimasto lo stesso. Io sono Franco Baresi. E sono nato così: libero.\"', 1, 7, 545465416, 128, 'Italiano', 3, 'https://th.bing.com/th/id/OIP.xuIOreclG3c6zFFsLjA31QHaLn?pid=ImgDet&rs=1', 3, 2),
(29, 'Il richiamo della foresta', 17, 'Il romanzo è ambientato inizialmente in California, nella soleggiata Valle di Santa Clara, nel 1897. Il cane Buck, figlio di un maschio sanbernardo e di una madre pastore scozzese, vive nella grande villa di un magistrato, il giudice Miller. Inizia la \"corsa all\'oro del Klondike\", e aumenta così la richiesta di cani da slitta, unico mezzo di locomozione nella gelata estremità settentrionale del continente americano, e pertanto Buck viene venduto dal giardiniere del suo padrone a un losco e brutale trafficante.', 2, 3, 784556345, 144, 'Italiano', 7, 'https://th.bing.com/th/id/OIP._f0cPZ1Ok5VG-2oUC3wtoQHaLE?pid=ImgDet&rs=1', 5, 2),
(30, 'Moby Dick', 18, 'Il narratore, Ismaele, è un marinaio in procinto di partire da Manhattan. Nonostante «sia oramai piuttosto vecchio del mestiere» per le esperienze vissute nella marina mercantile, questa volta ha deciso che per il suo prossimo viaggio s\'imbarcherà su una baleniera. In una notte di dicembre giunge così alla Locanda dello Sfiatatoio, presso New Bedford (Massachusetts), accettando di dividere un letto con uno sconosciuto al momento assente. Quando il suo compagno di branda, un tatuatissimo ramponiere polinesiano chiamato Queequeg, fa ritorno a ora tarda e scopre Ismaele sotto le sue coperte, i due uomini si spaventano reciprocamente. Diventati presto amici, i due decideranno di imbarcarsi assieme dall\'isola di Nantucket sulla Pequod, «...bastimento vecchio e inusitato... una nave della vecchia scuola, piuttosto piccola... Stagionata e tinta dalle intemperie di tutti e quattro gli oceani. Un veliero cannibale, che si ornava delle ossa cesellate dei suoi nemici', 2, 3, 448465456, 798, 'Italiano', 3, 'https://th.bing.com/th/id/OIP.2PzEhqteeiukUpy8B9kE9AHaLH?pid=ImgDet&rs=1', 5, 2),
(31, 'Il Necronomicon: ovvero i racconti delle leggi dei', 19, '\"Non è morto ciò che in eterno può attendere. E col passar di strani eoni anche la morte può morire.\"', 2, 4, 651646415, 630, 'Italiano', 5, 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZhN7G9MU05xed6eP6-kE5pQk5suL_xkcXdtN_NV0ihWNF', 4, 2),
(32, 'Cthulhu', 19, 'Horror? Fantasmi? Fantascienza? A ottant\'anni dalla morte di Lovecraft, le sue famose storie dell\'orrore, in particolare quelle del raccapricciante \"mito di Cthulhu\", continuano a far discutere gli appassionati, incerti se collocarle nella categoria del fantastico più originale o delle cronache di un possibile domani, di un oggi \"laterale\" in cui antichi misteri si aprono come crepe nel tessuto della realtà. Questo volume costituisce una vetrina italiana dei mostri di Lovecraft, con i racconti e i romanzi che ne hanno decretato il successo in ogni parte del mondo. Dal \"Richiamo di Cthulhu al \"Caso di Charles Dexter Ward\", dalla \"Casa delle streghe\" alle \"Montagne della follia\", tutti i testi di un mito che è entrato a far parte dell\'immaginario moderno, ispirando il cinema e persino un famoso gioco di ruolo. ', 2, 4, 554546544, 612, 'Inglese', 4, 'https://m.media-amazon.com/images/I/515ZxYcwwGL.jpg', 4, 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `ripiani`
--

CREATE TABLE `ripiani` (
  `id_ripiano` int(11) NOT NULL,
  `descrizione` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `ripiani`
--

INSERT INTO `ripiani` (`id_ripiano`, `descrizione`) VALUES
(1, 'Primo'),
(2, 'Secondo'),
(3, 'Terzo'),
(4, 'Quarto'),
(5, 'Quinto');

-- --------------------------------------------------------

--
-- Struttura della tabella `scaffali`
--

CREATE TABLE `scaffali` (
  `id_scaffale` int(11) NOT NULL,
  `descrizione` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `scaffali`
--

INSERT INTO `scaffali` (`id_scaffale`, `descrizione`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'C'),
(4, 'D'),
(5, 'E');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `anagrafiche`
--
ALTER TABLE `anagrafiche`
  ADD PRIMARY KEY (`id_anagrafica`);

--
-- Indici per le tabelle `autori`
--
ALTER TABLE `autori`
  ADD PRIMARY KEY (`id_autore`);

--
-- Indici per le tabelle `case_editrici`
--
ALTER TABLE `case_editrici`
  ADD PRIMARY KEY (`id_casa_editrice`);

--
-- Indici per le tabelle `consegne`
--
ALTER TABLE `consegne`
  ADD PRIMARY KEY (`id_consegna`),
  ADD KEY `id_anagrafica` (`id_anagrafica`),
  ADD KEY `consegne_ibfk_2` (`id_libro`);

--
-- Indici per le tabelle `generi`
--
ALTER TABLE `generi`
  ADD PRIMARY KEY (`id_genere`);

--
-- Indici per le tabelle `libri`
--
ALTER TABLE `libri`
  ADD PRIMARY KEY (`id_libro`),
  ADD KEY `id_autore` (`id_autore`),
  ADD KEY `id_casa_editirce` (`id_casa_editrice`),
  ADD KEY `id_genere` (`id_genere`),
  ADD KEY `id_ripiano` (`id_ripiano`),
  ADD KEY `id_scaffale` (`id_scaffale`);

--
-- Indici per le tabelle `ripiani`
--
ALTER TABLE `ripiani`
  ADD PRIMARY KEY (`id_ripiano`);

--
-- Indici per le tabelle `scaffali`
--
ALTER TABLE `scaffali`
  ADD PRIMARY KEY (`id_scaffale`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `anagrafiche`
--
ALTER TABLE `anagrafiche`
  MODIFY `id_anagrafica` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `autori`
--
ALTER TABLE `autori`
  MODIFY `id_autore` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT per la tabella `case_editrici`
--
ALTER TABLE `case_editrici`
  MODIFY `id_casa_editrice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `consegne`
--
ALTER TABLE `consegne`
  MODIFY `id_consegna` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `generi`
--
ALTER TABLE `generi`
  MODIFY `id_genere` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT per la tabella `libri`
--
ALTER TABLE `libri`
  MODIFY `id_libro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT per la tabella `ripiani`
--
ALTER TABLE `ripiani`
  MODIFY `id_ripiano` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `scaffali`
--
ALTER TABLE `scaffali`
  MODIFY `id_scaffale` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `consegne`
--
ALTER TABLE `consegne`
  ADD CONSTRAINT `consegne_ibfk_1` FOREIGN KEY (`id_anagrafica`) REFERENCES `anagrafiche` (`id_anagrafica`) ON DELETE CASCADE,
  ADD CONSTRAINT `consegne_ibfk_2` FOREIGN KEY (`id_libro`) REFERENCES `libri` (`id_libro`) ON DELETE CASCADE;

--
-- Limiti per la tabella `libri`
--
ALTER TABLE `libri`
  ADD CONSTRAINT `libri_ibfk_1` FOREIGN KEY (`id_autore`) REFERENCES `autori` (`id_autore`) ON DELETE CASCADE,
  ADD CONSTRAINT `libri_ibfk_2` FOREIGN KEY (`id_casa_editrice`) REFERENCES `case_editrici` (`id_casa_editrice`) ON DELETE CASCADE,
  ADD CONSTRAINT `libri_ibfk_3` FOREIGN KEY (`id_genere`) REFERENCES `generi` (`id_genere`) ON DELETE CASCADE,
  ADD CONSTRAINT `libri_ibfk_4` FOREIGN KEY (`id_ripiano`) REFERENCES `ripiani` (`id_ripiano`) ON DELETE CASCADE,
  ADD CONSTRAINT `libri_ibfk_5` FOREIGN KEY (`id_scaffale`) REFERENCES `scaffali` (`id_scaffale`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
