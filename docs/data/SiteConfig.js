module.exports = {
  // blogPostDir: "posts", // The name of directory that contains your posts.
  lessonsDir: "lessons", // The name of the directory that contains lessons or docs.
  siteTitle: "oracle db, graphql, docker, & cloud", // Site title.
  siteTitleAlt: "OracleDB-GraphQL", // Alternative site title for SEO.
  siteLogo: "/oracledb-graphql-demo/logos/hub-logo-white.png", // Logo used for SEO and manifest.
  siteUrl: "https://unofficialoraclecloudhub.github.io/", // Domain of your website without pathPrefix.
  pathPrefix: "/oracledb-graphql-demo/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "docs to explain the docker-oracledb-graphql demo :)", // Website description used for RSS feeds/meta description tag.
  // siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "", // FB Application ID for using app insights
  // googleAnalyticsID: "", // GA tracking ID.
  // disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "SBlack4", // Username to display in the author segment.
  userTwitter: "https://twitter.com/Genseb7", // Optionally renders "Follow Me" in the UserInfo segment.
  // userLocation: "", // User location to display in the author segment.
  // userAvatar: "", // User avatar to display in the author segment.
  userDescription: "GitHub - @sblack4", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/sblack4",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Genseb7",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Messenger",
      url: "https://www.messenger.com/t/steven.black.92167",
      iconClassName: "fa fa-message"
    },
    {
      label: "Email",
      url: "mailto:sblack.rocks@gmail.com",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Linkedin",
      url: "https://www.linkedin.com/in/steven-black/",
      iconClassName: "fa fa-envelope"
    }
  ],
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ff000", // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  // Used to generate the Table Of Contents. 
  // Index 0 should be blank.
  toCChapters: ["", "Overview", "Running the Demo", "Why GraphQL & Oracle DB", "Learn More", "Summary"] 
};
