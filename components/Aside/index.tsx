import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HomeIcon from '@/assets/aside/home.svg'
import UsersIcon from '@/assets/aside/user.svg'
import Calender from '@/assets/aside/calender.svg'
import ShareIcon from '@/assets/aside/share.svg'
import FileIcon from '@/assets/aside/document.svg'
import FavIcon from '@/assets/aside/fav.svg'
import NotebookIcon from '@/assets/aside/nodebook.svg'
import ArrowLeftIcon from '@/assets/aside/arrow.svg'
import SettingIcon from '@/assets/aside/setting.svg'

export default function AsideNav() {
    return (
        <>
            <div className='w-8 h-8 rounded-full bg-blue-100'>

            </div>
            <div className='flex flex-col items-center justify-between'>

                <Link href={'#'} className='inline-block w-fit'>
                    <div className='bg-blue-100 p-2 rounded-lg w-8 h-8'>
                        <Image src={HomeIcon} alt='home icon' />
                    </div>
                </Link>
                <Link href={'#'} className='inline-block w-fit'>
                    <div>
                        <Image src={UsersIcon} alt='home icon' />
                    </div>
                </Link>
                <Link href={'#'} className='inline-block w-fit'>
                    <div>
                        <Image src={Calender} alt='home icon' />
                    </div>
                </Link>
                <Link href={'#'} className='inline-block w-fit'>
                    <div>
                        <Image src={ShareIcon} alt='home icon' />
                    </div>
                </Link>
                <Link href={'#'} className='inline-block w-fit'>
                    <div>
                        <Image src={FileIcon} alt='home icon' />
                    </div>
                </Link>
                <Link href={'#'} className='inline-block w-fit'>
                    <div>
                        <Image src={NotebookIcon} alt='home icon' />
                    </div>
                </Link>
                <Link href={'#'} className='inline-block w-fit'>
                    <div>
                        <Image src={FavIcon} alt='home icon' />
                    </div>
                </Link>
                <Link href={'#'} className='inline-block w-fit'>
                    <div>
                        <Image src={ArrowLeftIcon} alt='home icon' />
                    </div>
                </Link>
            </div>
            <Link href={'#'} className='inline-block w-fit'>
                <div>
                    <Image src={SettingIcon} alt='home icon' />
                </div>
            </Link>
            <div className='w-8 h-8 rounded-full bg-blue-100'>

            </div>

        </>
    )
}
