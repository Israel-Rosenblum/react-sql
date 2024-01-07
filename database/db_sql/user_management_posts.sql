-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: user_management
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `body` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,1,'Haaretz and The Jerusalem Post','nccccccccccccccccccccccccccccccccccccccccccc'),(2,1,'The Times of Israel','The Times of Israel provides a mix of news and analysis, with regular updates on political developments.'),(3,2,'The Israel Democracy Institute','The Israel Democracy Institute conducts research on Israeli politics and society, and publishes reports and analysis on a variety of topics.'),(4,2,'The Jerusalem Center for Public','The Jerusalem Center for Public Affairs focuses on foreign policy and security issues, and offers insights into Israeli perspectives on regional and global developments.'),(5,3,'The Israeli-Palestinian Conflict','The Israeli-Palestinian Conflict: A Primer by Rashid Khalidi and Mimi Khalidi provides a concise overview of the historical and political context of the conflict.'),(6,3,'World War II','World War II, often abbreviated as WWII or WW2 It involved the vast majority of the world\'s countries—including all the great powers—eventually forming two military alliances: the Allies and the Axis.'),(8,4,'Appeasement Policy','The policy of appeasement by Western democracies towards these aggressive regimes emboldened them to further their territorial ambitions.'),(9,4,'Treaty of Versailles:','Resentment towards the harsh terms of the Treaty of Versailles imposed on Germany after World War I is also considered a contributing factor.'),(10,5,'German Invasion of Poland:','On September 1, 1939, Germany invaded Poland, prompting declarations of war from Britain and France, marking the official start of the war.'),(11,5,'Basics: We can delves','We can also cover basic computing concepts like operating systems, software, and hardware.'),(12,5,'History: We can explore the','History: We can explore the fascinating evolution of computers, from early mechanical machines like the abacus to the powerful machines we use today'),(18,1,'we are cooming','todey!!!'),(19,1,'we are cooming','todey!!!'),(20,1,'we are cooming','todey!!!');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-07 12:03:47
