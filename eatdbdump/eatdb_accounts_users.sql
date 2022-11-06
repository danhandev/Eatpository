-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: eatpositoryinstance.chldu2nftn04.us-west-1.rds.amazonaws.com    Database: eatdb
-- ------------------------------------------------------
-- Server version	8.0.28

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

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
INSERT INTO `accounts_users` VALUES (1,'pbkdf2_sha256$320000$15dTgGuZIuD4bPfbcwIYXo$vLjoyCCgAHMUlWn4GyPwx/2Rocak/rQdapxS2tMJK7g=','2022-11-06 18:35:23.900210',1,'sujin','','','',1,1,'2022-10-03 11:20:55.286184','',NULL,NULL,NULL,'',NULL,NULL),(2,'1234',NULL,0,'admin1','','','',0,1,'2022-10-03 12:13:26.000000','01012341234',1,NULL,1,'',NULL,''),(3,'1234',NULL,0,'admin2','','','',0,1,'2022-10-03 12:14:02.000000','01012341235',1,NULL,2,'',NULL,''),(4,'1234',NULL,0,'admin3','','','',0,1,'2022-10-03 12:14:21.000000','01012341236',1,NULL,3,'',NULL,''),(5,'1234',NULL,0,'admin4','','','',0,1,'2022-10-03 12:14:36.000000','01012341237',1,NULL,4,'',NULL,'');
/*!40000 ALTER TABLE `accounts_users` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-07  3:43:48
