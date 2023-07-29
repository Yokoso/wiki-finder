import React from 'react'

import getWikiResults from '@/lib/getWikiResults'

type Props = {
    params: {
        searchTerm: string
    }
}

export async function generateMetadata( { params: { searchTerm } } : Props ) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
  const data = await wikiData
  const displayTerm = searchTerm.replaceAll('%20', ' ')
}

export default async function SearchResults( { params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
  const data = await wikiData
  const results: Result[] | undefined = data?.query?.pages

  const content = (
    <main className='max-w-lg min-h-screen py-1 mx-auto bg-slate-200'>
      { results 
        ? Object.values(results).map(result => 
            <p>{ JSON.stringify(result) }</p>
          )
        : <h2 className='p-2 text-xl'>{ `${searchTerm} not found` }</h2>
      }
    </main>
  )

  return content
}