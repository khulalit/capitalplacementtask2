import Canditates from '@/components/Candidates'
import List from '@/components/DowndownList'
import ListHeader from '@/components/DowndownList/ListHeader'
import Filter from '@/components/Filter'
import Search from '@/components/SearchBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex gap-[2rem]">
      <Filter/>
      <Canditates/>
    </main>
  )
}
