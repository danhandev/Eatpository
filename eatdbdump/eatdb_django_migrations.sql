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
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2022-10-03 11:01:01.043781'),(2,'contenttypes','0002_remove_content_type_name','2022-10-03 11:01:01.108394'),(3,'auth','0001_initial','2022-10-03 11:01:01.312252'),(4,'auth','0002_alter_permission_name_max_length','2022-10-03 11:01:01.363968'),(5,'auth','0003_alter_user_email_max_length','2022-10-03 11:01:01.371250'),(6,'auth','0004_alter_user_username_opts','2022-10-03 11:01:01.376962'),(7,'auth','0005_alter_user_last_login_null','2022-10-03 11:01:01.385673'),(8,'auth','0006_require_contenttypes_0002','2022-10-03 11:01:01.388186'),(9,'auth','0007_alter_validators_add_error_messages','2022-10-03 11:01:01.395163'),(10,'auth','0008_alter_user_username_max_length','2022-10-03 11:01:01.402345'),(11,'auth','0009_alter_user_last_name_max_length','2022-10-03 11:01:01.408323'),(12,'auth','0010_alter_group_name_max_length','2022-10-03 11:01:01.425006'),(13,'auth','0011_update_proxy_permissions','2022-10-03 11:01:01.435319'),(14,'auth','0012_alter_user_first_name_max_length','2022-10-03 11:01:01.444381'),(15,'accounts','0001_initial','2022-10-03 11:01:01.709081'),(16,'admin','0001_initial','2022-10-03 11:01:01.827456'),(17,'admin','0002_logentry_remove_auto_add','2022-10-03 11:01:01.840590'),(18,'admin','0003_logentry_add_action_flag_choices','2022-10-03 11:01:01.850726'),(19,'authtoken','0001_initial','2022-10-03 11:01:01.926905'),(20,'authtoken','0002_auto_20160226_1747','2022-10-03 11:01:01.949944'),(21,'authtoken','0003_tokenproxy','2022-10-03 11:01:01.954846'),(22,'sessions','0001_initial','2022-10-03 11:01:01.985319'),(23,'stores','0001_initial','2022-10-03 11:01:02.281030');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
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

-- Dump completed on 2022-11-07  3:43:32
