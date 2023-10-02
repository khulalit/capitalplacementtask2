import '../styles.css'

export default function ListHeader() {
  return (
    <div className='candidate_header_wrapper'>
        <input type='checkbox'/>
        <div className='mr-auto'>
            <span className='mx-2'>254</span>
            Candidates
        </div>
        <div className='filter'>
            <button className='selected'>
                Qualified
            </button>
            <button>
                Task <span className='w-8 h-8 p-2 rounded-full bg-[#F7F8FD]'>23</span>
            </button>
            <button>
                Disqualified <span className='w-8 h-8 p-2 rounded-full bg-[#F7F8FD]'>78</span>
            </button>
        </div>
    </div>
  )
}
