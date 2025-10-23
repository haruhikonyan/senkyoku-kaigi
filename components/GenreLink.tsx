'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

function GenreLink({ genre }: { genre: { id: number; name: string } }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams);
  // TODO: 重複しないようにする
  newSearchParams.append('genreIds', genre.id.toString());
  return (
    <Link href={`${pathname}?${newSearchParams.toString()}`}>
      <div className="inline-block px-2 py-1 text-sm font-semibold text-white bg-gray-600 rounded">
        {genre.name}
      </div>
    </Link>
  );
}

export default GenreLink;
