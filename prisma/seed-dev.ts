import { prisma } from '@/lib/prisma';

async function main() {
  // ドイツのデータを作成
  const germany = await prisma.country.upsert({
    where: { name: 'ドイツ' },
    update: {},
    create: {
      name: 'ドイツ',
      description: null,
    },
  });

  // ブラームスのデータを作成
  const brahms = await prisma.composer.upsert({
    where: { fullName: 'ヨハネス・ブラームス' },
    update: {},
    create: {
      displayName: 'ブラームス',
      fullName: 'ヨハネス・ブラームス',
      description: 'ブラームスです',
      author: 'admin',
      isTopPageLinked: true,
      composerCountries: {
        create: {
          countryId: germany.id,
        },
      },
    },
  });

  // Playstyle オーケストラを作成
  const orchestraPlaystyle = await prisma.playstyle.upsert({
    where: { name: 'オーケストラ' },
    update: {},
    create: {
      name: 'オーケストラ',
      sortOrder: 1,
      description: 'オーケストラによる演奏',
    },
  });

  // Genre 交響曲と田園を作成
  const symphonyGenre = await prisma.genre.upsert({
    where: { name: '交響曲' },
    update: {},
    create: {
      name: '交響曲',
      description: '交響楽の作品',
      isTopPageLinked: 0,
    },
  });

  const pastoralGenre = await prisma.genre.upsert({
    where: { name: '田園' },
    update: {},
    create: {
      name: '田園',
      description: '牧歌的な作品',
      isTopPageLinked: 0,
    },
  });

  const brassPartGroupCategory = await prisma.partGroupCategory.upsert({
    where: { name: '金管楽器' },
    update: {},
    create: {
      name: '金管楽器',
    },
  });

  const woodPartGroupCategory = await prisma.partGroupCategory.upsert({
    where: { name: '木管楽器' },
    update: {},
    create: {
      name: '木管楽器',
    },
  });

  const fluteInstrument = await prisma.instrument.upsert({
    where: { name: 'フルート' },
    update: {},
    create: {
      name: 'フルート',
    },
  });

  const hornInstrument = await prisma.instrument.upsert({
    where: { name: 'ホルン' },
    update: {},
    create: {
      name: 'ホルン',
    },
  });

  const flutePartGroup = await prisma.partGroup.upsert({
    where: { name: 'フルート' },
    update: {},
    create: {
      name: 'フルート',
      partGroupCategoryId: woodPartGroupCategory.id,
    },
  });

  const hornPartGroup = await prisma.partGroup.upsert({
    where: { name: 'ホルン' },
    update: {},
    create: {
      name: 'ホルン',
      partGroupCategoryId: brassPartGroupCategory.id,
    },
  });

  // 各交響曲のデータを作成
  const tuneDataList = [
    {
      title: '交響曲第1番 ハ短調 Op.68',
      description: null,
      genres: [symphonyGenre],
    },
    {
      title: '交響曲第2番 ニ長調 Op.73',
      description: null,
      genres: [symphonyGenre, pastoralGenre],
    },
    {
      title: '交響曲第3番 ヘ長調 Op.90',
      description: null,
      genres: [symphonyGenre],
    },
    {
      title: '交響曲第4番 ホ短調 Op.98',
      description: null,
      genres: [symphonyGenre],
    },
  ];

  await Promise.all(
    tuneDataList.map((tuneData) => {
      return prisma.tune.upsert({
        where: {
          title_playstyleId_composerId: {
            title: tuneData.title,
            composerId: brahms.id,
            playstyleId: orchestraPlaystyle.id,
          },
        },
        update: {},
        create: {
          title: tuneData.title,
          description: tuneData.description,
          author: 'admin',
          wikipedia_ja: 'url',
          wikipedia_en: 'url',
          imslp: 'url',
          composerId: brahms.id,
          playstyleId: orchestraPlaystyle.id,
          tuneGenres: {
            create: tuneData.genres?.map((genre) => ({
              genreId: genre.id,
            })),
          },
          tuneParts: {
            create: [
              {
                partGroupId: flutePartGroup.id,
                parts: {
                  create: [
                    {
                      partName: '1st',
                      mainInstrumentId: fluteInstrument.id,
                    },
                    {
                      partName: '2nd',
                      mainInstrumentId: fluteInstrument.id,
                    },
                  ],
                },
              },
              {
                partGroupId: hornPartGroup.id,
                parts: {
                  create: [
                    {
                      partName: '1st',
                      mainInstrumentId: hornInstrument.id,
                    },
                    {
                      partName: '2nd',
                      mainInstrumentId: hornInstrument.id,
                    },
                  ],
                },
              },
            ],
          },
        },
      });
    }),
  );
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
