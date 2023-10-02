import '../styles.css'

export default function ListHeader() {
    return (
        <div className='list_wrapper rounded-[0.5rem_0.5rem_0_0]'>
            <p className='header'>
                Filters
            </p>
            <div className='text-sm'>
                <span className='mr-2'>0</span>
                Selected
            </div>
        </div>
    )
}
