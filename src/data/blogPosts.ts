import Blog from "../@types/blog";

const blogPosts: Blog[] = [
  {
    title: "AWS — How to Install Redis on EC2 Instance",
    body: `
      <h2>Setup Redis on AWS EC2 Ubuntu</h2>
      <p>Guide for how to install Redis on AWS EC2, to make it production ready.</p>
      <h3>Introduction</h3>
      <p>Redis is one of the most popular an in-memory key-value store known for its flexibility, performance, and wide programming language support.</p>
      <p>This guide shows how to install, configure, and secure Redis on an AWS EC2 Ubuntu 22.04 server.</p>
      <h3>Step 1 — Installing and Configuring Redis</h3>
      <p>In order to get the latest version of Redis, use apt to install it from the official Ubuntu repositories.</p>
      <p>But before installing Redis, update your local apt package cache if you haven’t done so recently:</p>
      <div class="col-md-6"><pre><span>sudo apt update</span></pre></div>
      <p>Then, install Redis with following command:</p>
      <div class="col-md-6"><pre><span>sudo apt install redis-server</span></pre></div>
      <p>After Redis is downloaded and installed, there is one important configuration change to do in the Redis configuration file.</p>
      <p>Open Redis configuration file with your preferred text editor (I'm usin vim):</p>
      <div class="col-md-6"><pre><span>sudo vim /etc/redis/redis.conf</span></pre></div>
      <p>Inside the Redis configuration file, find the supervised directive and change it from "no" to "systemd". This directive allows you to declare an init system to manage Redis as a service.</p>
      <div class="col-md-6"><pre><span>supervised systemd</span></pre></div>
      <p>At this point this is the only change you need to make to the Redis configuration file.</p>
      <p>Save and close once finished. Then, restart the Redis service to reflect the changes you made to the configuration file using command:</p>
      <div class="col-md-6"><pre><span>sudo systemctl restart redis.service</span></pre></div>
      <p>Before continuing with using Redis, it’s important to check, that Redis is functioning properly.</p>
      <h3>Step 2 — Testing Redis</h3>
      <p>Let's ensure that Redis is functioning as expected before making any more changes to its configuration.</p>
      <p>Check that the Redis service is running:</p>
      <div class="col-md-6"><pre><span>sudo systemctl status redis</span></pre></div>
      <p>If Redis is running without any errors, this command will produce output like this:</p>
      <div class="col-md-9"><pre class="lighter"><span>Output
● redis-server.service - Advanced key-value store
   Loaded: loaded (/lib/systemd/system/redis-server.service; enabled; vendor preset: enabled)
   Active: active (running) since Wed 2018-06-27 18:48:52 UTC; 12s ago
     Docs: http://redis.io/documentation,
           man:redis-server(1)
  Process: 2421 ExecStop=/bin/kill -s TERM $MAINPID (code=exited, status=0/SUCCESS)
  Process: 2424 ExecStart=/usr/bin/redis-server /etc/redis/redis.conf (code=exited, status=0/SUCCESS)
 Main PID: 2445 (redis-server)
    Tasks: 4 (limit: 4704)
   CGroup: /system.slice/redis-server.service
           └─2445 /usr/bin/redis-server 127.0.0.1:6379</span></pre></div>
      <p>From the output you can see, that Redis is running and is already enabled, this means, that it is set to start every time the server boots.</p>
      <p>If you want to start Redis manually, you can enable that with:</p>
      <div class="col-md-6"><pre><span>sudo systemctl disable redis</span></pre></div>
      <p>Next step is to test that Redis is functioning correctly, connect to the Redis server using the command-line client:</p>
      <div class="col-md-6"><pre><p class="preP">redis-cli</p><p class="preP">ping</p></pre></div>
      <p>Output should be pong.</p>
      <p>Next, check that you’re able to set keys by running:</p>
      <div class="col-md-6"><pre><span>set test "It's working!"</span></pre></div>
      <p>Output should be "OK".</p>


    `,
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
    timeToRead: "30 minutes",
  },
];

export default blogPosts;
