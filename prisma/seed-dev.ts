import { prisma } from '@/lib/prisma';

async function main() {
  const countryList = [
    [1, 'ドイツ'],
    [2, 'ハンガリー'],
    [3, 'アメリカ'],
    [4, 'イタリア'],
    [5, 'オーストリア'],
    [6, 'ロシア'],
    [7, 'ウクライナ'],
    [8, 'フランス'],
    [9, 'アルメニア'],
    [10, 'ポーランド'],
    [11, 'ノルウェー'],
    [12, 'ベルギー'],
    [13, 'スイス'],
    [14, 'スペイン'],
    [15, 'デンマーク'],
    [16, 'フィンランド'],
    [17, 'チェコ'],
    [18, 'イギリス'],
    [19, 'スウェーデン'],
    [20, '日本'],
    [21, 'チェコスロバキア'],
    [22, 'オランダ'],
  ] as const;
  await prisma.country.createMany({
    data: countryList.map(([id, name]) => ({ id, name })),
    skipDuplicates: true, // 既に存在するレコードをスキップする場合
  });

  const genreList = [
    [1, '交響曲', true, null],
    [2, '田園', true, null],
    [3, '合唱', true, null],
    [4, '独唱', true, null],
    [5, '序曲', true, null],
    [6, 'バンダ', true, null],
    [7, 'ミサ曲', true, null],
    [8, '協奏曲', true, null],
    [9, 'ピアノ', true, null],
    [10, 'ヴァイオリン', true, null],
    [11, 'チェロ', true, null],
    [12, 'オーボエ', true, null],
    [13, 'クラリネット', true, null],
    [14, 'ホルン', true, null],
    [15, 'ファゴット', true, null],
    [16, 'ヴィオラ', true, null],
    [17, 'コントラバス', true, null],
    [18, 'カンタータ', true, null],
    [19, '児童合唱', true, null],
    [20, 'トランペット', true, null],
    [21, '悲劇', true, null],
    [22, 'ハンマー', false, null],
    [23, 'テナーホルン', false, null],
    [24, 'ギター', false, null],
    [25, 'マンドリン', false, null],
    [26, 'オルガン', false, null],
    [27, '死', false, null],
    [28, '未完成', false, null],
    [29, '交響詩', false, null],
    [30, 'トライアングル', false, null],
    [31, '歌劇', false, null],
    [32, '前奏曲', false, null],
    [33, 'レクイエム', false, null],
    [34, '間奏曲', false, null],
    [35, '弦楽四重奏', false, null],
    [36, '組曲', false, null],
    [37, 'フルート', false, null],
    [40, 'ワルツ', false, null],
    [41, '冬', false, null],
    [42, 'バレエ曲', false, null],
    [
      43,
      'クリスマス',
      false,
      'クリスマス自体を題材にした曲はもちろんのこと、クリスマスに観衆として頻繁に演奏される曲もたくさんある。',
    ],
    [44, '幻想曲', false, null],
    [45, 'マーチ', false, null],
    [46, '奇想曲', false, null],
    [47, 'イタリア', false, null],
    [48, 'セレナーデ', false, null],
    [49, '大砲', false, null],
    [50, '弦楽六重奏', false, null],
    [51, 'ワーグナーチューバ', false, null],
    [52, '祝典', false, null],
    [53, '13管', false, null],
    [54, 'ファンファーレ', false, null],
    [55, '金管', false, null],
    [56, 'ティンパニ', false, null],
    [57, '16管', false, null],
    [58, 'バセットホルン', false, null],
    [59, 'ピアノ連弾', false, null],
    [60, 'ピアノ2台', false, null],
    [61, '劇付随音楽', false, null],
    [62, 'サックス', false, null],
    [63, 'ハープ', false, null],
    [64, 'バレエ音楽', false, null],
    [65, 'チェンバロ', false, null],
    [66, 'トロンボーン', false, null],
    [67, '木管五重奏', false, null],
    [68, 'コールアングレ', false, null],
    [69, '付随音楽', false, null],
    [70, '習作', false, null],
    [71, '絵画', false, null],
    [72, '編曲', false, null],
    [73, '変奏曲', false, null],
    [75, 'コントラファゴット', false, null],
    [76, '紙やすり', false, null],
    [77, 'タイプライター', false, null],
    [78, 'ピアノ四重奏曲', false, null],
    [79, 'ピアノ五重奏曲', false, null],
    [80, 'ピアノ三重奏曲', false, null],
    [81, 'セレナード', false, null],
    [82, 'ピアノ三重奏', false, null],
    [83, 'ピアノ四重奏', false, null],
    [84, 'ピアノ五重奏', false, null],
    [85, 'メゾソプラノ', false, null],
    [86, 'オラトリオ', false, null],
    [87, 'カリヨン', false, null],
    [88, '優勝', false, null],
    [89, 'アンセム', false, null],
    [90, '頌歌', false, null],
    [91, '教会音楽', false, null],
    [92, 'リコーダー', false, null],
    [93, 'ブロックフレーテ', false, null],
    [94, 'チューバ', false, null],
    [95, '原典版', false, null],
    [96, 'オペラ・バレエ', false, null],
    [97, 'フーガ', false, null],
    [98, '受難曲', false, null],
    [99, '宗教曲', false, null],
    [100, '語り', false, null],
    [101, 'サイレン', false, null],
    [102, '戦争', false, null],
    [103, 'ジャズ', false, null],
    [104, '民謡', false, null],
    [105, '映画音楽', false, null],
    [106, 'スケルツォ', false, null],
    [107, '通奏低音', false, null],
    [108, '弦楽器', false, null],
    [109, '管楽器', false, null],
    [110, '13管楽器', false, null],
    [111, 'グラスハーモニカ', false, null],
    [112, '終曲', false, null],
    [113, '愛', false, null],
    [114, 'アルトサックス', false, null],
    [115, '課題曲', false, null],
    [116, '山', false, null],
    [117, '委嘱作品', false, null],
    [118, 'マリンバ', false, null],
    [119, '海', false, null],
    [120, '春', false, null],
    [121, '狂詩曲', false, null],
    [122, 'ユーフォニアム', false, null],
    [123, 'Esクラリネット', false, null],
    [124, '遺作', false, null],
    [125, '委託作品', false, null],
    [126, 'ニューサウンズ', false, null],
    [127, 'サンバ', false, null],
    [128, 'ポルカ', false, null],
    [129, '合作', false, null],
    [130, 'オペレッタ', false, null],
    [131, 'ベルリオーズ', false, null],
    [132, 'ソプラノ', false, null],
    [133, 'バリトン', false, null],
  ] as const;
  await prisma.genre.createMany({
    data: genreList.map(([id, name, isTopPageLinked, description]) => ({
      id,
      name,
      isTopPageLinked,
      description,
    })),
    skipDuplicates: true, // 既に存在するレコードをスキップする場合
  });

  const instruentList = [
    ['ピッコロ', 'Picc', 1101, null],
    ['フルート', 'Fl', 1102, null],
    ['アルトフルート', 'Fl', 1103, null],
    ['バスフルート', 'Fl', 1104, null],
    ['オーボエ', 'Ob', 1201, null],
    ['イングリッシュホルン', 'Ehr', 1201, null],
    ['ソプラニーノクラリネット', 'P.Cl', 1301, null],
    ['クラリネット', 'Cl', 1302, null],
    ['バスクラリネット', 'B.Cl', 1302, null],
    ['ファゴット', 'Fg', 1401, null],
    ['コントラファゴット', 'C.Fg', 1401, null],
    ['ソプラノサックス', 'S.Sax', 1501, null],
    ['アルトサックス', 'A.Sax', 1502, null],
    ['テナーサックス', 'T.Sax', 1503, null],
    ['バリトンサックス', 'B.Sax', 1504, null],
    [
      'ホルン',
      'Hr',
      2101,
      'ホルンは主に吹奏楽とオーケストラで使用される楽器である。\r\nしかし吹奏楽とオーケストラでは曲中で担う役割が大きく違うことも多い。\r\nまた、音域が4～5オクターブととても広いことも特徴の一つであり、プロはもちろんのこと、アマチュアでも上吹き、下吹きと言って得意な音域が分かれることが多い。\r\n大体の譜面で奇数パートが上の音域を、偶数パートが下の音域を担当することが多い。しかし偶数だからと言って高い音が出てこないなんてことは決してなく、ホルンパートの醍醐味の一つとしてユニゾンで咆えるというオーケストレーションも効果的なのでその場合はみな等しく同じ音を吹くことになる。',
    ],
    ['ワーグナーチューバ', 'W.Tu', 2102, null],
    ['ピッコロトランペット', 'P.Tp', 2202, null],
    ['トランペット', 'Tp', 2202, null],
    ['コルネット', 'Cor', 2203, null],
    ['フリューゲルホルン', 'Flugelhorn', 2204, null],
    ['アルトトランペット', 'Tp', 2205, null],
    ['バストランペット', 'Tp', 2206, null],
    ['トロンボーン', 'Tb', 2301, null],
    ['アルトトロンボーン', 'A.Tb', 2302, null],
    ['テナートロンボーン', 'T.Tb', 2303, null],
    ['バストロンボーン', 'B.Tb', 2304, null],
    ['テナーチューバ', 'T.Tu', 2401, null],
    ['チューバ', 'Tu', 2402, null],
    ['セルパン', 'Serpent', 2403, null],
    ['オフィクレイド', 'Ophicleide', 2404, null],
    ['ティンパニ', 'Timp', 3101, null],
    ['シンバル', 'Cym', 3201, null],
    ['バスドラム', 'BD', 3202, null],
    ['トライアングル', 'Tri', 3203, null],
    ['スネアドラム', 'SD', 3204, null],
    ['テナードラム', 'TD', 3205, null],
    ['ドラ', 'Tamtam', 3206, null],
    ['グロッケン', 'Glo', 3301, null],
    ['シロフォン', 'Xylo', 3301, null],
    ['1st ヴァイオリン', 'Vn1', 4101, null],
    ['2st ヴァイオリン', 'Vn2', 4102, null],
    ['ヴィオラ', 'Va', 4201, null],
    ['チェロ', 'Vc', 4301, null],
    ['コントラバス', 'Cb', 4401, null],
    ['ピアノ', 'Pf', 5101, null],
    ['ピアノ連弾', 'Pf', 5102, null],
    ['チェレスタ', 'Celesta', 5103, null],
    ['オルガン', 'Celesta', 5104, null],
    ['ハープ', 'Hp', 5103, null],
    ['ソプラノ独唱', 'ソプラノ独唱', 6101, null],
    ['アルト独唱', 'アルト独唱', 6102, null],
    ['テノール独唱', 'テノール独唱', 6103, null],
    ['バス独唱', 'バス独唱', 6104, null],
    ['混声合唱', '混声合唱', 6201, null],
    ['女声合唱', '女声合唱', 6202, null],
    ['男声合唱', '男声合唱', 6203, null],
    ['児童合唱', '児童合唱', 6204, null],
    ['ギター', 'Gt', 7101, null],
    ['マンドリン', 'Mdr', 7102, null],
  ] as const;

  await prisma.instrument.createMany({
    data: instruentList.map(([name, shortName, sortOrder, description]) => ({
      name,
      shortName,
      sortOrder,
      description,
    })),
    skipDuplicates: true, // 既に存在するレコードをスキップする場合
  });

  const playstyleList = [
    ['オーケストラ', 11, null],
    ['吹奏楽', 21, null],
    ['弦楽合奏', 31, null],
    ['アンサンブル', 71, null],
    ['金管バンド', 41, null],
    ['ソロ', 101, null],
    ['マンドリンオーケストラ', 91, null],
    ['コーラス', 51, null],
  ] as const;

  await prisma.playstyle.createMany({
    data: playstyleList.map(([name, sortOrder, description]) => ({
      name,
      sortOrder,
      description,
    })),
    skipDuplicates: true, // 既に存在するレコードをスキップする場合
  });

  const partGroupCategoryList = [
    '木管楽器',
    '金管楽器',
    '打楽器',
    '弦楽器',
    '声楽',
    'その他',
  ];

  await prisma.partGroupCategory.createMany({
    data: partGroupCategoryList.map((name) => ({
      name,
    })),
    skipDuplicates: true, // 既に存在するレコードをスキップする場合
  });

  const partGroupList = [
    ['フルート', 'Fl', 101, 1],
    ['オーボエ', 'Ob', 102, 1],
    ['クラリネット', 'Cl', 103, 1],
    ['ファゴット', 'Fg', 104, 1],
    ['サックス', 'Sax', 105, 1],
    ['ホルン', 'Hr', 201, 2],
    ['トランペット', 'Tp', 202, 2],
    ['トロンボーン・チューバ', 'Tb', 203, 2],
    ['パーカッション', 'Perc', 401, 3],
    ['ヴァイオリン', 'Vn', 501, 4],
    ['ヴィオラ', 'Va', 502, 4],
    ['チェロ', 'Vc', 503, 4],
    ['コントラバス', 'Cb', 504, 4],
    ['合唱', '合唱', 601, 5],
    ['独唱', '独唱', 602, 5],
    ['鍵盤楽器', '鍵盤', 701, 6],
    ['その他', 'その他', 100, 6],
  ] as const;

  await prisma.partGroup.createMany({
    data: partGroupList.map(
      ([name, shortName, sortOrder, partGroupCategoryId]) => ({
        name,
        shortName,
        sortOrder,
        partGroupCategoryId,
      }),
    ),
    skipDuplicates: true, // 既に存在するレコードをスキップする場合
  });

  // ========== ここから作曲家と曲 ==========

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
          countryId: 1,
        },
      },
    },
  });
  const brahms2 = await prisma.composer.upsert({
    where: { fullName: 'ヨハネス・ブラームスツー' },
    update: {},
    create: {
      displayName: 'ブラームスツー',
      fullName: 'ヨハネス・ブラームスツー',
      description: 'ブラームスツーです',
      author: 'admin',
      isTopPageLinked: true,
      composerCountries: {
        create: {
          countryId: 2,
        },
      },
    },
  });

  // 各交響曲のデータを作成
  const tuneDataList = [
    {
      title: '交響曲第1番 ハ短調 Op.68',
      description: null,
      genres: [1],
    },
    {
      title: '交響曲第2番 ニ長調 Op.73',
      description: null,
      genres: [1, 2],
    },
    {
      title: '交響曲第3番 ヘ長調 Op.90',
      description: null,
      genres: [1],
    },
    {
      title: '交響曲第4番 ホ短調 Op.98',
      description: null,
      genres: [1],
    },
  ];

  await Promise.all(
    tuneDataList.map(async (tuneData) => {
      return prisma.tune.upsert({
        where: {
          title_playstyleId_composerId: {
            title: tuneData.title,
            composerId: brahms.id,
            playstyleId: 1,
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
          timeMinutes: 40,
          key: 'ハ短調',
          composerId: brahms.id,
          playstyleId: 1,
          tuneGenres: {
            create: tuneData.genres?.map((genreId) => ({
              genreId,
            })),
          },
          tuneParts: {
            create: [
              {
                partGroupId: 1,
                parts: {
                  create: [
                    {
                      partName: '1st',
                      mainInstrumentId: (
                        await prisma.instrument.findUniqueOrThrow({
                          where: { name: 'フルート' },
                        })
                      ).id,
                    },
                    {
                      partName: '2nd',
                      mainInstrumentId: (
                        await prisma.instrument.findUniqueOrThrow({
                          where: { name: 'フルート' },
                        })
                      ).id,
                      partSubInstruments: {
                        create: [
                          {
                            instrumentId: (
                              await prisma.instrument.findUniqueOrThrow({
                                where: { name: 'ピッコロ' },
                              })
                            ).id,
                          },
                        ],
                      },
                    },
                    {
                      partName: 'picc',
                      mainInstrumentId: (
                        await prisma.instrument.findUniqueOrThrow({
                          where: { name: 'ピッコロ' },
                        })
                      ).id,
                    },
                  ],
                },
              },
              {
                partGroupId: 6,
                parts: {
                  create: [
                    {
                      partName: '1st',
                      mainInstrumentId: (
                        await prisma.instrument.findUniqueOrThrow({
                          where: { name: 'ホルン' },
                        })
                      ).id,
                    },
                    {
                      partName: '2st',
                      mainInstrumentId: (
                        await prisma.instrument.findUniqueOrThrow({
                          where: { name: 'ホルン' },
                        })
                      ).id,
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
  await Promise.all(
    tuneDataList.map(async (tuneData) => {
      return prisma.tune.upsert({
        where: {
          title_playstyleId_composerId: {
            title: tuneData.title,
            composerId: brahms2.id,
            playstyleId: 1,
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
          timeMinutes: 40,
          key: 'ハ短調',
          composerId: brahms2.id,
          playstyleId: 1,
          tuneGenres: {
            create: tuneData.genres?.map((genreId) => ({
              genreId,
            })),
          },
          tuneParts: {
            create: [
              {
                partGroupId: 1,
                parts: {
                  create: [
                    {
                      partName: '1st',
                      mainInstrumentId: (
                        await prisma.instrument.findUniqueOrThrow({
                          where: { name: 'フルート' },
                        })
                      ).id,
                    },
                    {
                      partName: '2nd',
                      mainInstrumentId: (
                        await prisma.instrument.findUniqueOrThrow({
                          where: { name: 'フルート' },
                        })
                      ).id,
                      partSubInstruments: {
                        create: [
                          {
                            instrumentId: (
                              await prisma.instrument.findUniqueOrThrow({
                                where: { name: 'ピッコロ' },
                              })
                            ).id,
                          },
                        ],
                      },
                    },
                    {
                      partName: 'picc',
                      mainInstrumentId: (
                        await prisma.instrument.findUniqueOrThrow({
                          where: { name: 'ピッコロ' },
                        })
                      ).id,
                    },
                  ],
                },
              },
              {
                partGroupId: 6,
                parts: {
                  create: [
                    {
                      partName: '1st',
                      mainInstrumentId: (
                        await prisma.instrument.findUniqueOrThrow({
                          where: { name: 'ホルン' },
                        })
                      ).id,
                    },
                    {
                      partName: '2st',
                      mainInstrumentId: (
                        await prisma.instrument.findUniqueOrThrow({
                          where: { name: 'ホルン' },
                        })
                      ).id,
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
