export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61bf770ed4f98050b38173b0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-dutdbwva",
                  apiId: "4b1f167a-668b-434f-823c-8b723a5efe17",
                },
                {
                  buildHookId: "61bf770f585a786094fdf22a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-qehp978w",
                  apiId: "a4328062-cfb0-497d-9fa3-47779c3cfcf5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/endrjusf/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-qehp978w.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
