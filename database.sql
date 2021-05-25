-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 25, 2021 at 09:05 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mindbowser`
--

-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

DROP TABLE IF EXISTS `subscription`;
CREATE TABLE IF NOT EXISTS `subscription` (
  `subscription_id` int(11) NOT NULL AUTO_INCREMENT,
  `package_name` varchar(20) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `user_id` int(11) NOT NULL,
  `resume_flag` tinyint(1) NOT NULL DEFAULT '0',
  `cancel_flag` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`subscription_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subscription`
--

INSERT INTO `subscription` (`subscription_id`, `package_name`, `price`, `start_date`, `end_date`, `user_id`, `resume_flag`, `cancel_flag`) VALUES
(1, 'starter', '19.00', '2021-05-24', '2021-06-23', 1, 1, 1),
(2, 'enterprise', '159.00', '2021-05-25', '2021-06-24', 1, 1, 0),
(3, 'business', '79.00', '2021-05-25', '2021-06-24', 2, 0, 0),
(4, 'premium', '49.00', '2021-05-25', '2021-06-24', 2, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `address` varchar(200) DEFAULT NULL,
  `birthdate` date NOT NULL,
  `company` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `firstname`, `lastname`, `email`, `password`, `address`, `birthdate`, `company`) VALUES
(1, 'Neeta', 'Sanas', 'n@gmail.com', '0192023a7bbd73250516f069df18b500', 'Pune', '2020-12-01', 'Gamut'),
(2, 'Neeta', 'Sanas', 'neeta@gmail.com', '0192023a7bbd73250516f069df18b500', '', '2021-05-17', 'Gamut Business Solutions');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
