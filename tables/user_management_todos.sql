-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: user_management
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
-- Table structure for table `todos`
--

DROP TABLE IF EXISTS `todos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `todos` (
  `id` int NOT NULL,
  `userId` varchar(45) NOT NULL,
  `title` varchar(45) NOT NULL,
  `completed` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todos`
--

LOCK TABLES `todos` WRITE;
/*!40000 ALTER TABLE `todos` DISABLE KEYS */;
INSERT INTO `todos` VALUES (1,'1','Unravel the Mystery of the Missing Cookies','0'),(2,'1','Tame the Wild Data Beasts','0'),(3,'1','Research and Summarize [Topic]','0'),(4,'1','Organize Your Desk','0'),(5,'1','Level Up Your Skills','0'),(6,'2','Explore and Report on Emerging Trends in','0'),(7,'2','Develop a Prototype for a New','0'),(8,'2','Research and Present on a Topic','0'),(9,'2','Avoid Workplace Drama Llama','0'),(10,'2','Level Up Your Skills: Coding Quest','0'),(11,'3','Level Up Your Skills: Coding Quest','0'),(12,'3','Sprint to the Finish Line','0'),(13,'3','Craft the Perfect Customer Pitch','0'),(14,'3','Tame the Wild Data Beasts','0'),(15,'3','Unravel the Mystery of the Missing Cookies','0'),(16,'4','Unravel the Mystery of the Missing Cookies','0'),(17,'4','Crack the Encryption Code','0'),(19,'4','Debug the System Meltdown: Code Calamity','0'),(20,'4','Build Your Dream Team: Synergy Stars','0'),(21,'5','Reach New Heights: Climb the Sales Mountain','0'),(22,'5','Unleash Your Creativity: Design Challenge','0'),(23,'5','Unleash Your Creativity: Design Challenge','0'),(24,'5','Bridge the Communication Gap','0'),(25,'5','Brainstorm Like a Genius: Synergy Session','0');
/*!40000 ALTER TABLE `todos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-27 14:08:43
