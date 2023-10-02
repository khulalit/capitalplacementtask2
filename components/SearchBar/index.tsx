import './styles.css'
import Image from 'next/image'
import SearchIcon from '@/assets/search.svg'
import InfoIcon from '@/assets/info.svg'

export default function Search() {
  return (
    <div className='search_wrapper'>
        <Image src={SearchIcon} alt='search icon'/>
        <input type='text' placeholder='Search by name, edu, exp and #tag'/>
        <Image src={InfoIcon} alt='search icon'/>
    </div>
  )
}
