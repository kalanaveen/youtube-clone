import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from "@material-ui/icons/Tune";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwnj8RtKKAlRthZGyfivC3fsPuYjXW_E0n6P3RoNj=s88-c-k-c0x00ffffff-no-rj"
                channel="Ed Sheeran"
                verified
                subs="46.5M"
                noOfVideos={111}
                description="Music is a Magic"
            />
            <hr />

            <VideoRow
                views="33M"
                subs="46.5M"
                description="The official performance video for Ed Sheeran - Afterglow "
                timestamp="2 weeks ago"
                channel="Ed Sheeran"
                title="Ed Sheeran - Afterglow [Official Performance Video]"
                image="https://i.ytimg.com/vi/ZVznzY7EjuY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAAHmiSo1PUEJ1QQ0Otifpqfqo_hg"
            />
             <VideoRow
                views="33M"
                subs="46.5M"
                description="The official performance video for Ed Sheeran - Afterglow "
                timestamp="2 weeks ago"
                channel="Ed Sheeran"
                title="Ed Sheeran - Afterglow [Official Performance Video]"
                image="https://i.ytimg.com/vi/rqw3OftE5sA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQLemWME87k6i_e1Qy9LGcMZJBqg"
            />
             <VideoRow
                views="33M"
                subs="46.5M"
                description="The official performance video for Ed Sheeran - Afterglow "
                timestamp="2 weeks ago"
                channel="Ed Sheeran"
                title="Ed Sheeran - Afterglow [Official Performance Video]"
                image="https://i.ytimg.com/vi/7qAXvOFhlDc/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC7Uz6vCAsr8u2h09fW-z1UsG6cSw"
            />
             <VideoRow
                views="33M"
                subs="46.5M"
                description="The official performance video for Ed Sheeran - Afterglow "
                timestamp="2 weeks ago"
                channel="Ed Sheeran"
                title="Ed Sheeran - Afterglow [Official Performance Video]"
                image="https://i.ytimg.com/vi/rqw3OftE5sA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQLemWME87k6i_e1Qy9LGcMZJBqg"
            />
             <VideoRow
                views="33M"
                subs="46.5M"
                description="The official performance video for Ed Sheeran - Afterglow "
                timestamp="2 weeks ago"
                channel="Ed Sheeran"
                title="Ed Sheeran - Afterglow [Official Performance Video]"
                image="https://i.ytimg.com/vi/ZVznzY7EjuY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAAHmiSo1PUEJ1QQ0Otifpqfqo_hg"
            />
             <VideoRow
                views="33M"
                subs="46.5M"
                description="The official performance video for Ed Sheeran - Afterglow "
                timestamp="2 weeks ago"
                channel="Ed Sheeran"
                title="Ed Sheeran - Afterglow [Official Performance Video]"
                image="https://i.ytimg.com/vi/ZVznzY7EjuY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAAHmiSo1PUEJ1QQ0Otifpqfqo_hg"
            />
             <VideoRow
                views="33M"
                subs="46.5M"
                description="The official performance video for Ed Sheeran - Afterglow "
                timestamp="2 weeks ago"
                channel="Ed Sheeran"
                title="Ed Sheeran - Afterglow [Official Performance Video]"
                image="https://i.ytimg.com/vi/ZVznzY7EjuY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAAHmiSo1PUEJ1QQ0Otifpqfqo_hg"
            />
        </div>
    )
}

export default SearchPage
