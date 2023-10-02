import React from 'react'
import Search from '../SearchBar'
import List from '../DowndownList'
import ListHeader from '../DowndownList/ListHeader'

export default function Filter() {
  return (
    <div className='min-w-[400px]'>
        <Search/>
        <ListHeader/>
        <List text='Personal Information'/>
        <List text='Education'/>
        <List text='Work Experience'/>
        <List text='Activity Filter'/>
        <List text='Advanced Filter'/>
    </div>
  )
}
