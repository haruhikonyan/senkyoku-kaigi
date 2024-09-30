-- CreateTable
CREATE TABLE `Composer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `displayName` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `author` VARCHAR(191) NOT NULL,
    `isTopPageLinked` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Composer_fullName_key`(`fullName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ComposerCountriesCountry` (
    `composerId` INTEGER NOT NULL,
    `countryId` INTEGER NOT NULL,

    INDEX `ComposerCountriesCountry_composerId_idx`(`composerId`),
    INDEX `ComposerCountriesCountry_countryId_idx`(`countryId`),
    PRIMARY KEY (`composerId`, `countryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Country` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,

    UNIQUE INDEX `Country_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `isTopPageLinked` TINYINT NOT NULL DEFAULT 0,
    `description` TEXT NULL,

    UNIQUE INDEX `Genre_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Playstyle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `sortOrder` INTEGER NOT NULL,
    `description` TEXT NULL,

    UNIQUE INDEX `Playstyle_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tune` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `title` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `composerId` INTEGER NOT NULL,
    `playstyleId` INTEGER NULL,

    INDEX `Tune_playstyleId_idx`(`playstyleId`),
    INDEX `Tune_composerId_idx`(`composerId`),
    UNIQUE INDEX `Tune_title_playstyleId_composerId_key`(`title`, `playstyleId`, `composerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TuneGenresGenre` (
    `tuneId` INTEGER NOT NULL,
    `genreId` INTEGER NOT NULL,

    INDEX `TuneGenresGenre_tuneId_idx`(`tuneId`),
    INDEX `TuneGenresGenre_genreId_idx`(`genreId`),
    PRIMARY KEY (`tuneId`, `genreId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ComposerCountriesCountry` ADD CONSTRAINT `ComposerCountriesCountry_composerId_fkey` FOREIGN KEY (`composerId`) REFERENCES `Composer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComposerCountriesCountry` ADD CONSTRAINT `ComposerCountriesCountry_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Country`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tune` ADD CONSTRAINT `Tune_playstyleId_fkey` FOREIGN KEY (`playstyleId`) REFERENCES `Playstyle`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tune` ADD CONSTRAINT `Tune_composerId_fkey` FOREIGN KEY (`composerId`) REFERENCES `Composer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TuneGenresGenre` ADD CONSTRAINT `TuneGenresGenre_tuneId_fkey` FOREIGN KEY (`tuneId`) REFERENCES `Tune`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TuneGenresGenre` ADD CONSTRAINT `TuneGenresGenre_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
