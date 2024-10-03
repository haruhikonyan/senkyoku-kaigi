-- CreateTable
CREATE TABLE `Composer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `displayName` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `author` VARCHAR(191) NOT NULL,
    `isTopPageLinked` BOOLEAN NOT NULL DEFAULT false,

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
    `isTopPageLinked` BOOLEAN NOT NULL DEFAULT false,
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
    UNIQUE INDEX `Playstyle_sortOrder_key`(`sortOrder`),
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
    `wikipedia_ja` VARCHAR(191) NULL,
    `wikipedia_en` VARCHAR(191) NULL,
    `imslp` VARCHAR(191) NULL,
    `timeMinutes` INTEGER NOT NULL DEFAULT 0,
    `key` VARCHAR(191) NULL,
    `composerId` INTEGER NOT NULL,
    `playstyleId` INTEGER NOT NULL,

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

-- CreateTable
CREATE TABLE `PartGroupCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PartGroupCategory_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PartGroup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `shortName` VARCHAR(191) NOT NULL,
    `sortOrder` INTEGER NOT NULL,
    `partGroupCategoryId` INTEGER NOT NULL,

    UNIQUE INDEX `PartGroup_name_key`(`name`),
    UNIQUE INDEX `PartGroup_shortName_key`(`shortName`),
    UNIQUE INDEX `PartGroup_sortOrder_key`(`sortOrder`),
    INDEX `PartGroup_partGroupCategoryId_idx`(`partGroupCategoryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TunePart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tuneId` INTEGER NOT NULL,
    `partGroupId` INTEGER NOT NULL,

    INDEX `TunePart_tuneId_idx`(`tuneId`),
    INDEX `TunePart_partGroupId_idx`(`partGroupId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Part` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `partName` VARCHAR(191) NOT NULL,
    `tunePartId` INTEGER NOT NULL,
    `mainInstrumentId` INTEGER NOT NULL,
    `useMute` BOOLEAN NOT NULL DEFAULT false,

    INDEX `Part_tunePartId_idx`(`tunePartId`),
    INDEX `Part_mainInstrumentId_idx`(`mainInstrumentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PartSubInstrument` (
    `partId` INTEGER NOT NULL,
    `instrumentId` INTEGER NOT NULL,

    INDEX `PartSubInstrument_partId_idx`(`partId`),
    INDEX `PartSubInstrument_instrumentId_idx`(`instrumentId`),
    PRIMARY KEY (`partId`, `instrumentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Instrument` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `shortName` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `sortOrder` INTEGER NOT NULL,

    UNIQUE INDEX `Instrument_name_key`(`name`),
    UNIQUE INDEX `Instrument_shortName_key`(`shortName`),
    UNIQUE INDEX `Instrument_sortOrder_key`(`sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ComposerCountriesCountry` ADD CONSTRAINT `ComposerCountriesCountry_composerId_fkey` FOREIGN KEY (`composerId`) REFERENCES `Composer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComposerCountriesCountry` ADD CONSTRAINT `ComposerCountriesCountry_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Country`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tune` ADD CONSTRAINT `Tune_playstyleId_fkey` FOREIGN KEY (`playstyleId`) REFERENCES `Playstyle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tune` ADD CONSTRAINT `Tune_composerId_fkey` FOREIGN KEY (`composerId`) REFERENCES `Composer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TuneGenresGenre` ADD CONSTRAINT `TuneGenresGenre_tuneId_fkey` FOREIGN KEY (`tuneId`) REFERENCES `Tune`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TuneGenresGenre` ADD CONSTRAINT `TuneGenresGenre_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PartGroup` ADD CONSTRAINT `PartGroup_partGroupCategoryId_fkey` FOREIGN KEY (`partGroupCategoryId`) REFERENCES `PartGroupCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TunePart` ADD CONSTRAINT `TunePart_tuneId_fkey` FOREIGN KEY (`tuneId`) REFERENCES `Tune`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TunePart` ADD CONSTRAINT `TunePart_partGroupId_fkey` FOREIGN KEY (`partGroupId`) REFERENCES `PartGroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Part` ADD CONSTRAINT `Part_tunePartId_fkey` FOREIGN KEY (`tunePartId`) REFERENCES `TunePart`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Part` ADD CONSTRAINT `Part_mainInstrumentId_fkey` FOREIGN KEY (`mainInstrumentId`) REFERENCES `Instrument`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PartSubInstrument` ADD CONSTRAINT `PartSubInstrument_partId_fkey` FOREIGN KEY (`partId`) REFERENCES `Part`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PartSubInstrument` ADD CONSTRAINT `PartSubInstrument_instrumentId_fkey` FOREIGN KEY (`instrumentId`) REFERENCES `Instrument`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
