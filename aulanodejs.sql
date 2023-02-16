-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16-Fev-2023 às 21:09
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `aulanodejs`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `preco` double NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `preco`, `createdAt`, `updatedAt`) VALUES
(1, 'Roupa', 100, '2022-12-06 22:26:40', '2022-12-06 22:26:40');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `nome`, `email`, `password_hash`, `createdAt`, `updatedAt`) VALUES
(1, 'Luan', 'alun@gmail.com', '$2a$08$9Dl1Vk7Usy/mo8qg6SbIZ..NWk/l8yZKGkuDdxMIG6Wghn0BRf9Fa', '2023-01-23 16:16:41', '2023-01-23 16:16:41'),
(2, 'Ruan', 'rfl5@aluno.ifnmg.edu.br', '$2a$08$KVn0O7EUUTnJ8OjJs8qyf.1CUxhM8bUigry8.aAhVlUKVk3JQva5W', '2023-01-23 16:20:30', '2023-01-23 16:20:30'),
(3, 'luan', 'sousasluan212@gmail.com', '$2a$08$OWM2PGmQlqId9jYz4cKlX.3jHxypSZ4.9ch.mobNIb3dmxIDvL9b6', '2023-01-23 17:22:55', '2023-01-30 17:48:30'),
(4, 'Rebeca', 'aunvw@gmail.com', '$2a$08$XBSs/PuXYtZMWzYwxTM.J.Nh/GABmNUZfTdeKaI8spQrm.X0WVCD.', '2023-01-30 12:20:55', '2023-01-30 12:20:55'),
(5, 'Rebeca', 'rebeca@gmail.com', '$2a$08$ipCbeeWsPfCqpx122xrGFeEA38EiDYB38EpHjDuEm5Cmmp6RRGkym', '2023-01-30 17:32:07', '2023-01-30 17:32:07'),
(6, 'lss', 'alunvw@gmail.com', '$2a$08$mgWlet4q2VEgkbSGvgpqvuHz76VZlpL3IJH03nWnd6mtXAeinjcli', '2023-01-30 17:39:29', '2023-01-30 17:39:29'),
(7, 'mila', 'mila@gmail.com', '$2a$08$fmUehZeEyt/xTacWAY0NA.b6jxLjAXe5stuJz3NNRFQVP87KnAt0W', '2023-02-01 19:34:50', '2023-02-01 19:34:50'),
(8, 'Renan', 'Renan@gmail.com', '$2a$08$U9St5HQ7w7YjE0XMFM7ezuWXUS.JpR0pqmUFN3nqhY56ATOC2HZWW', '2023-02-01 19:38:32', '2023-02-01 19:38:32'),
(9, 'Amaury', 'Amaury@gmail.com', '$2a$08$0MUnQo2m2PLCmZKjDvktYOHVvHXzCQRS5hF4q.DN87nNGYOo3qRey', '2023-02-01 19:41:05', '2023-02-01 19:41:05'),
(10, 'ju', 'ju@gmail.com', '$2a$08$xVMYvi6qKppeAzxXIvhFFOuCm5yG.HueUoQLiFQomts4TtsahLRzS', '2023-02-15 21:07:10', '2023-02-15 21:07:10'),
(11, 'cruzeiro', 'cruzeiro@gmail.com', '$2a$08$BHEO1M0pPS.ah7wkPuxUdueGObP.pK7J2natU.LIwC18j99ZBUfMS', '2023-02-15 21:11:04', '2023-02-15 21:11:04'),
(12, 'Paulo Rafael', 'paulorafael@gmail.com', '$2a$08$pFbnzTFi8GNpbXrq0pzECeDNFaSaQvZvLvZ1fzLGaoh42E3Z3ayye', '2023-02-15 22:58:15', '2023-02-15 22:58:15'),
(13, 'Ronaldinho', 'ronaldinho@gmail.com', '$2a$08$GyG4uhF2WLguM47clFbPxet9KetegyPcEli1JF5x2OjKLbmiBq062', '2023-02-15 23:03:11', '2023-02-15 23:03:11'),
(14, 'Ronaldo', 'ronaldo@gmail.com', '$2a$08$VL9pF6jYDO0W6G6dOwoh9.2wNr5Ww69ylZQ8qahYNPtrKhhsrv8Lu', '2023-02-15 23:05:25', '2023-02-15 23:05:25'),
(15, 'Fernando', 'fernando@gmail.com', '$2a$08$NhoCbXEEI5BIyvXUCf4N7eQwlJsCHuTIASDilDRbt6b0RyW6znKsG', '2023-02-15 23:13:08', '2023-02-15 23:13:08'),
(16, 'Jucelia', 'jucelia@gmail.com', '$2a$08$g4uoyrdxgzitK4phhONMb..N7cBIRRAky9rbYOVw5tAtz/Qa5Mo3K', '2023-02-15 23:14:56', '2023-02-15 23:14:56'),
(17, 'Paulo', 'paulo@gmail.com', '$2a$08$iNLUeUcdhiozQ20M8IKMke6bCatrGYLLhK61wdrU46elqTaUAFHTm', '2023-02-15 23:19:51', '2023-02-15 23:19:51'),
(18, 'Amaury Junior', 'amauryjunior04@gmail.com', '$2a$08$kl9.CENRMfXBX22FG.V4KOyrL.hRi9w0BBaK6KUwozP9e8dRwGNAi', '2023-02-15 23:38:10', '2023-02-15 23:38:10');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
