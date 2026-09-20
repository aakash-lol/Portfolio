export interface Blog {
  title: string;
  date: string;
  claps: number;
  tags: string[];
  link: string;
  isExternal: boolean;
  slug?: string;
  description?: string;
  readingTime?: string;
  content?: BlogBlock[];
}

export type BlogBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "links";
      items: {
        title: string;
        href: string;
        description: string;
      }[];
    };

export const blogsData: Blog[] = [
  {
    title: "Hi, I'm Aakash. This Is Probably Going to Be Longer Than It Needs to Be.",
    date: "Sep 2026",
    claps: 0,
    tags: ["Introduction", "Software Engineering", "AI", "Building"],
    link: "/blogs/about-aakash",
    isExternal: false,
    slug: "about-aakash",
    readingTime: "15 min read",
    description:
      "A ridiculously long introduction to who I am, what I build, how I got into software, why I keep jumping between technologies, and what I am trying to become.",
    content: [
      {
        type: "paragraph",
        text: "Hi. I'm Aakash.",
      },
      {
        type: "paragraph",
        text: "If you somehow ended up on this page, congratulations. You have voluntarily clicked into what is essentially me sitting down and yapping about myself for an unreasonable amount of time.",
      },
      {
        type: "paragraph",
        text: "I could write the normal developer introduction. You know the one. 'Hi, I'm Aakash, a passionate software developer interested in building scalable applications and solving real-world problems.' Then I could throw some technologies underneath it, add a GitHub link, mention AI approximately seventeen times, and call it a day.",
      },
      {
        type: "paragraph",
        text: "But that sounds incredibly boring.",
      },
      {
        type: "paragraph",
        text: "So instead, here is the unnecessarily long version.",
      },
      {
        type: "heading",
        text: "So... what do I actually do?",
      },
      {
        type: "paragraph",
        text: "I'm a software developer. More specifically, I'm the kind of developer who gets interested in something, spends way too much time understanding how it works, builds something with it, breaks something, fixes it, and then immediately gets distracted by another technology.",
      },
      {
        type: "paragraph",
        text: "My main world has been JavaScript and the web. I started with the usual path into frontend development, eventually got deeper into React, then Node.js and Express, then databases, authentication, APIs, deployment, and all the other things that magically appear once you stop making tutorial projects and start trying to build actual products.",
      },
      {
        type: "paragraph",
        text: "I've worked with React, Node.js, Express, MongoDB, PostgreSQL, Redis, Python, C++, JavaScript, TypeScript, Go, Flutter, Dart, Swift, Docker, Git, GitHub, and Linux.",
      },
      {
        type: "paragraph",
        text: "That list probably makes it look like I have mastered all of them.",
      },
      {
        type: "paragraph",
        text: "I absolutely have not.",
      },
      {
        type: "paragraph",
        text: "And honestly, I think that is an important distinction.",
      },
      {
        type: "heading",
        text: "I don't really believe in 'knowing everything'",
      },
      {
        type: "paragraph",
        text: "One thing I have learned from building software is that the list of things you do not know grows faster than the list of things you know.",
      },
      {
        type: "paragraph",
        text: "Every time I think I understand something properly, I open a real codebase and discover approximately twelve new layers underneath it.",
      },
      {
        type: "paragraph",
        text: "You think you understand authentication until you have to deal with refresh tokens, cookies, sessions, OAuth, CSRF, mobile clients, expiration, and the weird bug that only happens when the user's phone wakes up after six hours.",
      },
      {
        type: "paragraph",
        text: "You think you understand APIs until an actual product needs validation, retries, rate limits, caching, permissions, logging, error handling, versioning, background jobs, and monitoring.",
      },
      {
        type: "paragraph",
        text: "You think you understand frontend until your perfectly normal UI has to work on five screen sizes, three browsers, dark mode, slow internet, bad APIs, and a device that somehow has a 17:9 aspect ratio.",
      },
      {
        type: "paragraph",
        text: "And then you realize software engineering is less about memorizing technologies and more about learning how to deal with problems you have never seen before.",
      },
      {
        type: "quote",
        text: "The more I learn, the more I realize that being a developer is mostly becoming comfortable with not knowing something yet.",
      },
      {
        type: "heading",
        text: "How I got into all of this",
      },
      {
        type: "paragraph",
        text: "I did not start with some grand plan of becoming a software engineer.",
      },
      {
        type: "paragraph",
        text: "It started with the usual curiosity. I wanted to understand how things worked. Then I wanted to make things. Then I realized that writing code meant I could actually turn an idea in my head into something other people could interact with.",
      },
      {
        type: "paragraph",
        text: "That part completely hooked me.",
      },
      {
        type: "paragraph",
        text: "There is something ridiculous about typing a bunch of characters into a computer and suddenly having a website, application, API, mobile app, automation, or some weird little tool that did not exist ten minutes ago.",
      },
      {
        type: "paragraph",
        text: "Once I realized that, I started building more.",
      },
      {
        type: "paragraph",
        text: "And then I made the classic mistake of trying to learn everything at once.",
      },
      {
        type: "heading",
        text: "The technology rabbit hole",
      },
      {
        type: "paragraph",
        text: "My learning process has never been particularly linear.",
      },
      {
        type: "paragraph",
        text: "I would learn React, then wonder how the backend works. So I learned Node. Then I wanted a database. Then authentication. Then deployment. Then Docker. Then Linux. Then I wondered how mobile apps worked. Then Flutter happened. Then I started looking at Swift and iOS development.",
      },
      {
        type: "paragraph",
        text: "Then AI became impossible to ignore.",
      },
      {
        type: "paragraph",
        text: "So naturally I started digging into AI systems, LLMs, APIs, agents, embeddings, and all the other words that suddenly became part of every software developer's vocabulary.",
      },
      {
        type: "paragraph",
        text: "The funny thing is that I don't actually see these as completely separate worlds anymore.",
      },
      {
        type: "paragraph",
        text: "Frontend connects to backend. Backend connects to databases. Mobile apps connect to APIs. AI connects to backend systems. Backend systems connect to infrastructure. Infrastructure connects everything together.",
      },
      {
        type: "paragraph",
        text: "Eventually you stop thinking only in terms of frameworks and start thinking in terms of systems.",
      },
      {
        type: "heading",
        text: "I like building actual things",
      },
      {
        type: "paragraph",
        text: "Tutorials are useful. Courses are useful. Documentation is obviously useful.",
      },
      {
        type: "paragraph",
        text: "But at some point you have to close the tutorial and try to build something yourself.",
      },
      {
        type: "paragraph",
        text: "That is where the fun starts.",
      },
      {
        type: "paragraph",
        text: "Because suddenly nobody tells you where the files should go. Nobody tells you what database schema to use. Nobody tells you whether you should use Redis. Nobody tells you whether your API design is terrible. Nobody tells you why your deployment suddenly stopped working.",
      },
      {
        type: "paragraph",
        text: "You have to figure it out.",
      },
      {
        type: "paragraph",
        text: "That is where I have learned most of what I know.",
      },
      {
        type: "paragraph",
        text: "Build something. Get stuck. Search. Read documentation. Ask questions. Use AI. Try something. Break it. Figure out why it broke. Fix it. Realize the fix created another problem. Fix that too.",
      },
      {
        type: "list",
        items: [
          "Have an idea.",
          "Build it badly.",
          "Realize why it is bad.",
          "Learn the missing concept.",
          "Rewrite it.",
          "Break it again.",
          "Eventually make it work.",
        ],
      },
      {
        type: "paragraph",
        text: "It is not glamorous, but it works.",
      },
      {
        type: "heading",
        text: "D360 was one of those experiences",
      },
      {
        type: "paragraph",
        text: "One of the projects I have worked on is D360, a manpower and services platform where I have been involved with both the product and its mobile applications.",
      },
      {
        type: "paragraph",
        text: "This was different from just building something for a tutorial because there was an actual product behind it. There were real screens, real APIs, real categories, real services, real users, and real requirements that did not care whether I understood the problem yet.",
      },
      {
        type: "paragraph",
        text: "That is a very different kind of learning.",
      },
      {
        type: "paragraph",
        text: "You start caring about things you would normally ignore in a small project. Loading states. Empty states. Error states. API timing. Stale data. Navigation. UI consistency. Image assets. Performance. Mobile behavior. Deployment. The tiny details that look insignificant until a real person actually uses the application.",
      },
      {
        type: "paragraph",
        text: "I have spent an embarrassing amount of time staring at a screen wondering why some service cards were empty even though the API had technically returned the data.",
      },
      {
        type: "paragraph",
        text: "And that is exactly the kind of problem I like.",
      },
      {
        type: "paragraph",
        text: "Not because it is fun when it happens. It absolutely is not. But because those bugs force you to understand what is actually happening instead of assuming the application works because the code looks correct.",
      },
      {
        type: "heading",
        text: "The part where internships became real",
      },
      {
        type: "paragraph",
        text: "Eventually, building projects turned into working on real teams.",
      },
      {
        type: "paragraph",
        text: "And that came with its own reality check.",
      },
      {
        type: "paragraph",
        text: "When you build alone, you can structure your project however you want. If your folder structure is questionable, nobody cares. If your commit message is terrible, nobody is going to ask you about it. If you spend six hours solving a problem that should have taken twenty minutes, that is your problem.",
      },
      {
        type: "paragraph",
        text: "Working with other developers changes that.",
      },
      {
        type: "paragraph",
        text: "Suddenly you have to understand existing code instead of only writing new code. You have to ask questions. You have to communicate. You have to understand someone else's decisions. You have to take feedback. You have to work around things you would have designed differently.",
      },
      {
        type: "paragraph",
        text: "And honestly, that has probably been one of the most useful parts of becoming a better developer.",
      },
      {
        type: "quote",
        text: "Writing code is one skill. Working inside someone else's codebase is another.",
      },
      {
        type: "heading",
        text: "Then I started taking open source seriously",
      },
      {
        type: "paragraph",
        text: "Open source was another rabbit hole.",
      },
      {
        type: "paragraph",
        text: "At first, open source looked intimidating. You open a large repository and suddenly there are hundreds of folders, thousands of files, issues, pull requests, discussions, CI pipelines, contributors, maintainers, and documentation everywhere.",
      },
      {
        type: "paragraph",
        text: "And your first thought is basically: 'What the hell am I looking at?'",
      },
      {
        type: "paragraph",
        text: "But that feeling is useful.",
      },
      {
        type: "paragraph",
        text: "Because you eventually realize that nobody magically understands a massive codebase the moment they clone it. You build context slowly.",
      },
      {
        type: "paragraph",
        text: "You find one feature. You trace it. You understand one part of the architecture. You fix one issue. You read one pull request. You talk to one maintainer. You learn one weird platform-specific behavior.",
      },
      {
        type: "paragraph",
        text: "Then another piece starts making sense.",
      },
      {
        type: "paragraph",
        text: "And another.",
      },
      {
        type: "paragraph",
        text: "Eventually the giant repository stops looking like a wall of code and starts looking like a system.",
      },
      {
        type: "heading",
        text: "Joplin taught me this very quickly",
      },
      {
        type: "paragraph",
        text: "One of the open-source projects I have spent time contributing to is Joplin.",
      },
      {
        type: "paragraph",
        text: "One contribution involved global shortcuts for showing or hiding Joplin. Sounds simple enough.",
      },
      {
        type: "paragraph",
        text: "It was not.",
      },
      {
        type: "paragraph",
        text: "Windows worked. macOS worked. Then Linux Wayland happened.",
      },
      {
        type: "paragraph",
        text: "Suddenly I was learning about X11, Wayland, GNOME, Electron, desktop portals, security restrictions, platform differences, and how software that looks like one feature from the user's perspective can actually depend on a ridiculous number of layers underneath.",
      },
      {
        type: "paragraph",
        text: "That is one of my favorite things about software engineering.",
      },
      {
        type: "paragraph",
        text: "You start with a tiny question and somehow end up learning an entirely new part of computing.",
      },
      {
        type: "paragraph",
        text: "I did not know everything when I started working on that issue. I got things wrong. I got questions from maintainers. I tested again. I researched more. I came back with better answers.",
      },
      {
        type: "paragraph",
        text: "That cycle is what I want my engineering career to look like.",
      },
      {
        type: "heading",
        text: "AI changed how I learn",
      },
      {
        type: "paragraph",
        text: "I also happen to be learning all of this during a pretty ridiculous time to be a software developer.",
      },
      {
        type: "paragraph",
        text: "AI can now generate code incredibly quickly.",
      },
      {
        type: "paragraph",
        text: "That is amazing.",
      },
      {
        type: "paragraph",
        text: "It is also dangerous if you use it incorrectly.",
      },
      {
        type: "paragraph",
        text: "I use AI a lot. I ask it to explain code. I use it when I am stuck. I use it to explore unfamiliar repositories. I use it to compare approaches. I use it to generate starting points. I use it to help me debug.",
      },
      {
        type: "paragraph",
        text: "But I do not want AI to replace the part where I understand what I am doing.",
      },
      {
        type: "paragraph",
        text: "There is a huge difference between asking an AI to write a function and being able to explain why that function belongs there, what assumptions it makes, what could break, and how it fits into the rest of the system.",
      },
      {
        type: "paragraph",
        text: "The first makes you faster.",
      },
      {
        type: "paragraph",
        text: "The second makes you better.",
      },
      {
        type: "quote",
        text: "AI is ridiculously good at generating answers. Your job is to become good at knowing which answers are actually worth using.",
      },
      {
        type: "heading",
        text: "I am especially interested in AI engineering",
      },
      {
        type: "paragraph",
        text: "AI is one of the areas I want to go much deeper into.",
      },
      {
        type: "paragraph",
        text: "Not just using an LLM API and calling the project an AI application.",
      },
      {
        type: "paragraph",
        text: "I want to understand the engineering around AI systems. How applications use models. How context is managed. How retrieval works. How agents are structured. How tools are connected. How systems are evaluated. How latency and cost are controlled. How you build something that works reliably instead of something that looks cool in a five-minute demo.",
      },
      {
        type: "paragraph",
        text: "There is a huge amount I still do not know here.",
      },
      {
        type: "paragraph",
        text: "Which is exactly why I want to learn it.",
      },
      {
        type: "heading",
        text: "I also keep ending up in mobile development",
      },
      {
        type: "paragraph",
        text: "Somehow I also ended up building mobile applications.",
      },
      {
        type: "paragraph",
        text: "Flutter became one of those technologies where I initially thought, 'Okay, this should be straightforward.' Then I actually started building things and discovered an entirely new set of problems.",
      },
      {
        type: "paragraph",
        text: "State management. Navigation. Responsive layouts. Platform differences. App lifecycle. API loading. Animations. Performance. Android. iOS. App Store publishing.",
      },
      {
        type: "paragraph",
        text: "Apparently making an application is only half the battle. Getting that application onto someone's phone is another boss fight entirely.",
      },
      {
        type: "paragraph",
        text: "That is also how I ended up learning about the iOS side of development and the Apple ecosystem. I had built applications before, but publishing them properly is its own skill.",
      },
      {
        type: "heading",
        text: "My projects are basically evidence of me being curious",
      },
      {
        type: "paragraph",
        text: "If you look through my projects, you will probably notice that they do not all belong to one perfectly consistent category.",
      },
      {
        type: "paragraph",
        text: "That is intentional.",
      },
      {
        type: "paragraph",
        text: "I like experimenting.",
      },
      {
        type: "paragraph",
        text: "Sometimes I want to build a full-stack web application. Sometimes I want to make a mobile app. Sometimes I want to mess around with an AI API. Sometimes I want to understand backend architecture. Sometimes I see a problem and think, 'I could probably build something for that.'",
      },
      {
        type: "paragraph",
        text: "That curiosity has taken me into places I would not have reached if I had forced myself to stay inside one stack.",
      },
      {
        type: "heading",
        text: "YesBroker",
      },
      {
        type: "paragraph",
        text: "One of the products I am building is YesBroker.",
      },
      {
        type: "paragraph",
        text: "It is another example of the kind of thing I like doing: taking an actual idea and trying to turn it into a real product instead of stopping at a pretty landing page.",
      },
      {
        type: "paragraph",
        text: "The interesting part is never just writing the UI. It is figuring out the actual product flow. What happens when a user does this? What data needs to exist? What should the backend return? What happens when the request fails? What happens when the user does something unexpected?",
      },
      {
        type: "paragraph",
        text: "Those questions are where software starts becoming engineering.",
      },
      {
        type: "heading",
        text: "I still have a lot to learn",
      },
      {
        type: "paragraph",
        text: "This entire introduction probably makes me sound like I have everything figured out.",
      },
      {
        type: "paragraph",
        text: "I don't.",
      },
      {
        type: "paragraph",
        text: "There are still entire areas of software engineering where I feel like a beginner.",
      },
      {
        type: "paragraph",
        text: "There are backend concepts I want to understand better. There are distributed systems concepts I have barely touched. There is infrastructure I want to learn. There are deeper database concepts I want to understand. There is systems programming. There is Go. There is more C++. There is deeper Python. There is AI infrastructure. There are operating systems. There is networking.",
      },
      {
        type: "paragraph",
        text: "The list is basically infinite.",
      },
      {
        type: "paragraph",
        text: "And that is fine.",
      },
      {
        type: "paragraph",
        text: "I would rather be genuinely curious than pretend I already know everything.",
      },
      {
        type: "heading",
        text: "What I actually want to become",
      },
      {
        type: "paragraph",
        text: "I do not want to become the person who knows the most frameworks.",
      },
      {
        type: "paragraph",
        text: "Frameworks change too quickly for that to even be a useful goal.",
      },
      {
        type: "paragraph",
        text: "I want to become the person who can walk into an unfamiliar problem and figure it out.",
      },
      {
        type: "paragraph",
        text: "Give me a codebase I have never seen before. I want to be able to understand it.",
      },
      {
        type: "paragraph",
        text: "Give me an API problem I have never solved. I want to know how to investigate it.",
      },
      {
        type: "paragraph",
        text: "Give me a bug that makes no sense. I want to know how to reproduce it and narrow it down.",
      },
      {
        type: "paragraph",
        text: "Give me a technology I have never used. I want to be able to learn enough to build something with it.",
      },
      {
        type: "paragraph",
        text: "That is the skill I care about most.",
      },
      {
        type: "quote",
        text: "I don't want to know every answer. I want to become very good at finding the answer.",
      },
      {
        type: "heading",
        text: "Why I made this portfolio",
      },
      {
        type: "paragraph",
        text: "This portfolio is basically a collection of evidence that I have been building things, learning things, breaking things, and occasionally figuring things out.",
      },
      {
        type: "paragraph",
        text: "I did not want it to just be a collection of buzzwords.",
      },
      {
        type: "paragraph",
        text: "React. Node. AI. Flutter. Docker. Git. Cool.",
      },
      {
        type: "paragraph",
        text: "But what did I actually do with them?",
      },
      {
        type: "paragraph",
        text: "That is what I want this portfolio to show.",
      },
      {
        type: "paragraph",
        text: "The projects matter. The experiments matter. The open-source contributions matter. The weird bugs matter. The things that did not work matter too.",
      },
      {
        type: "paragraph",
        text: "Because those are the things that actually tell the story.",
      },
      {
        type: "heading",
        text: "There is probably going to be a lot more here",
      },
      {
        type: "paragraph",
        text: "This is not supposed to be the final version of my story.",
      },
      {
        type: "paragraph",
        text: "Hopefully, it becomes outdated very quickly.",
      },
      {
        type: "paragraph",
        text: "I want to keep building. I want to contribute to more open source. I want to understand AI systems more deeply. I want to get much better at backend engineering. I want to build products that people actually use. I want to understand lower-level systems. I want to work with people who are much better than me and steal all their knowledge by asking too many questions.",
      },
      {
        type: "paragraph",
        text: "And I want to keep documenting some of that journey here.",
      },
      {
        type: "heading",
        text: "So, yeah. That's me.",
      },
      {
        type: "paragraph",
        text: "I'm Aakash.",
      },
      {
        type: "paragraph",
        text: "I'm a software developer who likes building things, learning random technologies, going down engineering rabbit holes, contributing to open source, experimenting with AI, and occasionally spending several hours debugging something that turned out to be one missing line.",
      },
      {
        type: "paragraph",
        text: "I'm still early in the journey.",
      },
      {
        type: "paragraph",
        text: "I don't have everything figured out.",
      },
      {
        type: "paragraph",
        text: "But I know I like this.",
      },
      {
        type: "paragraph",
        text: "I like opening a blank editor and turning an idea into something real.",
      },
      {
        type: "paragraph",
        text: "I like the moment when a bug finally makes sense.",
      },
      {
        type: "paragraph",
        text: "I like reading code written by people much smarter than me and slowly understanding why they made the decisions they made.",
      },
      {
        type: "paragraph",
        text: "I like learning something difficult and then realizing that it was not actually impossible. It was just unfamiliar.",
      },
      {
        type: "paragraph",
        text: "And most importantly, I like shipping.",
      },
      {
        type: "quote",
        text: "Build things. Break things. Learn from them. Then ship again.",
      },
      {
        type: "paragraph",
        text: "That's pretty much the philosophy behind everything I am doing right now.",
      },
      {
        type: "paragraph",
        text: "Anyway, if you made it this far, thanks for reading my completely unnecessary amount of yapping.",
      },
      {
        type: "paragraph",
        text: "Now go look at the projects.",
      },
    ],
  },
];

export const blogPosts = blogsData.filter(
  (blog): blog is Blog & { slug: string; content: BlogBlock[] } =>
    typeof blog.slug === "string" && Array.isArray(blog.content),
);

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((blog) => blog.slug === slug);
}