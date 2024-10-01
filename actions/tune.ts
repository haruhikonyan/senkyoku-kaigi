import { prisma } from '@/lib/prisma';

export const getComposerWhthParts = async (composerId: number) => {
  return await prisma.composer.findFirst({
    where: { id: composerId },
    include: {
      tunes: {
        include: {
          playstyle: true,
          tuneGenres: {
            include: {
              genre: true,
            },
          },
          tuneParts: {
            include: {
              partGroup: {
                include: {
                  partGroupCategory: true,
                },
              },
              parts: {
                include: {
                  mainInstrument: true,
                  partSubInstruments: {
                    include: {
                      instrument: true,
                    },
                  },
                },
              },
            },
          },
        },
        orderBy: {
          title: 'asc',
        },
      },
    },
  });
};
