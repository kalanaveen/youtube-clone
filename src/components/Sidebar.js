import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
function Sidebar() {
    return (
        <div className="sidebar">
          <SidebarRow Icon={HomeIcon} title="Home" selected/>
          <SidebarRow Icon={ExploreIcon} title="Explore"/>
          <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions"/>
          <hr />
          <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
          <SidebarRow Icon={HistoryIcon} title="History"/>
          <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/>
          <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
          <SidebarRow Icon={ThumbUpIcon} title="Liked Videos"/>
          <hr />
        </div>
    )
}

export default Sidebar
