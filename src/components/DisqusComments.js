"use client";

import { DiscussionEmbed } from "disqus-react";

export default function DisqusComments({ title, postUrl }) {
  return (
    <DiscussionEmbed
      shortname={process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}
      config={{
        identifier: postUrl,
        title: title,
      }}
    />
  );
}
