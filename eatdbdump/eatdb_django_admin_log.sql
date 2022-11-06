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
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_accounts_users_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_accounts_users_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_users` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2022-10-03 12:10:20.867939','1','카미야',1,'[{\"added\": {}}]',9,1),(2,'2022-10-03 12:14:00.972214','2','admin1',1,'[{\"added\": {}}]',8,1),(3,'2022-10-03 12:14:19.622352','3','admin2',1,'[{\"added\": {}}]',8,1),(4,'2022-10-03 12:14:34.699138','4','admin3',1,'[{\"added\": {}}]',8,1),(5,'2022-10-03 12:14:50.359502','5','admin4',1,'[{\"added\": {}}]',8,1),(6,'2022-10-03 12:15:54.759295','1','카미야',3,'',9,1),(7,'2022-11-06 18:36:05.031859','2','admin1',2,'[{\"changed\": {\"fields\": [\"Role\", \"User num\"]}}]',8,1),(8,'2022-11-06 18:36:36.227892','3','admin2',2,'[{\"changed\": {\"fields\": [\"Role\", \"User num\"]}}]',8,1),(9,'2022-11-06 18:37:05.832086','4','admin3',2,'[{\"changed\": {\"fields\": [\"Role\", \"User num\"]}}]',8,1),(10,'2022-11-06 18:37:32.773086','5','admin4',2,'[{\"changed\": {\"fields\": [\"Role\", \"User num\"]}}]',8,1),(11,'2022-11-06 18:38:10.010666','49','향미',3,'',9,1),(12,'2022-11-06 18:38:52.241939','53','무라 홍대2호점',3,'',9,1),(13,'2022-11-06 18:39:16.105153','48','향미',3,'',9,1),(14,'2022-11-06 18:39:56.218808','23','델문도',3,'',9,1),(15,'2022-11-06 18:41:00.096736','4','무쇠김치삼겹',2,'[{\"changed\": {\"fields\": [\"Phone number\", \"Admin comment\"]}}]',9,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
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

-- Dump completed on 2022-11-07  3:43:44
