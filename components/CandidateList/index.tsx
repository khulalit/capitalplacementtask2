import List from './List'
import ListHeader from './ListHeader'
import './styles.css'

export default function CanditateList() {
  return (
    <div className='py-2 bg-white rounded-[0.5rem_0.5rem_0_0]'>
        <ListHeader/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}
