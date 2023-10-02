import Image from 'next/image'
import './styles.css'
import FileIcon from '@/assets/filter/document.svg'
import ArrowdownIcon from '@/assets/arrowdown.svg'

export default function List({text}: {text:string}) {
  return (
    <li className='list_wrapper'>
        <Image src={FileIcon} alt='File icon'/>
        <p className=' mr-auto'>
           {text}
        </p>
        <button>
            <Image src={ArrowdownIcon} alt='File icon'/>
        </button>
    </li>
  )
}
