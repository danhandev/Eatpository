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
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('8scyj66y2h9dfmyvxwcw5fyy7j707b5h','.eJxVjDsOwyAQBe9CHSF-Njhlep8Bwe4SnEQgGbuKcvdgyUXSzsx7b-bDvmW_N1r9guzKJLv8shjgSeUQ-AjlXjnUsq1L5EfCT9v4XJFet7P9O8ih5b4WyiIYnUhEbcEN0mlQwliYHHVKIAbdac-sRitxFCkmknJSgqwZA_t8Ac4VNzw:1orkUO:eIFydjCsq7QJXTtHkq_t6Xn-9HrWbb1El1Ln7RYQTNQ','2022-11-20 18:35:24.053456'),('rv7t4p0a3e97p9c5j6akdf4l3nreqyye','.eJxVjDsOwyAQBe9CHSF-Njhlep8Bwe4SnEQgGbuKcvdgyUXSzsx7b-bDvmW_N1r9guzKJLv8shjgSeUQ-AjlXjnUsq1L5EfCT9v4XJFet7P9O8ih5b4WyiIYnUhEbcEN0mlQwliYHHVKIAbdac-sRitxFCkmknJSgqwZA_t8Ac4VNzw:1ofKGg:UUA0rmZ14v2_anXas4KroNRUB62aV0i5bN9tB-FEYB4','2022-10-17 12:09:54.463625');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
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

-- Dump completed on 2022-11-07  3:43:36
