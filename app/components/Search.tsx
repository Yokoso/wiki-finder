'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'


export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
    }

    return (
        <form className="flex justify-center w-50 md:justify-between" onSubmit={handleSubmit}>
            <input type="text" value={ search } onChange={ (e) => setSearch(e.target.value) } className='p-2 text-xl bg-white w-80 rounded-xl' placeholder='Search'/>
            <button className='p-2 ml-2 text-xl font-bold rounded-lg bg-slate-300'>🔍</button>
        </form>
    )
}