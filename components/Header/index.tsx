'use client'
import './styles.css'
import UserCheckIcon from '@/assets/header/usercheck.svg'
import UserChoiceIcon from '@/assets/header/userchoice.svg'
import UserVoiceIcon from '@/assets/header/uservoice.svg'
import MessageIcon from '@/assets/header/message.svg'
import TagIcon from '@/assets/header/tag.svg'
import ArrowdownIcon from '@/assets/header/arrowdown.svg'
import ArrowdownIcon2 from '@/assets/arrowdown.svg'
import Image from 'next/image'
import List from '@/components/Header/List'
import { useState } from 'react'


export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header>
            <div>
                <h1>London Internship Program</h1>
                <span className='h1_sub font-sans'>London</span>
            </div>
            <div className={`select ${open ? 'rounded-[16px_16px_8px_0px]': 'rounded-[16px]'}`}>
                Opportunity Browsing
                <Image src={ArrowdownIcon2} alt='icon' height={20} onClick={()=>setOpen(!open)}/>
                {open && <div className='w-full h-[500px] select_div overflow-y-auto shadow-[0px_4px_25px_0px_rgba(29,78,216,0.05)] '>
                    <List text='Applied' quantity={1745} selected={false}/>
                    <List text='Shorlisted' quantity={453} selected={false}/>
                    <List text='Technical Interview' quantity={123} selected={false} />
                    <List text='Opportunity Browsing' quantity={243} selected />
                    <List text='View Interview I' quantity={25} selected={false} />
                    <List text='View Interview II' quantity={25} selected={false} />
                    <List text='View Interview III' quantity={25} selected={false} />
                    <List text='Offer' quantity={25} selected={false}/>
                    <List text='WithDrawn' quantity={25} selected={false}/>

                </div>}
            </div>
            <div className='btn-list'>
                <button>
                    <Image src={TagIcon} alt='Tag icon' />
                </button>
                <button>
                    <Image src={UserChoiceIcon} alt='Tag icon' />
                </button>
                <button>
                    <Image src={UserCheckIcon} alt='Tag icon' />
                </button>
                <button>
                    <Image src={UserVoiceIcon} alt='Tag icon' />
                </button>
                <button>
                    <Image src={MessageIcon} alt='Tag icon' />
                </button>
                <div className='flex'>
                    <button className='lg-btn-left'>
                        Move to Video Interview I
                    </button>
                    <button className='sm-btn-right'>
                        <Image src={ArrowdownIcon} alt='arrow icon' />
                    </button>
                </div>
            </div>
        </header>
    )
}
