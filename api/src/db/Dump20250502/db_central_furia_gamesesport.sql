-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: db_central_furia
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `gamesesport`
--

DROP TABLE IF EXISTS `gamesesport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `gamesesport` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `game` varchar(50) NOT NULL,
  `event` varchar(100) DEFAULT NULL,
  `first_team` varchar(150) NOT NULL,
  `seconde_team` varchar(150) NOT NULL,
  `scoreboard_first_team` int(11) DEFAULT NULL,
  `scoreboard_seconde_team` int(11) DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gamesesport`
--

LOCK TABLES `gamesesport` WRITE;
/*!40000 ALTER TABLE `gamesesport` DISABLE KEYS */;
INSERT INTO `gamesesport` VALUES (1,'CS2','IEM Katowice','Furia','MIBR',16,12,'2025-02-15 21:30:00'),(2,'Valorant','VCT Americas','Furia','Legacy',13,8,'2025-03-05 23:00:00'),(3,'Futset','Copa Furia','Furia','Spirit',5,2,'2025-04-10 18:00:00'),(4,'CS2','BLAST Premier','Furia','Legacy',14,16,'2025-05-02 20:45:00'),(5,'Valorant','Champions Tour','Furia','MIBR',13,11,'2025-06-02 00:15:00'),(6,'CS2','IEM Katowice','Furia','MIBR',2,1,'2025-02-15 21:30:00'),(7,'CS2','IEM Katowice','Furia','COL',2,1,'2025-02-15 21:30:00');
/*!40000 ALTER TABLE `gamesesport` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-02 21:14:51
