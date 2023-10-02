import '../styles.css'
import Pill from '../Pill'

export default function List() {
  return (
    <div className='list_contaier'>
        <input type='checkbox'/>
        <div className='user'>
            A
        </div>
        <div className='mr-auto flex flex-col gap-2'>
            <h3 className='text-[14px] font-bold'>John Doe</h3>
            <strong className='text-[10px]'>Boston, USA</strong>
            <p className='text-[10px]'>Bachelor - MIT (2023 - 2023)</p>
            <p className='text-[8px] text-[#1D4ED8] font-bold flex gap-2'>
                <span>#top_candidate</span>
                <span>#top_candidate</span>
            </p>
            <div className='flex gap-2'>
                <Pill text='New York'/>
                <Pill text='New York'/>
                <Pill text='New York'/>
            </div>
        </div>
    </div>
  )
}
