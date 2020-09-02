/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE IF NOT EXISTS `sheets` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sheets`;

CREATE TABLE IF NOT EXISTS `tb_familia_material` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `familia` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `descricao` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cod`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40000 ALTER TABLE `tb_familia_material` DISABLE KEYS */;
INSERT INTO `tb_familia_material` (`cod`, `familia`, `descricao`, `update`) VALUES
	(1, 'Familia 1', 'Descricao Familia 1', '2020-08-10 16:04:47'),
	(2, 'Familia 2', 'Descricao Familia 2', '2020-08-10 16:04:59');
/*!40000 ALTER TABLE `tb_familia_material` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `tb_grupo_material` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `grupo` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `descricao` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cod`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40000 ALTER TABLE `tb_grupo_material` DISABLE KEYS */;
INSERT INTO `tb_grupo_material` (`cod`, `grupo`, `descricao`, `update`) VALUES
	(1, 'Grupo 1', 'Descricao G1', '2020-08-10 16:06:20'),
	(2, 'Grupo 2', 'Descricao G2', '2020-08-10 16:06:25');
/*!40000 ALTER TABLE `tb_grupo_material` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `tb_material` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `foto` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `material` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `descricao` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `multiplo` int DEFAULT NULL,
  `valor` decimal(10,2) DEFAULT NULL,
  `familia` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `grupo` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `observacao` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cod`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40000 ALTER TABLE `tb_material` DISABLE KEYS */;
INSERT INTO `tb_material` (`cod`, `foto`, `material`, `descricao`, `multiplo`, `valor`, `familia`, `grupo`, `observacao`, `update`) VALUES
	(1, 'Mesa modular_photo2.png.png', 'Mesa modular', 'Mesa para sala de estar', 1, 1200.33, 'Familia 1', 'Grupo 1', 'A mesa deve ser embalada desmontada', '2020-08-10 16:14:10');
/*!40000 ALTER TABLE `tb_material` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `tb_perfil_usuario` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `perfil` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `descricao` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cod`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40000 ALTER TABLE `tb_perfil_usuario` DISABLE KEYS */;
INSERT INTO `tb_perfil_usuario` (`cod`, `perfil`, `descricao`, `update`) VALUES
	(1, 'Administrador', '-', '2020-06-19 11:10:36'),
	(2, 'Recebimento', '-', '2020-06-19 10:32:23'),
	(3, 'Expedicao', '-', '2020-06-19 10:32:07');
/*!40000 ALTER TABLE `tb_perfil_usuario` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `tb_usuario` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `foto` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT 'usuario-no-image.png',
  `nome` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `usuario` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `senha` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `perfil` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `status` int DEFAULT '1',
  `update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cod`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40000 ALTER TABLE `tb_usuario` DISABLE KEYS */;
INSERT INTO `tb_usuario` (`cod`, `foto`, `nome`, `email`, `usuario`, `senha`, `perfil`, `status`, `update`) VALUES
	(1, 'B02FEA_user9-290x290.png.png', 'Fabio Eduardo Argenton', 'fabio.argenton@hotmail.com', 'B02FEA', 'admin', 'Administrador', 1, '2020-08-10 15:49:48');
/*!40000 ALTER TABLE `tb_usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
