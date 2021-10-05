-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Ott 05, 2021 alle 10:32
-- Versione del server: 10.4.20-MariaDB
-- Versione PHP: 8.0.9

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
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `anagrafiche`
--

INSERT INTO `anagrafiche` (`id_anagrafica`, `nome`, `cognome`, `data_nascita`, `indirizzo`, `cap`, `localita`, `provincia`, `telefono_cellulare`, `codice_fiscale`, `email`) VALUES
(1, 'La Rinascente s.p.a.', NULL, NULL, 'Via Garibaldi,33', '70100', 'Bari', 'BA', '39395325545', NULL, ''),
(2, 'Divani & Divani', NULL, NULL, 'Via Gentile, 45', '80100', 'Napoli', 'NA', '39325252514', NULL, ''),
(3, 'Quintavalle s.r.l', NULL, NULL, 'Via dei Bersaglieri,38', '70100', 'Bari', 'BA', NULL, NULL, ''),
(5, 'De Somma s.n.c', NULL, NULL, 'Via Mazzarino, 56', '80100', 'Napoli', 'NA', NULL, NULL, ''),
(6, 'Marino s.r.l.', NULL, NULL, 'Via dei Ciclamini,38', '70100', 'Bari', 'BA', '999999999', NULL, 'info@marinosrl.com'),
(7, 'Giuseppe Caputi', NULL, NULL, 'Via Restivo, 124', '70100', 'Bari', 'BA', NULL, NULL, ''),
(8, 'de cocco', NULL, NULL, 'Via Santa Caterina, 45', '70100', NULL, NULL, NULL, NULL, '');

-- --------------------------------------------------------

--
-- Struttura della tabella `autori`
--

