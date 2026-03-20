import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-5">
    <div className="text-[11pt] font-bold uppercase tracking-wide text-black border-b border-black pb-0.5 mb-2">
      {title}
    </div>
    {children}
  </div>
);

const BulletItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex gap-2 text-[10.5pt] leading-[1.5] text-black ml-3">
    <span className="mt-[3px] shrink-0">•</span>
    <span>{children}</span>
  </div>
);

const Link: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer" className="text-[#1055CC] hover:underline">
    {children}
  </a>
);

const CV: React.FC = () => {
  return (
    <div className="h-screen bg-[#F9FBFD] flex flex-col overflow-hidden">
      {/* Minimal header bar */}
      <div className="flex-shrink-0 bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-3">
        <a
          href="/"
          className="text-[13px] text-[#444746] hover:text-[#1a73e8] hover:bg-gray-100 px-2 py-1 rounded transition-colors"
        >
          ← Back
        </a>
        <span className="text-[14px] text-[#1f1f1f] font-medium">Julio Bellano — CV</span>
      </div>

      {/* Document area */}
      <div className="flex-1 overflow-y-auto py-8 pb-20">
        <div className="flex justify-center">
        <div className="bg-white shadow-[0_0_8px_rgba(0,0,0,0.1)] w-[816px] px-[72px] py-[72px]">

          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-[20pt] font-bold text-black">Julio Bellano Laksana</h1>
            <div className="text-[10pt] text-black mt-1 space-x-1">
              <a href="mailto:juliobellanolaksana@gmail.com" className="text-[#1055CC] hover:underline">
                juliobellanolaksana@gmail.com
              </a>
              <span>|</span>
              <Link href="https://www.linkedin.com/in/juliobellano/">LinkedIn</Link>
              <span>|</span>
              <Link href="https://github.com/juliobellano">github.com/juliobellano</Link>
              <span>|</span>
              <span>(+886) 970593892</span>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-5">
            <p className="text-[10.5pt] text-black leading-[1.55]">
              All-rounder and fast learner computer science graduate with experience <strong>deploying product from 0 to 1</strong> and
              integrating LLMs to solve business challenges. Competed in <strong>2 hackathons</strong>, <strong>1 Kaggle competition</strong>,
              and shipped a production ready tool to reduce Excel VBA and Minitab processing <strong>500M+ data points
              daily</strong> at{' '}
              <Link href="https://www.shl-medical.com/">SHL Medical</Link>.
            </p>
          </div>

          {/* Research Experience */}
          <Section title="Research Experience">
            <div className="mb-3">
              <div className="flex justify-between items-baseline">
                <span className="text-[10.5pt] font-bold text-black">
                  TKU Computer Vision and Machine Learning Lab, Taiwan
                </span>
                <span className="text-[10pt] text-black">September 2025</span>
              </div>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-[10pt] italic text-black">Undergraduate Researcher</span>
                <Link href="https://www.linkedin.com/posts/juliobellano_our-second-smolvla-model-is-performing-pretty-activity-7399113701926162432-UsDU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADagySwBbxd9S9B1tXYFqsTHtIVucwd6j20">
                  Demo
                </Link>
              </div>
              <BulletItem>
                <strong>Researched</strong> the potential of Vision-Language-Action (VLA) models, such as smolVLA, π0.5, and
                Action Chunking Transformers for precision farming in tomato picking.
              </BulletItem>
              <BulletItem>
                <strong>Contributed</strong> to an open source model (smolVLA){' '}
                <Link href="https://github.com/huggingface/lerobot">Le-Robot @huggingface</Link>
              </BulletItem>
              <BulletItem>
                <strong>Trained</strong> VLA models on a cluster of GPUs with graceful failures, checkpoint broadcast, and
                streaming datasets.
              </BulletItem>
            </div>
          </Section>

          {/* Work Experience */}
          <Section title="Work Experience">
            <div className="mb-3">
              <div className="text-[10.5pt] font-bold text-black">
                <Link href="https://www.shl-medical.com/">Scandinavian Health Limited (SHL Medical)</Link>
              </div>
              <div className="text-[10pt] text-[#444746] mb-0.5">
                World's no.1 drug delivery device manufacturer (Autoinjectors)
              </div>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-[10pt] italic text-black">Software Developer Intern</span>
                <span className="text-[10pt] text-black">July 2025 – Present</span>
              </div>
              <BulletItem>
                <strong>Saved 5+ hours weekly</strong> per engineer by reducing Excel VBA and Minitab reliance by <strong>50%</strong>, developing
                an internal interactive tool with .NET C#, React, and SQL used to analyze <strong>500M+ datapoints daily</strong>.
              </BulletItem>
              <BulletItem>
                <strong>Created, maintained, and deployed</strong> CI/CD pipeline using Microsoft Azure to ensure continuous
                integration and deployment.
              </BulletItem>
              <BulletItem>
                <strong>Migrated</strong> legacy SharePoint API integrations to Microsoft Graph REST API for department-wide
                information retrieval used by <strong>300+ engineers worldwide</strong> across US, Swiss, and TW offices.
              </BulletItem>
            </div>
          </Section>

          {/* Competitions */}
          <Section title="Competitions">
            {/* Proactive Live AI Agent */}
            <div className="mb-3">
              <div className="flex justify-between items-baseline">
                <span className="text-[10.5pt] font-bold text-black">
                  Proactive Live AI Agent{' '}
                  <span className="font-normal text-[10pt]">
                    — <Link href="https://geminiliveagentchallenge.devpost.com/">Google Gemini, Devpost</Link>
                  </span>
                </span>
                <span className="text-[10pt] text-black">March 2026</span>
              </div>
              <div className="flex items-center gap-3 text-[10pt] text-[#444746] mb-1">
                <span>Agents ADK · WebSocket · Google Cloud Platform</span>
                <Link href="https://youtu.be/B17bBNdpYOs">Demo ↗</Link>
              </div>
              <BulletItem>
                <strong>Architected and shipped</strong> a real-time multimodal Multi-Agent AI cooking assistant <strong>solo in under 48 hours</strong>, orchestrating <strong>4 concurrent LLM models</strong> (Gemini Live API, Flash, Nano Banana, and Pro)
                into a single seamless conversational session with no perceivable latency.
              </BulletItem>
              <BulletItem>
                <strong>Designed and implemented</strong> an <strong>8-tool agent harness</strong> with prompt and context engineering to ensure
                reliable, grounded responses across long-horizon sessions.
              </BulletItem>
            </div>

            {/* Gemini 3 Hackathon */}
            <div className="mb-3">
              <div className="flex justify-between items-baseline">
                <span className="text-[10.5pt] font-bold text-black">
                  Gemini 3 Hackathon{' '}
                  <span className="font-normal text-[10pt]">
                    — <Link href="https://gdg.community.dev/events/details/google-gdg-stanford-presents-stanford-x-deepmind-hackathon-build-with-google-gemini/">Stanford University</Link>
                  </span>
                </span>
                <span className="text-[10pt] text-black">February 2026</span>
              </div>
              <div className="flex items-center gap-3 text-[10pt] text-[#444746]">
                <span>Agentic Coding Tools · Google Cloud Platform</span>
                <Link href="https://youtu.be/zraaiLWaCUM">Demo ↗</Link>
              </div>
            </div>

            {/* Kaggle */}
            <div className="mb-3">
              <div className="flex justify-between items-baseline">
                <span className="text-[10.5pt] font-bold text-black">
                  <Link href="https://www.kaggle.com/competitions/csiro-biomass/overview">Images2Biomass — Kaggle</Link>
                </span>
                <span className="text-[10pt] text-black">November 2025</span>
              </div>
              <div className="text-[10pt] text-[#444746] mb-1">
                Australia's national science agency challenge on improving farming with machine learning
              </div>
              <BulletItem>
                <strong>Fine-tuned DinoV3</strong> to help farmers accurately estimate pasture biomass from top-view images,
                replacing traditional destructive sampling methods (cut-dry-weigh).
              </BulletItem>
              <BulletItem>
                <strong>Developed a 5-fold model ensemble</strong> with log-space regression, custom tile cropping, and biomass
                constraint blending, collaborating in a team of 3.
              </BulletItem>
            </div>
          </Section>

          {/* Projects & Ventures */}
          <Section title="Projects & Ventures">
            {/* Warung Bang Jul */}
            <div className="mb-3">
              <div className="flex justify-between items-baseline">
                <span className="text-[10.5pt] font-bold text-black">
                  <Link href="https://warungbangjul.vercel.app/">Warung Bang Jul</Link> (Founder), Taiwan
                </span>
                <div className="flex items-center gap-3 text-[10pt]">
                  <Link href="https://lnkd.in/gyRUMErr">Post ↗</Link>
                  <span className="text-black">March 2025</span>
                </div>
              </div>
              <BulletItem>
                <strong>Founded and ran</strong> an online restaurant; built a full-stack automation system (Python/FastAPI +
                React) that digitizes order processing, inventory management, and business analytics from scratch.
              </BulletItem>
              <BulletItem>
                <strong>Trained and deployed</strong> a custom YOLOv11n computer vision model to automate real-time inventory
                tracking, <strong>optimizing model size by 41%</strong> to meet deployment constraints.
              </BulletItem>
              <BulletItem>
                <strong>Shipped and launched to 115 users on day one</strong> with <strong>100% uptime</strong>; set up CI/CD with GitHub Actions
                and Pytest, deployed on Vercel + Render.
              </BulletItem>
            </div>

            {/* Semantic Search */}
            <div className="mb-3">
              <div className="flex justify-between items-baseline">
                <span className="text-[10.5pt] font-bold text-black">
                  <Link href="https://github.com/juliobellano/semantic_search/tree/main">Semantic Search</Link>
                </span>
                <span className="text-[10pt] text-black">November 2025</span>
              </div>
              <div className="text-[10pt] text-[#444746] mb-1">
                EmbeddingGemma · Docling · Vector Database · Python
              </div>
              <BulletItem>
                <strong>Built</strong> a local semantic information retrieval system designed to search <strong>hundreds of thousands</strong> of
                multilingual internal departmental files in various formats without sending data to the cloud.
              </BulletItem>
              <BulletItem>
                Supports <strong>100+ languages</strong> and <strong>10+ document types</strong> (PDF, DOCX, PPTX, XLSX, HTML, audio, etc.)
                using EmbeddingGemma.
              </BulletItem>
            </div>
          </Section>

          {/* Leadership */}
          <Section title="Leadership Experience">
            <div className="mb-2">
              <div className="flex justify-between items-baseline">
                <span className="text-[10.5pt] font-bold text-black">Head of Multimedia Director</span>
                <span className="text-[10pt] text-black">May 2024</span>
              </div>
              <div className="text-[10pt] italic text-black mb-1">
                Tamkang University Indonesian Student Association (淡江印尼同學聯誼會)
              </div>
              <BulletItem>
                <strong>Led a team of 5</strong> organizing an event with 2 local vendors resulting in <strong>150 participants</strong> with a
                satisfaction rate of <strong>5.7/6.0</strong> — a <strong>6% increase</strong> over the previous year.
              </BulletItem>
            </div>
          </Section>

          {/* Skills */}
          <Section title="Skills">
            <p className="text-[10.5pt] text-black leading-[1.55]">
              <span className="font-semibold">Cloud & DevOps:</span> Google Cloud Platform, Microsoft Azure,
              Vercel, Render, CI/CD, Docker
              <br />
              <span className="font-semibold">Languages:</span> TypeScript, Python, C#, SQL
              <br />
              <span className="font-semibold">AI/ML:</span> LLM integration, YOLO, VLA models
              <br />
              <span className="font-semibold">Databases:</span> SQL, NoSQL
            </p>
          </Section>

        </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
