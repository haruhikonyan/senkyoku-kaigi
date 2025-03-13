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

  [
    1,
    'ベートーヴェン',
    'ルードヴィヒ・ヴァン・ベートーヴェン',
    'ベートーヴェンはドイツ古典派はもちろん、クラシック音楽を代表する作曲家である。\r\nパトロンに頼らず、演奏会開催や楽譜出版で収入を得ていた職業作曲家のはしりであることは記憶してよい。\r\nオーケストラ曲は2管編成が基本であるが、作品により例外もある。\r\nベートーヴェンが職業作曲家として楽譜に託した意思をどのように演奏に反映していくか、指揮者とオケ団員の力量が試される作曲家である',
    'admin',
    1,
  ][
    (2,
    'モーツァルト',
    'ヴォルフガング・アマデウス・モーツァルト',
    'モーツァルトはオーストリアの作曲家である。歌劇から交響曲、室内楽曲、独奏曲、宗教曲とあらゆる分野で傑作を残している。\r\nそれでもモーツァルトに文句をつける一派がいる。それはチェリストで、というのもチェロをフィーチャーした曲がないからだ。\r\nオーケストラ曲は交響曲や序曲が多くあるが小編成のものが多く、アマオケで弾かれる機会は序曲の一部を除いて少なくなっている。\r\n作品を完璧に弾くのは至難の業だが、奏者全員が謙虚な気持ちで向き合い、そして明るくニコニコふるまいながら演奏すれば、音楽が今ここから生まれているという至福の時間が訪れるに違いない。',
    'admin',
    1)
  ][
    (3,
    'ブラームス',
    'ヨハネス・ブラームス',
    'ブラームスはドイツロマン派を代表する作曲家であり、室内楽からオーケストラまで幅広く曲を残している。\r\nオーケストラの曲はだいたいが2管編成で規模もちょうどよくプロでもアマチュアでもよく演奏される作曲家である。\r\nしかし、トロンボーンの出番が少なかったり、チューバではなくコントラファゴットが編成に加わることが多く、エキストラの調達などに苦労する点もある。',
    'admin',
    1)
  ][
    (4,
    'ハイドン',
    'フランツ・ヨーゼフ・ハイドン',
    'ハイドンはオーストリアの作曲家。交響曲の父という名の通り、100 曲以上もの交響曲を残しているが、現在ではアマオケでもプロオケでも後期のごく一部の作品を除き演奏されない。編成が小規模ということと、作品語法が古典という枠内にあることから現代の複雑高度に発達した楽曲と比較して敬遠されていると考えられる。\r\n確かに、ハイドンの作品は基本こそ古典的枠内に納められているが、その枠内から逸脱したパッセージの爆発箇所も作品によっては仕掛けられていて、その落差が聴くものを楽しくさせる。\r\nハイドンの曲を演奏することで古典の古典たるゆえんを振り返るのも良い経験だと思う。',
    'admin',
    1)
  ][(5, 'ブルックナー', 'ヨーゼフ・アントン・ブルックナー', NULL, 'admin', 1)][
    (6, 'マーラー', 'グスタフ・マーラー', NULL, 'admin', 1)
  ][
    (7,
    'リヒャルト・シュトラウス',
    'リヒャルト・シュトラウス',
    NULL,
    'admin',
    0)
  ][
    (8,
    'シューマン',
    'ロベルト・アレクサンダー・シューマン',
    'ドイツロマン派の特徴である苦悩や歓喜の生々しい表出が感じられるという意味で、シューマンはまさにロマン派の正統的な作曲家である。\r\nオーケストラ曲は比較的少数だが、ほぼ2管編成であり、特殊楽器の必要性が少ないのは編成上の利点といえる。\r\nただし、曲によっては、トロンボーンパートにアルトトロンボーンを使わないと厳しいような高音が出てくるので注意が必要ではある。\r\nこのように作曲家の正統性と編成上の利点が高いにもかわらず、アマオケでの人気は今一つである。\r\n理由として考えられるのは、楽想が控え目であることもさることながら、シューマン自身のオーケストレーションが独特であることなどだろう。\r\nシューマンの作品を取り上げるからには、他の作曲家の作品にもまして、団員の覚悟が求められる。',
    'admin',
    1)
  ][
    (9,
    'メンデルスゾーン',
    'ヤーコプ・ルートヴィヒ・フェーリクス・メンデルスゾーン・バルトルディ',
    'メンデルスゾーンが生きた時代はドイツロマン派の前期に位置するが、作品の様式上はむしろ古典派に近い。\r\nオーケストラを含むあらゆる分野で名作を生み出した。\r\n交響曲・序曲をはじめとするオーケストラの曲はほぼ２管編成であり（当時指定のあった特殊金管低音は現在チューバで代替可能）、規模も望ましい。\r\n鼻歌でも出てきそうな親しみやすい旋律にあふれているのがメンデルスゾーンの作品の特徴で、プロでもアマチュアでもよく演奏される。',
    'admin',
    1)
  ][(10, 'ウェーバー', 'カール・マリア・フォン・ウェーバー', NULL, 'admin', 0)][
    (11,
    'シューベルト',
    'フランツ・ペーター・シューベルト',
    'ドイツ前期ロマン派を代表する作曲家。ドイツ歌曲を確立した功績で名高いが、他の分野でも多くの傑作を残している。\r\nシューベルトの作品の特徴は、親しみやすい旋律とハーモニーの美しさ、そしてこれらを引き立てる効果的な転調にある。\r\nオーケストラの曲はほぼ2管編成であるが、トロンボーンを使う曲は限られている。\r\nこれは同時期の作曲家の作品にも共通している。',
    'admin',
    1)
  ][(12, 'リスト', 'フランツ・リスト', NULL, 'admin', 0)][
    (13, 'フンメル', 'ヨハン・ネポムク・フンメル', NULL, 'admin', 0)
  ][(14, 'ワーグナー', 'リヒャルト・ワーグナー', NULL, 'admin', 1)][
    (15, 'スッペ', 'フランツ・フォン・スッペ', NULL, 'admin', 0)
  ][(16, 'ライネッケ', 'カール・ライネッケ', NULL, 'admin', 0)][
    (17, 'ヨハン・シュトラウス2世', 'ヨハン・シュトラウス2世', NULL, 'admin', 0)
  ][(18, 'ヨーゼフ・シュトラウス', 'ヨーゼフ・シュトラウス', NULL, 'admin', 0)][
    (19, 'ヨハン・シュトラウス3世', 'ヨハン・シュトラウス3世', NULL, 'admin', 0)
  ][(20, 'ロット', 'ハンス・ロット', NULL, 'admin', 0)][
    (21, 'プフィッツナー', 'ハンス・プフィッツナー', NULL, 'admin', 0)
  ][
    (22,
    'ツェムリンスキー',
    'アレクサンダー・フォン・ツェムリンスキー',
    NULL,
    'admin',
    0)
  ][(23, 'フランツ・シュミット', 'フランツ・シュミット', NULL, 'admin', 0)][
    (24, 'シェーンベルク', 'アルノルト・シェーンベルク', NULL, 'admin', 0)
  ][(25, 'ヴェーベルン', 'アントン・ヴェーベルン', NULL, 'admin', 0)][
    (26, 'ベルク', 'アルバン・マリーア・ヨハネス・ベルク', NULL, 'admin', 0)
  ][
    (27,
    'ブルッフ',
    'マックス・クリスティアン・フリードリヒ・ブルッフ',
    NULL,
    'admin',
    0)
  ][(28, 'バッハ', 'ヨハン・ゼバスティアン・バッハ', NULL, 'admin', 0)][
    (29, 'ハンス・ジマー', 'ハンス・フロリアン・ツィマー', NULL, 'admin', 0)
  ][(30, 'ロッシーニ', 'ジョアキーノ・ロッシーニ', NULL, 'admin', 0)][
    (31, 'ドニゼッティ', 'ガエターノ・ドニゼッティ', NULL, 'admin', 0)
  ][(32, 'ヴェルディ', 'ジュゼッペ・ヴェルディ', NULL, 'admin', 1)][
    (33, 'プッチーニ', 'ジャコモ・プッチーニ', NULL, 'admin', 0)
  ][(34, 'マスカーニ', 'ピエトロ・マスカーニ', NULL, 'admin', 0)][
    (35, 'ブゾーニ', 'フェルッチョ・ブゾーニ', NULL, 'admin', 0)
  ][(36, 'レスピーギ', 'オットリーノ・レスピーギ', NULL, 'admin', 1)][
    (37,
    'ヴィヴァルディ',
    'アントニオ・ルーチョ・ヴィヴァルディ',
    NULL,
    'admin',
    0)
  ][(38, 'グリンカ', 'ミハイル・イヴァーノヴィチ・グリンカ', NULL, 'admin', 0)][
    (39,
    'ボロディン',
    'アレクサンドル・ポルフィーリエヴィチ・ボロディン',
    NULL,
    'admin',
    1)
  ][(40, 'キュイ', 'ツェーザリ・アントーノヴィチ・キュイ', NULL, 'admin', 0)][
    (41,
    'バラキレフ',
    'ミリイ・アレクセエヴィッチ・バラキレフ',
    NULL,
    'admin',
    0)
  ][(42, 'ムソルグスキー', 'モデスト・ムソルグスキー', NULL, 'admin', 1)][
    (43,
    'チャイコフスキー',
    'ピョートル・イリイチ・チャイコフスキー',
    NULL,
    'admin',
    1)
  ][
    (44,
    'リムスキー＝コルサコフ',
    'ニコライ・アンドレイェヴィチ・リムスキー＝コルサコフ',
    NULL,
    'admin',
    0)
  ][
    (45,
    'リャードフ',
    'アナトーリィ・コンスタンティーノヴィチ・リャードフ',
    NULL,
    'admin',
    0)
  ][
    (46, 'タネーエフ', 'セルゲイ・イヴァノヴィチ・タネーエフ', NULL, 'admin', 0)
  ][
    (47,
    'グラズノフ',
    'アレクサンドル・コンスタンティノヴィチ・グラズノフ',
    NULL,
    'admin',
    1)
  ][
    (48,
    'カリンニコフ',
    'ヴァシーリー・セルゲイェーヴィチ・カリンニコフ',
    NULL,
    'admin',
    0)
  ][
    (49,
    'ラフマニノフ',
    'セルゲイ・ヴァシリエヴィチ・ラフマニノフ',
    'ラフマニノフはロシアの作曲家。ロシア革命（十月革命）以降はロシアを離れ、アメリカで活動した。\r\n自身が卓越したピアニストであったこともあり作品の中心はピアノ協奏曲やピアノ独奏曲であるが、交響曲や交響詩も最近演奏される機会が多い。\r\n作品の特徴は、メロディーとハーモニーが一体となった甘さと切なさ、そして切れ味鋭いリズムにあり、奏者も聴衆も幸福感に包まれる。\r\nピアノ協奏曲やパガニーニ・ラプソディーをオケが選曲する場合は、成功/失敗がオケではなくソリストに左右されることを覚悟すること。',
    'admin',
    1)
  ][
    (50,
    'プロコフィエフ',
    'セルゲイ・セルゲーエヴィチ・プロコフィエフ',
    NULL,
    'admin',
    1)
  ][
    (51,
    'ショスタコーヴィチ',
    'ドミートリイ・ドミートリエヴィチ・ショスタコーヴィチ',
    NULL,
    'admin',
    1)
  ][(52, 'ハチャトゥリアン', 'アラム・ハチャトゥリアン', NULL, 'admin', 0)][
    (53,
    'カバレフスキー',
    'ドミトリー・ボリソヴィチ・カバレフスキー',
    NULL,
    'admin',
    0)
  ][
    (54,
    'スクリャービン',
    'アレクサンドル・ニコラエヴィチ・スクリャービン',
    NULL,
    'admin',
    0)
  ][(55, 'グリエール', 'レインゴリト・グリエール', NULL, 'admin', 0)][
    (56, 'メトネル', 'ニコライ・メトネル', NULL, 'admin', 0)
  ][
    (57,
    'ストラヴィンスキー',
    'イーゴリ・フョードロヴィチ・ストラヴィンスキー',
    NULL,
    'admin',
    1)
  ][(58, 'アルチュニアン', 'アレクサンドル・アルチュニアン', NULL, 'admin', 0)][
    (59,
    'ミャスコフスキー',
    'ニコライ・ヤコヴレヴィチ・ミャスコフスキー',
    NULL,
    'admin',
    0)
  ][(60, 'ショパン', 'フレデリック・フランソワ・ショパン', NULL, 'admin', 0)][
    (61, 'シマノフスキ', 'カロル・マチエイ・シマノフスキ', NULL, 'admin', 0)
  ][
    (62,
    'グリーグ',
    'エドヴァルド・グリーグ',
    'グリーグはノルウェーの作曲家。作品の中心はピアノ曲や歌曲だが、室内楽やオーケストラ曲も演奏の機会が多い。\r\nオーケストラ曲は通常2管編成であり、編成上の苦労は少ない。\r\n郷愁を誘う旋律あふれるグリーグの曲は優しさに満ちていて、聴衆の人気も高い。',
    'admin',
    1)
  ][(63, 'ハルヴォシェン', 'ヨハン・ハルヴォシェン', NULL, 'admin', 0)][
    (64, 'グノー', 'シャルル・グノー', NULL, 'admin', 0)
  ][(65, 'オッフェンバック', 'ジャック・オッフェンバック', NULL, 'admin', 0)][
    (66,
    'フランク',
    'セザール＝オーギュスト＝ジャン＝ギヨーム＝ユベール・フランク',
    NULL,
    'admin',
    0)
  ][(67, 'ラロ', 'エドゥアール・ラロ', NULL, 'admin', 0)][
    (68, 'サン＝サーンス', 'カミーユ・サン＝サーンス', NULL, 'admin', 0)
  ][(69, 'ドリーブ', 'レオ・ドリーブ', NULL, 'admin', 0)][
    (70,
    'ビゼー',
    'ジョルジュ・ビゼー',
    'ビゼーはフランスの作曲家。歌劇「カルメン」や劇付随音楽「アルルの女」が特に有名である。\r\nオーケストラ曲は2管編成が基調であるが、「アルルの女」ではサックスやプロヴァンス太鼓が活躍する。\r\n誰もが知っているメロディーがホールに響けば、観客と舞台が一体となって楽しめる。',
    'admin',
    1)
  ][(71, 'シャブリエ', 'エマニュエル・シャブリエ', NULL, 'admin', 0)][
    (72,
    'ドビュッシー',
    'クロード・アシル・ドビュッシー',
    'ドビュッシーはフランスの作曲家。ハーモニーの快感を追究した音楽書法はクラシックを超え、今日のポピュラー音楽全般にまで影響を与えている。\r\nオーケストラ曲は3管編成または4管編成が基本である。\r\n楽譜に記された細かなニュアンスを明確に表現することが求められ、アマオケでのハードルは高いと思われる。',
    'admin',
    1)
  ][(73, 'デュカス', 'ポール・アブラアム・デュカス', NULL, 'admin', 0)][
    (74, 'サティ', 'エリック・アルフレッド・レスリ・サティ', NULL, 'admin', 0)
  ][(75, 'フォーレ', 'ガブリエル・ユルバン・フォーレ', NULL, 'admin', 0)][
    (76,
    'ラヴェル',
    'ジョゼフ＝モーリス・ラヴェル',
    'ラヴェルはフランスの作曲家。古典的な形式に現代的な和声を導入した作品は、そのオーケストレーションの巧みさとも相まって評価が高い。\r\nオーケストラ曲の編成は２管編成から４管編成と多岐にわたる。\r\nこれは曲の性格によって編成規模を配慮した結果であろう。\r\n高度な技術を要する曲が多いが、演奏が成功すれば、多くの聴衆の感興を呼び起こすだろう。',
    'admin',
    1)
  ][
    (77,
    'プーランク',
    'フランシス・ジャン・マルセル・プーランク',
    NULL,
    'admin',
    0)
  ][(78, 'オネゲル', 'アルテュール・オネゲル', NULL, 'admin', 0)][
    (79, 'イベール', 'ジャック・イベール', NULL, 'admin', 0)
  ][
    (80,
    'ヴァレーズ',
    'エドガール・ヴィクトール・アシル・シャルル・ヴァレーズ',
    NULL,
    'admin',
    0)
  ][(81, 'デュティユー', 'アンリ・デュティユー', NULL, 'admin', 0)][
    (82, 'ブーレーズ', 'ピエール・ブーレーズ', NULL, 'admin', 0)
  ][(83, 'ミヨー', 'ダリウス・ミヨー', NULL, 'admin', 0)][
    (84,
    'ベルリオーズ',
    'ルイ・エクトル・ベルリオーズ',
    'ベルリオーズはフランスの作曲家。オーケストレーションそのものに音楽の魅力を見出した先駆者である。\r\n代表作「幻想交響曲」で採用された大規模なオーケストレーションは後世の作曲家に受け継がれている。\r\n序曲などには２管編成の作品もあり、演奏効果の高さで人気がある。',
    'admin',
    1)
  ][
    (85,
    'クロード＝ミシェル・シェーンベルク',
    'クロード＝ミシェル・シェーンベルク',
    NULL,
    'admin',
    0)
  ][
    (86,
    'サラサーテ',
    'パブロ・マルティン・メリトン・デ・サラサーテ・イ・ナバスクエス',
    NULL,
    'admin',
    0)
  ][
    (87,
    'アルベニス',
    'イサーク・マヌエル・フランシスコ・アルベニス・イ・パスクアル',
    NULL,
    'admin',
    0)
  ][
    (89,
    'グラナドス',
    'エンリケ・グラナドス・イ・カンピーニャ',
    NULL,
    'admin',
    0)
  ][(90, 'ファリャ', 'マヌエル・デ・ファリャ・イ・マテウ', NULL, 'admin', 0)][
    (91, 'ニールセン', 'カール・ニールセン', NULL, 'admin', 1)
  ][(92, 'シベリウス', 'ジャン・シベリウス', NULL, 'admin', 1)][
    (93, 'カレヴィ・アホ', 'カレヴィ・アホ', NULL, 'admin', 0)
  ][(94, 'ヨアヒム・ラフ', 'ヨアヒム・ラフ', NULL, 'admin', 0)][
    (95, 'スメタナ', 'ベドルジハ・スメタナ', NULL, 'admin', 1)
  ][
    (96,
    'ドヴォルザーク',
    'アントニーン・レオポルト・ドヴォルザーク',
    NULL,
    'admin',
    1)
  ][(97, 'ヤナーチェク', 'レオシュ・ヤナーチェク', NULL, 'admin', 0)][
    (98,
    'バルトーク',
    'バルトーク・ベーラ・ヴィクトル・ヤーノシュ',
    NULL,
    'admin',
    1)
  ][(99, 'コダーイ', 'コダーイ・ゾルターン', NULL, 'admin', 0)][
    (100, 'スーザ', 'ジョン・フィリップ・スーザ', NULL, 'admin', 1)
  ][(101, 'ガーシュウィン', 'ジョージ・ガーシュウィン', NULL, 'admin', 0)][
    (102, 'アンダーソン', 'ルロイ・アンダーソン', NULL, 'admin', 0)
  ][(103, 'コープランド', 'アーロン・コープランド', NULL, 'admin', 0)][
    (104, 'バーンスタイン', 'レナード・バーンスタイン', NULL, 'admin', 0)
  ][(105, 'アイヴズ', 'チャールズ・アイヴズ', NULL, 'admin', 0)][
    (106, 'ジョン・ケージ', 'ジョン・ケージ', NULL, 'admin', 0)
  ][(107, 'リード', 'アルフレッド・リード', NULL, 'admin', 1)][
    (108, 'バーンズ', 'ジェイムズ・チャールズ・バーンズ', NULL, 'admin', 1)
  ][(109, 'C・T・スミス', 'クロード・トーマス・スミス', NULL, 'admin', 0)][
    (110, 'ジェイガー', 'ロバート・エドワード・ジェイガー', NULL, 'admin', 1)
  ][
    (111,
    'パーシケッティ',
    'ヴィンセント・ラドウィグ・パーシケッティ',
    NULL,
    'admin',
    0)
  ][
    (112,
    'スウェアリンジェン',
    'ジェイムズ・スウェアリンジェン',
    NULL,
    'admin',
    1)
  ][(113, 'バーバー', 'サミュエル・バーバー', NULL, 'admin', 0)][
    (114,
    'ジョン・ウィリアムズ',
    'ジョン・タウナー・ウィリアムズ',
    NULL,
    'admin',
    0)
  ][
    (115, 'ステファン・シュワルツ', 'ステファン・シュワルツ', NULL, 'admin', 0)
  ][
    (116,
    'エルガー',
    'サー・エドワード・ウィリアム・エルガー',
    NULL,
    'admin',
    1)
  ][
    (117,
    'ディーリアス',
    'フレデリック・シーオドア・アルバート・ディーリアス',
    NULL,
    'admin',
    0)
  ][(118, 'ホルスト', 'グスターブ・ホルスト', NULL, 'admin', 1)][
    (119,
    'ヴォーン・ウィリアムズ',
    'レイフ・ヴォーン・ウィリアムズ',
    NULL,
    'admin',
    0)
  ][(120, 'スパーク', 'フィリップ・スパーク', NULL, 'admin', 1)][
    (121, 'ヘンデル', 'ゲオルク・フリードリヒ・ヘンデル', NULL, 'admin', 0)
  ][
    (122,
    'ステンハンマル',
    'カール・ヴィルヘルム・エウフェーン・ステンハンマル',
    NULL,
    'admin',
    0)
  ][(123, 'アッテルベリ', 'クット・アッテルベリ', NULL, 'admin', 0)][
    (124, '伊福部昭', '伊福部昭(いふくべあきら)', NULL, 'admin', 0)
  ][(125, '岩井直溥', '岩井直溥(いわいなおひろ)', NULL, 'admin', 0)][
    (126, '團伊玖磨', '團伊玖磨(だんいくま)', NULL, 'admin', 0)
  ][(127, '芥川也寸志', '芥川也寸志(あくたがわやすし)', NULL, 'admin', 0)][
    (128, '黛敏郎', '黛敏郎(まゆずみとしろう)', NULL, 'admin', 0)
  ][(129, '武満徹', '武満徹(たけみつとおる)', NULL, 'admin', 0)][
    (130, '一柳慧', '一柳慧(いちやなぎとし)', NULL, 'admin', 0)
  ][(131, '三善晃', '三善晃(みよしあきら)', NULL, 'admin', 0)][
    (132, '保科洋', '保科洋(ほしなひろし)', NULL, 'admin', 0)
  ][(133, '池辺晋一郎', '池辺晋一郎(いけべしんいちろう)', NULL, 'admin', 0)][
    (134, '真島俊夫', '真島俊夫(ましまとしお)', NULL, 'admin', 0)
  ][(135, '吉松隆', '吉松隆(よしまつたかし)', NULL, 'admin', 0)][
    (136, '細川俊夫', '細川俊夫(ほそかわとしお)', NULL, 'admin', 0)
  ][(137, '天野正道', '天野正道(あまのまさみち)', NULL, 'admin', 0)][
    (138, '東海林修', '東海林修(しょうじおさむ)', NULL, 'admin', 0)
  ][(139, '伊藤康英', '伊藤康英(いとうやすひで)', NULL, 'admin', 0)][
    (140, '大栗裕', '大栗裕(おおぐりひろし)', NULL, 'admin', 0)
  ][(141, '酒井格', '酒井格(さかいいたる)', NULL, 'admin', 0)][
    (142, '久石譲', '久石譲(ひさいしじょう)', NULL, 'admin', 0)
  ][(143, 'すぎやまこういち', 'すぎやまこういち', NULL, 'admin', 0)][
    (144, 'アッペルモント', 'ベルト・アッペルモント', NULL, 'admin', 1)
  ][
    (145,
    'ヤン・ヴァン＝デル＝ロースト',
    'ヤン・フランス・ヨーゼフ・ヴァン・デル・ロースト',
    NULL,
    'admin',
    0)
  ][(146, 'ネリベル', 'ヴァーツラフ・ネリベル', NULL, 'admin', 0)][
    (147, 'デ・メイ', 'ヨハン・アブラハム・デ・メイ', NULL, 'admin', 0)
  ][(148, 'R・W・スミス', 'ロバート・W・スミス', '', 'admin', 0)][
    (149, 'マイアベーア', 'ジャコモ・マイアベーア', NULL, 'admin', 0)
  ][(150, 'カステレード', 'ジャック・カステレード', NULL, 'admin', 0)][
    (151, '樽屋雅徳', '樽屋雅徳(たるやまさのり)', NULL, 'admin', 0)
  ][(152, 'ボザ', 'ウジェーヌ・ボザ', NULL, 'admin', 0)][
    (153, '長生淳', '長生淳(ながおじゅん)', NULL, 'admin', 0)
  ][(154, '高昌帥', '高昌帥(こうちゃんす)', NULL, 'admin', 0)][
    (155, '河邊一彦', '河邊一彦(かわべかずひこ)', NULL, 'admin', 0)
  ][(156, '福田洋介', '福田洋介(ふくだようすけ)', NULL, 'admin', 0)][
    (157, '八木澤教司', '八木澤教司(やぎさわたかし)', NULL, 'admin', 0)
  ][(158, '清水大輔', '清水大輔(しみずだいすけ)', NULL, 'admin', 0)][
    (159, '福島弘和', '福島弘和(ふくしまひろかず)', NULL, 'admin', 0)
  ][
    (160,
    'ニコライ',
    'カール・オットー・エーレンフリート・ニコライ',
    NULL,
    'admin',
    0)
  ][
    (161,
    'マーティン・エレビー',
    'マーティン・エレビー',
    'ブラスバンド曲を主に作曲し、チャンピオンシップ課題曲にも選出される。代表曲はTristan Encounters。',
    '5033f0a5-a977-4f00-98c3-71f1d370993c',
    0)
  ][
    (162,
    'フランコ・チェザリーニ',
    'フランコ・チェザリーニ',
    '「アルプスの詩」や「青い水平線」で知られる吹奏楽作家兼フルート奏者。2016年に自身初の交響曲「交響曲第一番『アークエンジェルズ』」を発表し来日、大変な話題となった。',
    '5033f0a5-a977-4f00-98c3-71f1d370993c',
    0)
  ][
    (163,
    'フンパーディンク',
    'エンゲルベルト・フンパーディンク',
    '',
    'admin',
    0)
  ][(164, 'ライニキー', 'スティーヴン・ライニキー', '', 'admin', 0)][
    (165, 'シャミナード', 'セシル・シャミナード', NULL, 'admin', 0)
  ][(166, '林大地', '林大地(はやしだいち)', '', 'admin', 0)][
    (167, '内藤政武', '内藤政武', '第26代学習院長', 'admin', 0)
  ][
    (168, 'ヨハン・シュトラウス1世', 'ヨハン・シュトラウス1世', '', 'admin', 0)
  ][(169, 'ハンソン', 'ハワード・ハンソン', '', 'admin', 0)];

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
        create: [
          {
            countryId: 2,
          },
        ],
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
        create: [
          {
            countryId: 2,
          },
        ],
      },
    },
  });

  // 各曲のデータを作成
  const tuneDataList = [
    [1, '交響曲第1番 ハ短調 Op.68', null, 1, 1, 'ハ短調', [1]],
    [2, '交響曲第2番 ニ長調 Op.73', null, 1, 1, 'ニ長調', [1]],
    [3, '交響曲第3番 ヘ長調 Op.90', null, 1, 1, 'ヘ長調', [1, 2]],
    [4, '交響曲第4番 ホ短調 Op.98', null, 1, 1, 'ホ短調', [1]],
  ] as const;

  await prisma.tune.createMany({
    data: tuneDataList.map(
      ([id, title, description, composerId, playstyleId, key, genres]) => ({
        id,
        title,
        description,
        author: 'admin',
        wikipedia_ja: 'url',
        wikipedia_en: 'url',
        imslp: 'url',
        timeMinutes: 40,
        key,
        composerId,
        playstyleId,
      }),
    ),
    skipDuplicates: true, // 既に存在するレコードをスキップする場合
  });

  await prisma.tuneGenresGenre.createMany({
    data: tuneDataList.flatMap(
      ([tuneId, title, description, composerId, playstyleId, key, genres]) => {
        return genres.map((genreId) => ({ genreId, tuneId }));
      },
    ),
    skipDuplicates: true, // 既に存在するレコードをスキップする場合
  });

  await Promise.all(
    tuneDataList.map(
      async ([
        id,
        title,
        description,
        composerId,
        playstyleId,
        key,
        genres,
      ]) => {
        return prisma.tune.upsert({
          where: {
            title_playstyleId_composerId: {
              title,
              composerId,
              playstyleId,
            },
            // すでに tuneParts が 1つ以上あったらスルー
            tuneParts: {
              some: {
                NOT: {
                  id: 0,
                },
              },
            },
          },
          update: {},
          create: {
            title,
            description,
            author: 'admin',
            wikipedia_ja: 'url',
            wikipedia_en: 'url',
            imslp: 'url',
            timeMinutes: 40,
            key,
            composerId,
            playstyleId,
            tuneGenres: {
              create: genres?.map((genreId) => ({
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
      },
    ),
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
