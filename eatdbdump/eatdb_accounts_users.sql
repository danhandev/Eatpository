CREATE DATABASE  IF NOT EXISTS `eatdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `eatdb`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: eatdb
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `accounts_users`
--

DROP TABLE IF EXISTS `accounts_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts_users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `phone_number` varchar(12) NOT NULL,
  `role` tinyint(1) DEFAULT NULL,
  `nickname` varchar(30) DEFAULT NULL,
  `user_num` int DEFAULT NULL,
  `emoji` varchar(100) DEFAULT NULL,
  `user_information` varchar(100) DEFAULT NULL,
  `refresh_token` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `phone_number` (`phone_number`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts_users`
--

LOCK TABLES `accounts_users` WRITE;
/*!40000 ALTER TABLE `accounts_users` DISABLE KEYS */;
INSERT INTO `accounts_users` VALUES (1,'pbkdf2_sha256$320000$15dTgGuZIuD4bPfbcwIYXo$vLjoyCCgAHMUlWn4GyPwx/2Rocak/rQdapxS2tMJK7g=','2022-10-03 12:09:54.460071',1,'sujin','','','',1,1,'2022-10-03 11:20:55.286184','',NULL,NULL,NULL,'',NULL,NULL),(2,'1234',NULL,0,'admin1','','','',0,1,'2022-10-03 12:13:26.000000','01012341234',NULL,NULL,NULL,'',NULL,''),(3,'1234',NULL,0,'admin2','','','',0,1,'2022-10-03 12:14:02.000000','01012341235',NULL,NULL,NULL,'',NULL,''),(4,'1234',NULL,0,'admin3','','','',0,1,'2022-10-03 12:14:21.000000','01012341236',NULL,NULL,NULL,'',NULL,''),(5,'1234',NULL,0,'admin4','','','',0,1,'2022-10-03 12:14:36.000000','01012341237',NULL,NULL,NULL,'',NULL,'');
/*!40000 ALTER TABLE `accounts_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-04  3:47:02
