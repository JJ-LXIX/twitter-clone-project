import React from 'react';
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,} from '@heroicons/react/outline';
import SidebarRow from './SidebarRow';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="flex flex-col ">
        <Image  width={40}  height={40} layout='fixed' src="https://links.papareact.com/drq" alt="twitter logo" />
        <SidebarRow  Icon = {HomeIcon} title='Home'/>
        <SidebarRow Icon = {HashtagIcon} title='Explore'/>
        <SidebarRow Icon = {BellIcon} title='Notifications'/>
        <SidebarRow Icon = {MailIcon} title='Messages'/>
        <SidebarRow Icon = {BookmarkIcon} title='Bookmarks'/>
        <SidebarRow Icon = {CollectionIcon} title='Lists'/>
        <SidebarRow Icon = {UserIcon} title='Sign In'/>

        <SidebarRow Icon = {DotsCircleHorizontalIcon} title='More'/>
    </div>
  )
    
}

export default Sidebar