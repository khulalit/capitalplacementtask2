import PlayIcon from '@/assets/footer/play.svg'
import FileIcon from '@/assets/footer/file.svg'
import Image from 'next/image'

export default function FloatInfo({quantityVideo, program} : {quantityVideo: number|string, program: number|string}) {
  return (
    <div className='absolute bottom-[2rem] right-[4rem] flex text-[10px] gap-8'>
        <div className='flex gap-2 bg-[rgba(246,246,249,0.30)] rounded-[20%] p-2 font-bold text-[#1D4ED8]'>
            <Image src={PlayIcon} alt="icon"/>
            <span>
                {quantityVideo}
            </span>
        </div>
        <div className='flex gap-2 items-center bg-[#D1DDFF] p-[8px_16px] rounded-[16px] text-[#1D4ED8] font-bold'>
            <Image src={FileIcon} alt="icon"/>
            <span>
                {program} Program
            </span>
        </div>
    </div>
  )
}
