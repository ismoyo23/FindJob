-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 10, 2020 at 06:00 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job`
--

-- --------------------------------------------------------

--
-- Table structure for table `jobexperience`
--

CREATE TABLE `jobexperience` (
  `id` int(11) NOT NULL,
  `id_users` int(11) NOT NULL,
  `position` varchar(30) NOT NULL,
  `descriptions` text NOT NULL,
  `name_company` varchar(40) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobexperience`
--

INSERT INTO `jobexperience` (`id`, `id_users`, `position`, `descriptions`, `name_company`, `created_at`, `updated_at`) VALUES
(2, 6, 'Front End Developer', 'lorelff ldflsdfl dfsf fdf', 'PT SAYA GANTENG', '2020-09-09 17:48:26', '2020-09-09 17:48:26');

-- --------------------------------------------------------

--
-- Table structure for table `portofolio`
--

CREATE TABLE `portofolio` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `id_users` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `portofolio`
--

INSERT INTO `portofolio` (`id`, `name`, `id_users`, `created_at`, `updated_at`) VALUES
(5, 'android design.jpg', 2, '2020-09-09 13:27:11', '2020-09-09 13:27:11'),
(8, 'andrid design.png', 6, '2020-09-09 14:46:46', '2020-09-09 14:46:46'),
(9, 'andrid design.png', 6, '2020-09-09 16:40:12', '2020-09-09 16:40:12'),
(10, 'andrid design.png', 6, '2020-09-09 17:48:17', '2020-09-09 17:48:17');

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `id_skill` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `name_skill` varchar(60) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skill`
--

INSERT INTO `skill` (`id_skill`, `id_user`, `name_skill`, `created_at`, `updated_at`) VALUES
(2, 6, 'Laravel', '2020-09-09 18:17:47', '2020-09-09 18:17:47');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(90) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(70) NOT NULL,
  `address` varchar(50) NOT NULL,
  `phone` int(14) NOT NULL,
  `company` varchar(90) NOT NULL,
  `image` varchar(90) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `udpated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `address`, `phone`, `company`, `image`, `created_at`, `udpated_at`) VALUES
(4, 'ismoyo', 'ismoyorplb@gmail.com', 'sha1$293f8adc$1$fb257af8a1a6e9f29a71231e8e76774938e199be', 'Trenggalek', 2147483647, 'PT Cinta Sejati', '', '2020-09-09 02:14:33', '2020-09-09 02:14:33'),
(5, 'setya', 'setya@gmail.com', 'sha1$183478ec$1$e6dfe5b76a1cadea927a7f1e1f688a0f299ccd5f', 'Trenggalek', 2147483647, 'PT Cinta Sejati', '', '2020-09-09 02:39:17', '2020-09-09 02:39:17'),
(6, 'ajuna', 'ajuna@gmail.com', 'sha1$7aeee72a$1$f2c55bdb4e7bf4853656b8c98e845f138c0f82f6', 'Jakarta', 2147483647, 'PT Setya', 'android design.jpg', '2020-09-09 02:42:20', '2020-09-09 02:42:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jobexperience`
--
ALTER TABLE `jobexperience`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portofolio`
--
ALTER TABLE `portofolio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`id_skill`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jobexperience`
--
ALTER TABLE `jobexperience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `portofolio`
--
ALTER TABLE `portofolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `id_skill` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
