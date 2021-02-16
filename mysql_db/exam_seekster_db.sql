-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2021 at 05:01 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exam_seekster_db`
--
CREATE DATABASE IF NOT EXISTS `exam_seekster_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `exam_seekster_db`;

-- --------------------------------------------------------

--
-- Table structure for table `sys_user`
--

CREATE TABLE `sys_user` (
  `id` varchar(36) COLLATE utf8_bin NOT NULL COMMENT 'UUID',
  `email` varchar(255) COLLATE utf8_bin NOT NULL COMMENT 'เมล',
  `password` varchar(255) COLLATE utf8_bin NOT NULL COMMENT 'รหัสผ่าน',
  `f_name` varchar(255) COLLATE utf8_bin NOT NULL COMMENT 'ชื่อจริง',
  `l_name` varchar(255) COLLATE utf8_bin NOT NULL COMMENT 'นามสกุล',
  `is_use` double NOT NULL DEFAULT 1,
  `datetime` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `sys_user`
--

INSERT INTO `sys_user` (`id`, `email`, `password`, `f_name`, `l_name`, `is_use`, `datetime`) VALUES
('c164c475-d596-4cd7-8d4f-eaca91c3eb85', 'pondkarun@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'การัณย์', 'กะลันตะบุตร์', 1, '2021-02-16 15:46:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sys_user`
--
ALTER TABLE `sys_user`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
