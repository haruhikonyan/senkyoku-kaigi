-- CreateTable
CREATE TABLE "Composer" (
    "id" SERIAL NOT NULL,
    "displayName" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "description" TEXT,
    "author" TEXT NOT NULL,
    "isTopPageLinked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Composer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComposerCountriesCountry" (
    "composerId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "ComposerCountriesCountry_pkey" PRIMARY KEY ("composerId","countryId")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isTopPageLinked" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Playstyle" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "description" TEXT,

    CONSTRAINT "Playstyle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tune" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT,
    "wikipedia_ja" TEXT,
    "wikipedia_en" TEXT,
    "imslp" TEXT,
    "timeMinutes" INTEGER NOT NULL DEFAULT 0,
    "key" TEXT,
    "composerId" INTEGER NOT NULL,
    "playstyleId" INTEGER NOT NULL,

    CONSTRAINT "Tune_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TuneGenresGenre" (
    "tuneId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "TuneGenresGenre_pkey" PRIMARY KEY ("tuneId","genreId")
);

-- CreateTable
CREATE TABLE "PartGroupCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PartGroupCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "partGroupCategoryId" INTEGER NOT NULL,

    CONSTRAINT "PartGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TunePart" (
    "id" SERIAL NOT NULL,
    "numberOfPeople" INTEGER NOT NULL,
    "tuneId" INTEGER NOT NULL,
    "partGroupId" INTEGER NOT NULL,

    CONSTRAINT "TunePart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Part" (
    "id" SERIAL NOT NULL,
    "partName" TEXT NOT NULL,
    "tunePartId" INTEGER NOT NULL,
    "mainInstrumentId" INTEGER NOT NULL,
    "useMute" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartSubInstrument" (
    "partId" INTEGER NOT NULL,
    "instrumentId" INTEGER NOT NULL,

    CONSTRAINT "PartSubInstrument_pkey" PRIMARY KEY ("partId","instrumentId")
);

-- CreateTable
CREATE TABLE "Instrument" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "description" TEXT,
    "sortOrder" INTEGER NOT NULL,

    CONSTRAINT "Instrument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Composer_fullName_key" ON "Composer"("fullName");

-- CreateIndex
CREATE INDEX "ComposerCountriesCountry_composerId_idx" ON "ComposerCountriesCountry"("composerId");

-- CreateIndex
CREATE INDEX "ComposerCountriesCountry_countryId_idx" ON "ComposerCountriesCountry"("countryId");

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Playstyle_name_key" ON "Playstyle"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Playstyle_sortOrder_key" ON "Playstyle"("sortOrder");

-- CreateIndex
CREATE INDEX "Tune_playstyleId_idx" ON "Tune"("playstyleId");

-- CreateIndex
CREATE INDEX "Tune_composerId_idx" ON "Tune"("composerId");

-- CreateIndex
CREATE UNIQUE INDEX "Tune_title_playstyleId_composerId_key" ON "Tune"("title", "playstyleId", "composerId");

-- CreateIndex
CREATE INDEX "TuneGenresGenre_tuneId_idx" ON "TuneGenresGenre"("tuneId");

-- CreateIndex
CREATE INDEX "TuneGenresGenre_genreId_idx" ON "TuneGenresGenre"("genreId");

-- CreateIndex
CREATE UNIQUE INDEX "PartGroupCategory_name_key" ON "PartGroupCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PartGroup_name_key" ON "PartGroup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PartGroup_shortName_key" ON "PartGroup"("shortName");

-- CreateIndex
CREATE UNIQUE INDEX "PartGroup_sortOrder_key" ON "PartGroup"("sortOrder");

-- CreateIndex
CREATE INDEX "PartGroup_partGroupCategoryId_idx" ON "PartGroup"("partGroupCategoryId");

-- CreateIndex
CREATE INDEX "TunePart_tuneId_idx" ON "TunePart"("tuneId");

-- CreateIndex
CREATE INDEX "TunePart_partGroupId_idx" ON "TunePart"("partGroupId");

-- CreateIndex
CREATE INDEX "Part_tunePartId_idx" ON "Part"("tunePartId");

-- CreateIndex
CREATE INDEX "Part_mainInstrumentId_idx" ON "Part"("mainInstrumentId");

-- CreateIndex
CREATE INDEX "PartSubInstrument_partId_idx" ON "PartSubInstrument"("partId");

-- CreateIndex
CREATE INDEX "PartSubInstrument_instrumentId_idx" ON "PartSubInstrument"("instrumentId");

-- CreateIndex
CREATE UNIQUE INDEX "Instrument_name_key" ON "Instrument"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Instrument_shortName_key" ON "Instrument"("shortName");

-- CreateIndex
CREATE UNIQUE INDEX "Instrument_sortOrder_key" ON "Instrument"("sortOrder");

-- AddForeignKey
ALTER TABLE "ComposerCountriesCountry" ADD CONSTRAINT "ComposerCountriesCountry_composerId_fkey" FOREIGN KEY ("composerId") REFERENCES "Composer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComposerCountriesCountry" ADD CONSTRAINT "ComposerCountriesCountry_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tune" ADD CONSTRAINT "Tune_playstyleId_fkey" FOREIGN KEY ("playstyleId") REFERENCES "Playstyle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tune" ADD CONSTRAINT "Tune_composerId_fkey" FOREIGN KEY ("composerId") REFERENCES "Composer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TuneGenresGenre" ADD CONSTRAINT "TuneGenresGenre_tuneId_fkey" FOREIGN KEY ("tuneId") REFERENCES "Tune"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TuneGenresGenre" ADD CONSTRAINT "TuneGenresGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartGroup" ADD CONSTRAINT "PartGroup_partGroupCategoryId_fkey" FOREIGN KEY ("partGroupCategoryId") REFERENCES "PartGroupCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TunePart" ADD CONSTRAINT "TunePart_tuneId_fkey" FOREIGN KEY ("tuneId") REFERENCES "Tune"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TunePart" ADD CONSTRAINT "TunePart_partGroupId_fkey" FOREIGN KEY ("partGroupId") REFERENCES "PartGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Part" ADD CONSTRAINT "Part_tunePartId_fkey" FOREIGN KEY ("tunePartId") REFERENCES "TunePart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Part" ADD CONSTRAINT "Part_mainInstrumentId_fkey" FOREIGN KEY ("mainInstrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartSubInstrument" ADD CONSTRAINT "PartSubInstrument_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartSubInstrument" ADD CONSTRAINT "PartSubInstrument_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
