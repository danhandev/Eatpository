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
-- Table structure for table `stores`
--

DROP TABLE IF EXISTS `stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stores` (
  `stmt` text,
  `header` json DEFAULT NULL,
  `rows` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stores`
--

LOCK TABLES `stores` WRITE;
/*!40000 ALTER TABLE `stores` DISABLE KEYS */;
INSERT INTO `stores` VALUES ('SELECT * FROM stores_stores;','[\"id\", \"store_name\", \"main_menu\", \"address\", \"phone_number\", \"longitude\", \"latitude\", \"time\", \"category\", \"admin_comment\", \"user_id\"]','[[\"1\", \"카미야\", \"돈까스 정식\", \"서울 마포구 와우산로21길 28-6\", \"\", \"126.922363790043\", \"37.5525828767963\", \"11:00~22:30\", \"한식\", \"‘홍대생의 학식은 카미야에서 시작한다’로 종결되는 맛집.\", \"2\"], [\"2\", \"무쇠김치삼겹\", \"무쇠삼겹살\", \"서울 마포구 와우산로21길 20-5\", \"\", \"126.922669292142\", \"37.5526353351489\", \"15:00~22:00\", \"한식\", \"산업디자인 학과장님이 학생들을 데리고가는 맛집.\", \"2\"], [\"3\", \"넙딱집 상수점\", \"돼지고기구이\", \"서울 마포구 독막로 104\", \"02-6498-2225\", \"126.925038538022\", \"37.5474993709355\", \"월~토 17:00~24:00\", \"한식\", \"c동에서 가장 가까우면서도 신선한 고기들과 수제햄 서비스로 1차로 시작하기 좋은 맛집\", \"2\"]]');
/*!40000 ALTER TABLE `stores` ENABLE KEYS */;
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

-- Dump completed on 2022-11-07  3:43:12
