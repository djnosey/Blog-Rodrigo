import React from "react";
import "./TwitterFeed.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import "./TwitterFeed.css";

function TwitterFeed() {
  return (
    <div className="twitterFeed">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="avisoemdois"
        options={{ height: 800 }}
      />
    </div>
  );
}

export default TwitterFeed;
