import { prisma } from '@/lib/prisma';

type SearchParams = {
  composerId?: number;
  genreIds?: number[];
};
export const searchTuneIds = (params: SearchParams) => {
  const { composerId, genreIds } = params;
  return prisma.tune.findMany({
    where: {
      composerId,
      tuneGenres: {
        // TODO: 要調整
        // 1,2 という指定をしたら 1,2 を含むもののみ出すみたいにしたい
        // 今 or 検索になっており 1 だけのものとかが出る
        // every にすると完全一致になってしまい 1 だけ指定した場合 1,2 のものが出なくなる
        some: {
          genreId: {
            in: genreIds,
          },
        },
      },
    },
    select: {
      id: true,
    },
    orderBy: {
      title: 'asc',
    },
  });
};
