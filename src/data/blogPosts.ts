import Blog from "../@types/blog";

const blogPosts: Blog[] = [
  {
    title: "AWS — How to Install Redis on EC2 Instance",
    body: `<h2>Setup Redis on AWS EC2 Ubuntu</h2><p>
Guide for how to install Redis on AWS EC2, to make it production ready.</p>`,
    cover: {
      src:
        "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1678003966/DevDesign/redis.png",
      alt: "Redis",
      title: "Redis on AWS EC2",
      srcSets: [
        {
          srcSet:
            "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1678003966/DevDesign/redis.png",
          media: "(min-width:650px)",
        },
      ],
    },
    slug: "aws-how-to-install-redis-on-ec2-instance",
    createdAt: "2023-03-05T10:39:02.322Z",
  },
];

export default blogPosts;
