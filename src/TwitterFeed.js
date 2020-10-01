import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function TwitterFeed() {
  return (
    <div className="twitterFeed">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="avisoemdois"
        options={{ height: 1000 }}
      />
    </div>
  );
}

export default TwitterFeed;
