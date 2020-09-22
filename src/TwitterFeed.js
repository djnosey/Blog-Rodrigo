import React from 'react'
import './TwitterFeed.css'
import { TwitterTimelineEmbed } from 'react-twitter-embed';


function TwitterFeed() {
    return (
        <div className ="twitterFeed">
            <TwitterTimelineEmbed
  sourceType="profile"
  screenName="TheEconomist"
  options={{height: 1000}}
/>
            </div>
    )
}

export default TwitterFeed
