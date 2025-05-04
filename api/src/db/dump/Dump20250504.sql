CREATE DATABASE  IF NOT EXISTS `db_central_furia` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_central_furia`;
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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `comments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` int(10) unsigned NOT NULL,
  `users_id` int(10) unsigned NOT NULL,
  `comment_user` text,
  `date_comment` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_comments_post_id` (`post_id`),
  KEY `fk_comments_user_id` (`users_id`),
  CONSTRAINT `fk_comments_post_id` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_comments_user_id` FOREIGN KEY (`users_id`) REFERENCES `users_registers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gamesesport`
--

LOCK TABLES `gamesesport` WRITE;
/*!40000 ALTER TABLE `gamesesport` DISABLE KEYS */;
/*!40000 ALTER TABLE `gamesesport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `likes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` int(10) unsigned NOT NULL,
  `users_id` int(10) unsigned NOT NULL,
  `date_likes` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_likes_post_id` (`post_id`),
  KEY `fk_likes_user_id` (`users_id`),
  CONSTRAINT `fk_likes_post_id` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_likes_user_id` FOREIGN KEY (`users_id`) REFERENCES `users_registers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `posts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `content` text,
  `image_url` varchar(255) DEFAULT NULL,
  `post_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users_registers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_users`
--

DROP TABLE IF EXISTS `profile_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `profile_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `users_id` int(10) unsigned NOT NULL,
  `bio` text,
  `profile_photo_url` varchar(255) DEFAULT NULL,
  `username` varchar(30) NOT NULL,
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `users_id` (`users_id`),
  CONSTRAINT `profile_users_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users_registers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_users`
--

LOCK TABLES `profile_users` WRITE;
/*!40000 ALTER TABLE `profile_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `profile_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suggestion`
--

DROP TABLE IF EXISTS `suggestion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `suggestion` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `text` text,
  `date_suggestion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `suggestion_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users_registers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suggestion`
--

LOCK TABLES `suggestion` WRITE;
/*!40000 ALTER TABLE `suggestion` DISABLE KEYS */;
/*!40000 ALTER TABLE `suggestion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_registers`
--

DROP TABLE IF EXISTS `users_registers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users_registers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `date_cadastro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `emal` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_registers`
--

LOCK TABLES `users_registers` WRITE;
/*!40000 ALTER TABLE `users_registers` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_registers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `view_posts_with_likes`
--

DROP TABLE IF EXISTS `view_posts_with_likes`;
/*!50001 DROP VIEW IF EXISTS `view_posts_with_likes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `view_posts_with_likes` AS SELECT 
 1 AS `post_id`,
 1 AS `user_id`,
 1 AS `content`,
 1 AS `image_url`,
 1 AS `post_date`,
 1 AS `username`,
 1 AS `profile_photo_url`,
 1 AS `total_likes`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_liked_posts`
--

DROP TABLE IF EXISTS `vw_liked_posts`;
/*!50001 DROP VIEW IF EXISTS `vw_liked_posts`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `vw_liked_posts` AS SELECT 
 1 AS `username`,
 1 AS `id_user_post`,
 1 AS `post_id`,
 1 AS `post_content`,
 1 AS `post_date`,
 1 AS `user_who_liked`,
 1 AS `date_likes`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_post_comments_likes`
--

DROP TABLE IF EXISTS `vw_post_comments_likes`;
/*!50001 DROP VIEW IF EXISTS `vw_post_comments_likes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `vw_post_comments_likes` AS SELECT 
 1 AS `post_id`,
 1 AS `post_content`,
 1 AS `image_url`,
 1 AS `post_date`,
 1 AS `commenter_username`,
 1 AS `commenter_user_id`,
 1 AS `comment_text`,
 1 AS `date_comment`,
 1 AS `post_author_username`,
 1 AS `post_author_user_id`,
 1 AS `like_count`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `view_posts_with_likes`
--

/*!50001 DROP VIEW IF EXISTS `view_posts_with_likes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_posts_with_likes` AS select `p`.`id` AS `post_id`,`p`.`user_id` AS `user_id`,`p`.`content` AS `content`,`p`.`image_url` AS `image_url`,`p`.`post_date` AS `post_date`,`pu`.`username` AS `username`,`pu`.`profile_photo_url` AS `profile_photo_url`,count(`l`.`id`) AS `total_likes` from (((`posts` `p` join `profile_users` `pu` on((`pu`.`users_id` = `p`.`user_id`))) left join `likes` `l` on((`l`.`post_id` = `p`.`id`))) left join `profile_users` `pu_liker` on((`pu_liker`.`users_id` = `l`.`users_id`))) group by `p`.`id`,`p`.`content`,`p`.`image_url`,`p`.`post_date`,`p`.`user_id`,`pu`.`username`,`pu`.`profile_photo_url` order by `p`.`post_date` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_liked_posts`
--

/*!50001 DROP VIEW IF EXISTS `vw_liked_posts`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_liked_posts` AS select `pu`.`username` AS `username`,`pu`.`users_id` AS `id_user_post`,`p`.`id` AS `post_id`,`p`.`content` AS `post_content`,`p`.`post_date` AS `post_date`,`l`.`users_id` AS `user_who_liked`,`l`.`date_likes` AS `date_likes` from ((`likes` `l` join `posts` `p` on((`p`.`id` = `l`.`post_id`))) join `profile_users` `pu` on((`p`.`user_id` = `pu`.`users_id`))) order by `l`.`date_likes` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_post_comments_likes`
--

/*!50001 DROP VIEW IF EXISTS `vw_post_comments_likes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_post_comments_likes` AS select `p`.`id` AS `post_id`,`p`.`content` AS `post_content`,`p`.`image_url` AS `image_url`,`p`.`post_date` AS `post_date`,`pu_comment`.`username` AS `commenter_username`,`pu_comment`.`users_id` AS `commenter_user_id`,`c`.`comment_user` AS `comment_text`,`c`.`date_comment` AS `date_comment`,`pu_post`.`username` AS `post_author_username`,`pu_post`.`users_id` AS `post_author_user_id`,count(`l`.`post_id`) AS `like_count` from ((((`comments` `c` join `posts` `p` on((`p`.`id` = `c`.`post_id`))) join `profile_users` `pu_comment` on((`c`.`users_id` = `pu_comment`.`users_id`))) join `profile_users` `pu_post` on((`p`.`user_id` = `pu_post`.`users_id`))) left join `likes` `l` on((`l`.`post_id` = `p`.`id`))) group by `p`.`id`,`p`.`content`,`p`.`image_url`,`p`.`post_date`,`pu_comment`.`username`,`pu_comment`.`users_id`,`c`.`comment_user`,`c`.`date_comment`,`pu_post`.`username`,`pu_post`.`users_id` order by `c`.`date_comment` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-04 12:31:17
