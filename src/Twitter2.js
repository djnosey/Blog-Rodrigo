import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

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
