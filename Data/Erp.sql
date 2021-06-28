-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema facture
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema facture
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `facture` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `facture` ;

-- -----------------------------------------------------
-- Table `facture`.`Accounts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `facture`.`Accounts` (
  `idAccounts` INT NOT NULL AUTO_INCREMENT,
  `Logo` BLOB NULL,
  `Denomination` VARCHAR(100) NOT NULL,
  `Adress` VARCHAR(100) NOT NULL,
  `Postal_Code` INT NULL,
  `Town` VARCHAR(70) NULL,
  `Phone` VARCHAR(45) NOT NULL,
  `Website` VARCHAR(100) NULL,
  `Mail` VARCHAR(45) NOT NULL,
  `Status` VARCHAR(15) NULL,
  `Capital` INT NULL,
  `Siret` VARCHAR(14) NULL,
  `CodeAPE` VARCHAR(5) NULL,
  `Vat` VARCHAR(13) NULL,
  `Password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idAccounts`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `facture`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `facture`.`Products` (
  `idProducts` INT NOT NULL,
  `Designation` VARCHAR(500) NULL,
  `Pu` FLOAT NULL,
  `Code` VARCHAR(45) NULL,
  `Category` VARCHAR(45) NULL,
  `KeyWords` VARCHAR(70) NULL,
  `Stock` INT NULL,
  `Linked Account` INT NOT NULL,
  PRIMARY KEY (`idProducts`, `Linked Account`),
  INDEX `fk_Products_Accounts_idx` (`Linked Account` ASC) VISIBLE,
  CONSTRAINT `fk_Products_Accounts`
    FOREIGN KEY (`Linked Account`)
    REFERENCES `facture`.`Accounts` (`idAccounts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
