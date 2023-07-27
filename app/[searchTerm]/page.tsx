import React from 'react'

import getWikiResults from '@/lib/getWikiResults'

type Props = {
    params: {
        searchTerm: string
    }
}

export default async function SearchResults( { params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
  const data = await wikiData
  const results: Result[] | undefined = data?.query?.pages

  return (
    <div>Search Results</div>
  )
}