export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  gallery: string[];
  description: string;
  problem: string;
  solution: string;
  outcome: string[];
  techStack: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-analytics-dashboard",
    title: "AI Analytics Dashboard",
    subtitle: "Real-time insights for smarter decisions",
    heroImage: "/assets/images/school-project.png",
    gallery: [
      "/assets/images/school-project.png",
      "/assets/images/klerva-landing-page.png",
      "/assets/images/klerva-cards.png",
      "/assets/images/klerva-house.png",
    ],
    description:
      "A high-performance analytics dashboard built for real-time AI-driven insights. This comprehensive platform enables teams to visualize complex data streams, track key performance indicators, and make data-driven decisions with unprecedented speed and accuracy.",
    problem:
      "Teams struggled with fragmented data sources, delayed reporting, and lack of real-time visibility into critical business metrics. Manual data aggregation was time-consuming, error-prone, and prevented quick decision-making. The existing tools couldn't handle the volume of data or provide the level of detail needed for strategic planning.",
    solution:
      "We designed and built a scalable dashboard architecture with real-time data pipelines, intelligent caching, and a clean, responsive UX. The solution integrates multiple data sources, applies AI-powered analytics for predictive insights, and delivers personalized views for different user roles. Advanced filtering, custom report generation, and export capabilities ensure teams have exactly what they need when they need it.",
    outcome: [
      "40% faster decision-making through real-time data access",
      "Eliminated 15+ hours per week of manual reporting tasks",
      "Scalable architecture handling 10M+ data points daily",
      "95% user satisfaction rate with intuitive interface",
      "Reduced data processing time from hours to seconds",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "GSAP",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "D3.js",
    ],
  },
  {
    slug: "workflow-automation-platform",
    title: "Workflow Automation Platform",
    subtitle: "Streamline operations with intelligent automation",
    heroImage: "/assets/images/Hero.png",
    gallery: ["/projects/workflow/1.png", "/projects/workflow/2.png"],
    description:
      "A high-performance analytics dashboard built for real-time AI-driven insights. This comprehensive platform enables teams to visualize complex data streams, track key performance indicators, and make data-driven decisions with unprecedented speed and accuracy.",
    problem:
      "Organizations were drowning in repetitive manual tasks, struggling with inconsistent processes, and facing bottlenecks that slowed down critical operations. Teams spent countless hours on routine work that could be automated, leading to burnout, errors, and missed opportunities for strategic work.",
    solution:
      "We created a low-code workflow automation platform with visual workflow builders, AI-powered process optimization, and seamless integrations with existing tools. The platform includes intelligent routing, conditional logic, approval workflows, and comprehensive audit trails. Teams can build and deploy automations in minutes, not weeks.",
    outcome: [
      "60% reduction in manual task processing time",
      "Automated 200+ workflows across 15 departments",
      "99.8% accuracy rate eliminating human errors",
      "ROI achieved within 3 months of deployment",
      "Freed up 30+ hours per week for strategic initiatives",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Celery",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    slug: "ai-customer-support-system",
    title: "AI Customer Support System",
    subtitle: "Intelligent assistance that scales with your business",
    heroImage: "/assets/images/smart-target-project.png",
    gallery: ["/projects/support/1.png", "/projects/support/2.png"],
    description:
      "A high-performance analytics dashboard built for real-time AI-driven insights. This comprehensive platform enables teams to visualize complex data streams, track key performance indicators, and make data-driven decisions with unprecedented speed and accuracy.",
    problem:
      "Customer support teams were overwhelmed by high ticket volumes, repetitive questions, and inconsistent response quality. Long wait times frustrated customers, while support agents struggled to find information quickly. The cost of scaling support operations was becoming prohibitive.",
    solution:
      "We developed an intelligent support system with AI chatbots, knowledge base integration, sentiment analysis, and smart ticket routing. The system learns from every interaction, continuously improving its responses. Advanced analytics provide insights into common issues, enabling proactive problem-solving and product improvements.",
    outcome: [
      "75% of inquiries resolved automatically without human intervention",
      "Average response time reduced from 2 hours to 30 seconds",
      "Customer satisfaction score increased from 3.2 to 4.7/5",
      "Support costs reduced by 45% while handling 3x more volume",
      "24/7 availability improved global customer experience",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "OpenAI GPT-4",
      "LangChain",
      "PostgreSQL",
      "Vector DB",
      "WebSockets",
      "Tailwind CSS",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Enterprise Mobile Application",
    subtitle: "Native performance meets modern design",
    heroImage: "/assets/images/kesko-ai-project.png",
    gallery: ["/projects/mobile/1.png", "/projects/mobile/2.png"],
    description:
      "A high-performance analytics dashboard built for real-time AI-driven insights. This comprehensive platform enables teams to visualize complex data streams, track key performance indicators, and make data-driven decisions with unprecedented speed and accuracy.",
    problem:
      "Teams needed mobile access to critical business tools but existing solutions were slow, clunky, or lacked essential features. Offline functionality was non-existent, making the apps useless in areas with poor connectivity. The user experience didn't match the quality of desktop applications.",
    solution:
      "We built a cross-platform mobile application using React Native with native modules for optimal performance. The app features intelligent offline caching, background synchronization, push notifications, and biometric authentication. The design system ensures consistency across iOS and Android while leveraging platform-specific features.",
    outcome: [
      "4.8/5 app store rating with 10,000+ downloads",
      "90% of users report improved productivity on mobile",
      "Offline mode enables work in 100% of scenarios",
      "50% faster load times compared to previous solution",
      "Zero critical bugs in production after 6 months",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Expo",
      "Redux Toolkit",
      "React Query",
      "Native Modules",
      "Firebase",
      "Jest",
    ],
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    subtitle: "Scalable online marketplace with AI recommendations",
    heroImage: "/assets/images/clarity-project.png",
    gallery: ["/projects/ecommerce/1.png", "/projects/ecommerce/2.png"],
    description:
      "A high-performance analytics dashboard built for real-time AI-driven insights. This comprehensive platform enables teams to visualize complex data streams, track key performance indicators, and make data-driven decisions with unprecedented speed and accuracy.",
    problem:
      "Existing e-commerce solutions were slow, couldn't scale during peak traffic, and lacked personalization features. Merchants struggled with inventory management, and customers experienced poor search results and long checkout processes. The platform needed to handle Black Friday-level traffic without crashing.",
    solution:
      "We developed a headless e-commerce architecture with microservices, CDN integration, and AI recommendation engine. The platform includes advanced search with filters, one-click checkout, real-time inventory sync, and a powerful admin dashboard. Built with scalability in mind to handle millions of products and concurrent users.",
    outcome: [
      "99.9% uptime during peak shopping seasons",
      "3x increase in conversion rate with AI recommendations",
      "50% faster page load times with CDN optimization",
      "Handles 100,000+ concurrent users without performance issues",
      "Mobile-first design increased mobile sales by 85%",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "Elasticsearch",
      "AWS",
    ],
  },
  {
    slug: "data-visualization-tool",
    title: "Data Visualization Tool",
    subtitle: "Transform complex data into actionable insights",
    heroImage: "/assets/images/pdx10-project.png",
    gallery: ["/projects/dataviz/1.png", "/projects/dataviz/2.png"],
    description:
      "A high-performance analytics dashboard built for real-time AI-driven insights. This comprehensive platform enables teams to visualize complex data streams, track key performance indicators, and make data-driven decisions with unprecedented speed and accuracy.",
    problem:
      "Data analysts spent too much time creating static reports that became outdated quickly. Teams couldn't collaborate on data insights, and non-technical stakeholders struggled to understand complex data visualizations. Real-time data updates required manual refresh and export processes.",
    solution:
      "We created an interactive data visualization platform with drag-and-drop chart builders, real-time data connections, and collaborative workspaces. The platform includes pre-built templates, custom visualization types, automated report generation, and sharing capabilities that make data accessible to everyone in the organization.",
    outcome: [
      "80% reduction in time spent creating reports",
      "Real-time dashboards updated automatically every 5 seconds",
      "500+ custom visualizations created by users",
      "95% of stakeholders can now interpret data without training",
      "Collaborative features increased data-driven decisions by 60%",
    ],
    techStack: [
      "React",
      "TypeScript",
      "D3.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "WebSockets",
      "Chart.js",
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure Platform",
    subtitle: "Enterprise-grade cloud management and automation",
    heroImage: "/assets/images/solor-ai-project.png",
    gallery: ["/projects/cloud/1.png", "/projects/cloud/2.png"],
    description:
      "A high-performance analytics dashboard built for real-time AI-driven insights. This comprehensive platform enables teams to visualize complex data streams, track key performance indicators, and make data-driven decisions with unprecedented speed and accuracy.",
    problem:
      "Managing cloud infrastructure across multiple providers was complex and time-consuming. Teams struggled with manual deployments, inconsistent configurations, and unexpected costs. Security compliance and monitoring required multiple tools, making it difficult to maintain visibility and control.",
    solution:
      "We built a unified cloud management platform with Infrastructure as Code, automated CI/CD pipelines, multi-cloud support, and intelligent cost optimization. The platform includes real-time monitoring, automated scaling, security compliance checks, and a centralized dashboard for managing all cloud resources.",
    outcome: [
      "40% reduction in cloud infrastructure costs",
      "Automated deployments reduced release time from days to minutes",
      "99.9% uptime with automated failover and scaling",
      "Unified dashboard eliminated need for 5+ separate tools",
      "Security compliance automated, passing all audits",
    ],
    techStack: [
      "Terraform",
      "Kubernetes",
      "Docker",
      "Python",
      "Go",
      "AWS",
      "Azure",
      "GCP",
    ],
  },
  {
    slug: "collaboration-suite",
    title: "Team Collaboration Suite",
    subtitle: "Unified workspace for remote and hybrid teams",
    heroImage: "/assets/images/referral-loop-project.png",
    gallery: ["/projects/collab/1.png", "/projects/collab/2.png"],
    description:
      "A high-performance analytics dashboard built for real-time AI-driven insights. This comprehensive platform enables teams to visualize complex data streams, track key performance indicators, and make data-driven decisions with unprecedented speed and accuracy.",
    problem:
      "Teams were using 10+ different tools for communication, file sharing, and project management, leading to context switching, lost information, and reduced productivity. Remote teams struggled with timezone coordination and maintaining team culture. Information was scattered across multiple platforms.",
    solution:
      "We developed a unified collaboration suite that integrates messaging, video conferencing, file storage, task management, and document collaboration in one platform. Features include threaded conversations, video recording, screen sharing, real-time document editing, and AI-powered search across all content.",
    outcome: [
      "Eliminated need for 8+ separate collaboration tools",
      "40% increase in team productivity with unified workspace",
      "Real-time collaboration reduced project completion time by 30%",
      "95% user adoption rate within first month",
      "AI search helped teams find information 5x faster",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "WebRTC",
      "PostgreSQL",
      "Redis",
      "S3",
      "Socket.io",
    ],
  },
];
