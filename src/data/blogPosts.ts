import Blog from "../@types/blog";

const blogPosts: Blog[] = [
  {
    title: "AWS - How to setup Ubuntu 22.04 EC2 Instance",
    body: `<h2>Setup AWS Ubuntu 22.04 EC2 Instance</h2>
      <p>Guide for how to setup Ubuntu 22.04 AWS EC2 instance for Redis.</p>
      `,
    cover: {
      src:
        "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1631596944/DevDesign/aws_smile-header-desktop-en-white.png",
      alt: "AWS Ubuntu 22.04 EC2 instance",
      title: "AWS Ubuntu 22.04 EC2 instance",
      sources: [
        {
          srcSet:
            "https://res.cloudinary.com/romantuomisto-cloud/image/upload/c_scale,w_650/v1631596944/DevDesign/aws_smile-header-desktop-en-white.png",
          media: "(min-width:650px)",
        },
      ],
    },
    slug: "aws-how-to-setup-ubuntu-22.04-ec2-instance",
    createdAt: "2023-03-06T06:39:05.234Z",
    timeToRead: "20 minutes",
  },
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
      <p>Retrieve the value you have just set by typing:</p>
      <div class="col-md-6"><pre><span>get test</span></pre></div>
      <p>If everything was fine, you will retrieve the value you stored:</p>
      <p>Output "It's working!"</p>
      <p>Next exit the Redis prompt to get back to the shell:</p>
      <div class="col-md-6"><pre><span>exit</span></pre></div>
      <p>As a final step, we will test that Redis can persist data, even after it’s been stopped or restarted.</p>
      <p>In  order to do this, first restart the Redis instance:</p>
      <div class="col-md-6"><pre><span>sudo systemctl restart redis</span></pre></div>
      <p>Next connect with the command-line client to Redis and confirm that your "test value" is still in memory:</p>
      <div class="col-md-6"><pre><p class="preP">redis-cli</p><p class="preP">get test</p></pre></div>
      <p>The value of your key should still be accessible:</p>
      <div class="col-md-9"><pre class="lighter"><p class="preP">Output</p><p class="preP">"It's working!"</p></pre></div>
      <p>Exit when you are finished:</p>
      <div class="col-md-6"><pre><span>exit</span></pre></div>
      <p>Now your Redis is fully operational. However, some of its default configuration settings are insecure and may give hackers opportunities to attack and gain access to your server and its data.</p>
      <p>Two final steps will cover methods for mitigating these vulnerabilities, as it is recommended by the official Redis website.</p>
      <h3>Step 3 — Binding to localhost</h3>
      <p>By default, Redis is only accessible from localhost. However, if you updated Redis configuration file to allow connections from anywhere, you should ensure that Redis is only accessible from localhost.
      <p>Fix by opening the Redis configuration file:</p>
      <div class="col-md-6"><pre><span>sudo vim /etc/redis/redis.conf</span></pre></div>
      <div class="col-md-9"><pre class="lighter"><p class="preP">/etc/redis/redis.conf</p><p>Locate this line and make sure it is uncommented (remove the # if it exists):</p><p class="preP">bind 127.0.0.1 ::1</p></pre></div>
      <p>Save and close the file when finished.</p>
      <p>Next restart the service to ensure, that systemd runs with your changes:</p>
      <div class="col-md-6"><pre><span>sudo systemctl restart redis</span></pre></div>
      <p>To check, that this change is working, run the following netstat command:</p>
      <p>If you don't have netstat as commandline executable, run this first:</p>
      <div class="col-md-6"><pre><span>sudo apt install net-tools</span></pre></div>
      <div class="col-md-6"><pre><span>sudo netstat -lnp | grep redis</span></pre></div>
      <div class="col-md-9"><pre class="lighter"><p class="preP">Output</p><p class="preP">tcp  0  0 127.0.0.1:6379  0.0.0.0:*  LISTEN  14222/redis-server</p><p class="preP">tcp6 0  0 ::1:6379        :::*       LISTEN  14222/redis-server</p></pre></div>
      <p>Following shows, that the redis-server is bound to localhost (127.0.0.1), reflecting the bind setting in the Redis configuration file. If you see another IP address in that column (0.0.0.0, for example), then you should restart the Redis service again.</p>
      <p>Finally when your Redis is only listening in on localhost, it will be more difficult for hackers to make requests to Redis or gain access to your server.</p>
      <p>However, Redis isn’t currently set to require users to authenticate themselves, before making changes to its configuration or the data that it holds. In order to fix this, let's require Redis to authenticate users with Password.</p>
      <h3>Step 4 — Configuring a Redis Password</h3>
      <p>Configure a Redis password, in order to enable it's built-in security feature — the auth command, which requires clients to authenticate to access the database.</p>
      <p>The Redis password is enabled in Redis’s configuration file "/etc/redis/redis.conf":</p>
      <div class="col-md-6"><pre><span>sudo vim /etc/redis/redis.conf</span></pre></div>
      <p>Scroll to the SECURITY section and look for a commented directive that reads:</p>
      <div class="col-md-6"><pre><span># requirepass foobared</span></pre></div>
      <p>Uncomment it by removing the #, and change foobared to a secure password.</p>
      <p>Note: Above the requirepass directive in the redis.conf file:</p>
      <p># use a very strong password otherwise it will be very easy to break.</p>
      <p>It’s important that you specify a very strong and very long password. Use the openssl command to generate a random password:</p>
      <div class="col-md-6"><pre><span>openssl rand 60 | openssl base64 -A</span></pre></div>
      <p>Your output should look something like:</p>
      <div class="col-md-9"><pre class="lighter"><p class="preP">Output</p><p class="preP">RBOJ9cCNoGCKhlEBwQLHri1g+atWgn4Xn4HwNUbtzoVxAYxkiYBi7aufl4MILv1nxBqR4L6NNzI0X6cE</p></pre></div>
      <p>After setting the Redis password, save and close the file, then restart Redis:</p>
      <div class="col-md-6"><pre><span>sudo systemctl restart redis.service</span></pre></div>
      <p>To test newely added Redi password, open up the Redis client:</p>
      <div class="col-md-6"><pre><span>redis-cli</span></pre></div>
      <p>First try to add a key without password:</p>
      <div class="col-md-6"><pre><span>set key1 10</span></pre></div>
      <div class="col-md-9"><pre class="lighter"><p class="preP">Output</p><p class="preP">(error) NOAUTH Authentication required.</p></pre></div>
      <p>Then authenticate:</p>
      <div class="col-md-6"><pre><span>auth your_redis_password</span></pre></div>
      <div class="col-md-9"><pre class="lighter"><p class="preP">Output</p><p class="preP">OK</p></pre></div>
      <p>Secondly try to add a key with Redis password:</p>
      <div class="col-md-6"><pre><span>set key1 10</span></pre></div>
      <div class="col-md-9"><pre class="lighter"><p class="preP">Output</p><p class="preP">OK</p></pre></div>
      <p>get key1 queries Redis for the value of the new key:</p>
      <div class="col-md-6"><pre><span>get key1</span></pre></div>
      <div class="col-md-9"><pre class="lighter"><p class="preP">Output</p><p class="preP">"10"</p></pre></div>
      <p>exit the redis-cli:</p>
      <div class="col-md-6"><pre><span>exit</span></pre></div>
      <p>Last 5th step, is dedicated at renaming Redis commands which, if entered by mistake or by a hacker, could cause serious damage to your Redis database.</p>
      <h3>Step 5 — Renaming Dangerous Commands</h3>
      <p>The second security feature built into Redis is ability to rename or completely disable certain commands (FLUSHDB, FLUSHALL, KEYS, PEXPIRE, DEL, CONFIG, SHUTDOWN, BGREWRITEAOF, BGSAVE, SAVE, SPOP, SREM, RENAME, and DEBUG), that are considered dangerous.</p>
      <p>Rename or disable commands is configured in the same SECURITY section of the /etc/redis/redis.conf file.</p>
      <p>How to tell what commands to renme and what to disable should disable, it depends on your specific needs in these commands in your app.</p>
      <p>For example, if you know, that you will never use a command, then disable it. Otherwise rename it.</p>
      <p>To enable or disable Redis commands, open the configuration file:</p>
      <div class="col-md-6"><pre><span>sudo vim /etc/redis/redis.conf</span></pre></div>
      <p>Warning: These are only examples on how to disable and rename commands. You should only choose to disable or rename the commands that make sense for you.</p>
      <p>You can review the full list of commands for yourself and determine how they might be misused at <a href="https://redis.io/commands" target="__blank">redis.io/commands</a>.</p>
      <p>To disable a command, rename it into an empty string, like this:</p>
      <div class="col-md-9"><pre class="lighter"><p class="preP">/etc/redis/redis.conf</p><p class="preP"># an empty string:</p><p class="preP">rename-command FLUSHDB ""</p><p class="preP">rename-command FLUSHALL ""</p><p class="preP">rename-command DEBUG ""</p></pre></div>
      <p>To rename a command, just give it another name. Rule about Renamed commands, they should be difficult for others to guess, but easy for you to remember:</p>
      <div class="col-md-9"><pre class="lighter"><p class="preP">/etc/redis/redis.conf</p><p class="preP"># rename-command CONFIG ""</p><p class="preP">rename-command SHUTDOWN SHUTDOWN_DEVDESIGN</p><p class="preP">rename-command CONFIG DEVDESIGN_CONFIG</p></pre></div>
      <p>Save your changes and close the file.</p>
      <p>In order fo renamed commands to be in use, apply the changes by restarting Redis:</p>
      <div class="col-md-6"><pre><span>sudo systemctl restart redis.service</span></pre></div>
      <p>To test the renamed commands, open up the Redis client:</p>
      <div class="col-md-6"><pre><span>redis-cli</span></pre></div>
      <p>Then authenticate:</p>
      <div class="col-md-6"><pre><span>auth your_redis_password</span></pre></div>
      <div class="col-md-9"><pre class="lighter"><p class="preP">Output</p><p class="preP">OK</p></pre></div>
      <p>Next up try using the original CONFIG command. It should fail:</p>
      <div class="col-md-6"><pre><span>config get requirepass</span></pre></div>
      <div class="col-md-9"><pre class="lighter"><p class="preP">Output</p><p class="preP">(error) ERR unknown command 'config'</p></pre></div>
      <p>Using the renamed command, however, will be successful:</p>
      <div class="col-md-6"><pre><span>devdesign_config get requirepass</span></pre></div>
      <div class="col-md-9"><pre class="lighter"><p class="preP">Output</p><p class="preP">1) "requirepass"</p><p class="preP">2) "your_redis_password"</p></pre></div>
      <p>Finally, you can exit from redis-cli:</p>
      <div class="col-md-6"><pre><span>exit</span></pre></div>
      <h3>Conclusion</h3>
      <p>We have installed and configured Redis, validated that the Redis is functioning properly, and used its built-in security features, to make it less vulnerable to attacks from hackers.</p>
      <p>Remember that, once hacker gets into your server, it’s very easy toget access to the Redis-specific security features.</p>
      <p>For this reason, the most important security feature on your Redis server is your firewall, as it makes it extremely difficult for hackers to get in.</p>
      <h4>Thank you for reading!</h4>
    `,
    cover: {
      src:
        "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1678003966/DevDesign/redis.png",
      alt: "Redis",
      title: "Redis on AWS EC2",
      sources: [
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
    dependsOnPrevious: true,
    prevTitle: "AWS - How to setup Ubuntu 22.04 EC2 Instance",
    prevSlug: "aws-how-to-setup-ubuntu-22.04-ec2-instance",
  },
];

export default blogPosts;