CREATE TABLE `autori` (
  `id_autore` int(11) NOT NULL,
  `descrizione` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `autori`
--

INSERT INTO `autori` (`id_autore`, `descrizione`) VALUES
(1, 'Malavoglia'),
(2, 'Prandello');

-- --------------------------------------------------------

--
-- Struttura della tabella `casa_editrice`
--

CREATE TABLE `casa_editrice` (
  `id_casa_editrice` int(11) NOT NULL,
  `descrizione` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `casa_editrice`
--

INSERT INTO `casa_editrice` (`id_casa_editrice`, `descrizione`) VALUES
(1, 'La Musa'),
(2, 'Barracuni');

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
  `giorni` int(11) DEFAULT NULL,
  `importo` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `consegne`
--

INSERT INTO `consegne` (`id_consegna`, `descrizione`, `id_anagrafica`, `data_consegna`, `data_restituzione`, `giorni`, `importo`) VALUES
(1, 'Consegna 1', 6, '2021-10-06', '2021-10-23', NULL, NULL);

-- --------------------------------------------------------

--
-- Struttura della tabella `genere`
--

CREATE TABLE `genere` (
  `id_genere` int(11) NOT NULL,
  `descrizione` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `genere`
--

INSERT INTO `genere` (`id_genere`, `descrizione`) VALUES
(1, 'Narrativa'),
(2, 'Romanzo');

-- --------------------------------------------------------

--
-- Struttura della tabella `libri`
--

CREATE TABLE `libri` (
  `id_libro` int(11) NOT NULL,
  `titolo` varchar(50) DEFAULT NULL,
  `id_autore` int(11) DEFAULT NULL,
  `prefazione` text DEFAULT NULL,
  `id_casa_editirce` int(11) DEFAULT NULL,
  `id_genere` int(11) DEFAULT NULL,
  `isdm` varchar(15) DEFAULT NULL,
  `ean13` varchar(13) DEFAULT NULL,
  `prezzo` double DEFAULT NULL,
  `id_scaffale` int(11) DEFAULT NULL,
  `id_ripiano` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `libri`
--

INSERT INTO `libri` (`id_libro`, `titolo`, `id_autore`, `prefazione`, `id_casa_editirce`, `id_genere`, `isdm`, `ean13`, `prezzo`, `id_scaffale`, `id_ripiano`) VALUES
(1, 'Malavoglia', 1, 'lorem lipusn', 2, 2, '77-234-567', '8237481641631', 13, 1, 3),
(2, 'Uno nessuno centomila', 2, 'vczafdsfsaf', 1, 1, '1231213', '5641651', 12, 2, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `libri_consegnati`
--

CREATE TABLE `libri_consegnati` (
  `id_libro_consegnato` int(11) NOT NULL,
  `id_consegna` int(11) DEFAULT NULL,
  `id_libro` int(11) DEFAULT NULL,
  `importo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `libri_consegnati`
--

INSERT INTO `libri_consegnati` (`id_libro_consegnato`, `id_consegna`, `id_libro`, `importo`) VALUES
(1, 1, 1, 1),
(2, 1, 2, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `ripiano`
--

CREATE TABLE `ripiano` (
  `id_ripiano` int(11) NOT NULL,
  `descrizione` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `ripiano`
--

INSERT INTO `ripiano` (`id_ripiano`, `descrizione`) VALUES
(1, 'Basso'),
(2, 'Medio'),
(3, 'Alto');

-- --------------------------------------------------------

--
-- Struttura della tabella `scaffalle`
--

CREATE TABLE `scaffalle` (
  `id_scaffale` int(11) NOT NULL,
  `descrizione` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `scaffalle`
--

INSERT INTO `scaffalle` (`id_scaffale`, `descrizione`) VALUES
(1, 'Bianco'),
(2, 'Verde');

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
-- Indici per le tabelle `casa_editrice`
--
ALTER TABLE `casa_editrice`
  ADD PRIMARY KEY (`id_casa_editrice`);

--
-- Indici per le tabelle `consegne`
--
ALTER TABLE `consegne`
  ADD PRIMARY KEY (`id_consegna`),
  ADD KEY `id_anagrafica` (`id_anagrafica`);

--
-- Indici per le tabelle `genere`
--
ALTER TABLE `genere`
  ADD PRIMARY KEY (`id_genere`);

--
-- Indici per le tabelle `libri`
--
ALTER TABLE `libri`
  ADD PRIMARY KEY (`id_libro`),
  ADD KEY `id_autore` (`id_autore`),
  ADD KEY `id_casa_editirce` (`id_casa_editirce`),
  ADD KEY `id_genere` (`id_genere`),
  ADD KEY `id_ripiano` (`id_ripiano`),
  ADD KEY `id_scaffale` (`id_scaffale`);

--
-- Indici per le tabelle `libri_consegnati`
--
ALTER TABLE `libri_consegnati`
  ADD PRIMARY KEY (`id_libro_consegnato`),
  ADD KEY `id_consegna` (`id_consegna`),
  ADD KEY `id_libro` (`id_libro`);

--
-- Indici per le tabelle `ripiano`
--
ALTER TABLE `ripiano`
  ADD PRIMARY KEY (`id_ripiano`);

--
-- Indici per le tabelle `scaffalle`
--
ALTER TABLE `scaffalle`
  ADD PRIMARY KEY (`id_scaffale`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `anagrafiche`
--
ALTER TABLE `anagrafiche`
  MODIFY `id_anagrafica` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT per la tabella `autori`
--
ALTER TABLE `autori`
  MODIFY `id_autore` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `casa_editrice`
--
ALTER TABLE `casa_editrice`
  MODIFY `id_casa_editrice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `consegne`
--
ALTER TABLE `consegne`
  MODIFY `id_consegna` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT per la tabella `genere`
--
ALTER TABLE `genere`
  MODIFY `id_genere` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `libri`
--
ALTER TABLE `libri`
  MODIFY `id_libro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `libri_consegnati`
--
ALTER TABLE `libri_consegnati`
  MODIFY `id_libro_consegnato` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `ripiano`
--
ALTER TABLE `ripiano`
  MODIFY `id_ripiano` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `scaffalle`
--
ALTER TABLE `scaffalle`
  MODIFY `id_scaffale` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `consegne`
--
ALTER TABLE `consegne`
  ADD CONSTRAINT `consegne_ibfk_1` FOREIGN KEY (`id_anagrafica`) REFERENCES `anagrafiche` (`id_anagrafica`);

--
-- Limiti per la tabella `libri`
--
ALTER TABLE `libri`
  ADD CONSTRAINT `libri_ibfk_1` FOREIGN KEY (`id_autore`) REFERENCES `autori` (`id_autore`),
  ADD CONSTRAINT `libri_ibfk_2` FOREIGN KEY (`id_casa_editirce`) REFERENCES `casa_editrice` (`id_casa_editrice`),
  ADD CONSTRAINT `libri_ibfk_3` FOREIGN KEY (`id_genere`) REFERENCES `genere` (`id_genere`),
  ADD CONSTRAINT `libri_ibfk_4` FOREIGN KEY (`id_ripiano`) REFERENCES `ripiano` (`id_ripiano`),
  ADD CONSTRAINT `libri_ibfk_5` FOREIGN KEY (`id_scaffale`) REFERENCES `scaffalle` (`id_scaffale`);

--
-- Limiti per la tabella `libri_consegnati`
--
ALTER TABLE `libri_consegnati`
  ADD CONSTRAINT `libri_consegnati_ibfk_1` FOREIGN KEY (`id_consegna`) REFERENCES `consegne` (`id_consegna`),
  ADD CONSTRAINT `libri_consegnati_ibfk_2` FOREIGN KEY (`id_libro`) REFERENCES `libri` (`id_libro`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
