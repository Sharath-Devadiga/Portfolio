import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Folder, Github } from "lucide-react";

interface CaseFile {
  id: string;
  number: string;
  title: string;
  brief: string;
  contribution: string[];
  tools: string[];
  repo: string;
  link: string;
  image: string[];
}

const caseFiles: CaseFile[] = [
  {
    id: '1',
    number: '001',
    title: 'Cacheupp - A Social Platform',
    brief: 'Cacheupp is a social media platform that allows users to connect with friends, send and accept friend requests, message, save posts, like, and comment — all features of a standard social media application.',
    contribution: [
     ' Cacheupp includes a forum section where users can request a forum, which an admin approves. Users can then create threads, post content, comment, and like posts. It also integrates vector-based search using PostgreSQL with PGVector, allowing users to search for content based on meaning for faster and more intuitive discovery.'
    ],
    tools: ['React', 'TypeScript', 'Nodejs', 'Websockets', 'MongoDb',],
    repo: 'https://github.com/Sharath-Devadiga/Cacheupp',
    link: 'https://www.cacheupp.com/',
    image: ['assets/cacheuppLanding.png',
      'assets/cacheuppHome.png'
    ]
  },
  {
    id: '2',
    number: '002',
    title: 'StudyVerse - A Collaborative Study Platform',
    brief: 'StudyVerse is a real-time collaborative learning platform for university students. Join semester-specific chat rooms, share notes, and connect with peers.',
    contribution: [
      'Room Dashboard with live feed, AI summary wall, and room statistics. Content Management includes file uploads, AI-based summarization and concept mapping.'
    ],
    tools: ['Next.js', 'Express.js','TypeScript', 'Socket.io', 'PostgreSQL', 'Turborepo'],
    repo: 'https://github.com/Sharath-Devadiga/StudyVerse',
    link: '#',
    image: ['assets/study1.png',
      'assets/study2.png',
      'assets/study3.png'
    ]
  },
  {
    id: '3',
    number: '003',
    title: 'MoodBlog - A Mood-Based Blogging Platform',
    brief: 'MoodBlog is a modern full-stack social platform that allows users to express and share thoughts through mood-based posts. Each post is tagged with an emotion, letting users explore content that matches their current mood. The application features a polished dark UI, real-time updates, secure authentication, and a smooth, mobile-responsive design — delivering an engaging and personalized blogging experience.”',
    contribution: [
      'Mood-Based Posts: Share and explore posts tagged with 8 unique emotions.',
       'Social Interactions: Like, comment, and reply with nested comment threads.',
        'User Profiles: View mood analytics, post history, and profile customization.',
       ' Secure Auth: Email/password login with OTP-based password reset.',
        'Mood Dashboard: Filter and track posts by specific moods.',
        'Optimized UX: Real-time updates, smooth animations, and mobile-first design.'
    ],
    tools: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Zustand', 'Cloudinary', 'NextAuth'],
    repo: 'https://github.com/Sharath-Devadiga/MoodBlog',
    link: 'https://mood-blog.devadigascode.site/',
    image: ['assets/blog2.png','assets/blog1.png','assets/blog4.png','assets/blog5.png']
  },
  {
    id: '4',
    number: '004',
    title: 'Brain App - Save, Organize, and Share Knowledge',
    brief: 'Brain App is a secure web application that lets users save, organize, and share valuable content from YouTube, Twitter, and personal notes. Users can bookmark important information for future reference and share their curated collections, referred to as their “Brain.”', 
    contribution: [
      'Designed to improve knowledge retention by providing quick and easy access to saved resources'
    ],
    tools: ['Reactjs', 'Expressjs', 'MongoDb', 'Nodejs'],
    repo: 'https://github.com/Sharath-Devadiga/BrainApp',
    link: 'https://brainers.devadigascode.site/',
    image: ['assets/brain2.png','assets/brain1.png']
  },
];

const CaseFiles = () => {
  const [selectedCase, setSelectedCase] = useState<CaseFile | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="cases" className="scroll-mt-[70px] md:scroll-mt-20 py-12 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="font-typewriter text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-3 md:mb-4 text-primary tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          PROJECTS
        </motion.h2>
        <motion.p
          className="font-serif text-center text-muted-foreground mb-8 md:mb-12 text-sm sm:text-base md:text-lg px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Click on any project to view the details
        </motion.p>

        {/* Mobile: Stacked Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
          {caseFiles.map((caseFile, idx) => (
            <motion.div
              key={caseFile.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                onClick={() => setSelectedCase(caseFile)}
                className="group relative cursor-pointer bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-2xl border-2 border-border overflow-hidden h-full"
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <motion.div
                    className="mb-4 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Folder className="w-24 h-24 text-primary/60 group-hover:text-primary transition-colors" />
                    <Badge className="absolute top-0 right-0 bg-primary text-primary-foreground font-typewriter text-xs">
                      #{caseFile.number}
                    </Badge>
                  </motion.div>

                  <h3 className="font-typewriter text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {caseFile.title}
                  </h3>

                  <p className="font-serif text-xs text-muted-foreground line-clamp-3 flex-grow">
                    {caseFile.brief}
                  </p>

                  <div className="mt-4 text-xs font-typewriter text-primary">
                    CLICK TO VIEW →
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tablet: Horizontal Scroll */}
        <div className="relative hidden md:block lg:hidden">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden pb-6"
          >
            <div className="flex items-stretch gap-6 min-w-min">
              {caseFiles.map((caseFile, idx) => (
                <motion.div
                  key={caseFile.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="flex-shrink-0 w-[300px]"
                >
                  <Card
                    onClick={() => setSelectedCase(caseFile)}
                    className="group relative cursor-pointer bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-2xl border-2 border-border overflow-hidden h-full"
                  >
                    <div className="p-5 flex flex-col items-center text-center h-full">
                      <motion.div
                        className="mb-3 relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Folder className="w-24 h-24 text-primary/60 group-hover:text-primary transition-colors" />
                        <Badge className="absolute top-0 right-0 bg-primary text-primary-foreground font-typewriter text-xs">
                          #{caseFile.number}
                        </Badge>
                      </motion.div>

                      <h3 className="font-typewriter text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                        {caseFile.title}
                      </h3>

                      <p className="font-serif text-xs text-muted-foreground line-clamp-3 flex-grow">
                        {caseFile.brief}
                      </p>

                      <div className="mt-3 text-xs font-typewriter text-primary">
                        CLICK TO VIEW →
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: All 4 in one row */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4 xl:gap-6">
          {caseFiles.map((caseFile, idx) => (
            <motion.div
              key={caseFile.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card
                onClick={() => setSelectedCase(caseFile)}
                className="group relative cursor-pointer bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-2xl border-2 border-border overflow-hidden h-full"
              >
                <div className="p-4 xl:p-5 flex flex-col items-center text-center h-full">
                  <motion.div
                    className="mb-3 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Folder className="w-20 h-20 xl:w-24 xl:h-24 text-primary/60 group-hover:text-primary transition-colors" />
                    <Badge className="absolute top-0 right-0 bg-primary text-primary-foreground font-typewriter text-[10px]">
                      #{caseFile.number}
                    </Badge>
                  </motion.div>

                  <h3 className="font-typewriter text-sm xl:text-base mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {caseFile.title}
                  </h3>

                  <p className="font-serif text-xs text-muted-foreground line-clamp-3 flex-grow">
                    {caseFile.brief}
                  </p>

                  <div className="mt-3 text-[10px] xl:text-xs font-typewriter text-primary">
                    CLICK TO VIEW →
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-paper-cream text-ink-black border-4 border-border p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="font-typewriter text-lg sm:text-2xl md:text-3xl text-ink-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span className="break-words">PROJECT #{selectedCase?.number}</span>
              
            </DialogTitle>
          </DialogHeader>

          {selectedCase && (
            <motion.div
              className="space-y-4 md:space-y-6 py-2 md:py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="border-b-2 border-ink-black/20 pb-3 md:pb-4">
                <h3 className="font-typewriter text-lg sm:text-xl md:text-2xl break-words">{selectedCase.title}</h3>
              </div>

              <div>
                <h4 className="font-typewriter text-xs sm:text-sm text-muted-foreground mb-2">PROJECT OVERVIEW:</h4>
                <p className="font-serif text-sm sm:text-base leading-relaxed">{selectedCase.brief}</p>
              </div>

           <div>
              <h4 className="font-typewriter text-xs sm:text-sm text-muted-foreground mb-2">SCREENSHOTS:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {selectedCase.image.map((img, idx) => (
                  <motion.div
                    key={idx}
                    className="aspect-video overflow-hidden rounded-lg border-2 border-ink-black/30"
                    whileHover={{ scale: 1.02 }}
                  >
                   <img
  src={img}
  alt={`${selectedCase.title} Screenshot ${idx + 1}`}
  className="w-full h-full object-contain rounded-md bg-black"
/>

                  </motion.div>
                ))}
              </div>
            </div>


              <div>
                <h4 className="font-typewriter text-xs sm:text-sm text-muted-foreground mb-2">Features</h4>
                <ul className="font-serif space-y-1.5 md:space-y-2 text-sm sm:text-base">
                  {selectedCase.contribution.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      <span className="mr-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-typewriter text-xs sm:text-sm text-muted-foreground mb-2">TECHNOLOGIES:</h4>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {selectedCase.tools.map((tool, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: idx * 0.05 }}
                    >
                      <Badge variant="secondary" className="font-typewriter text-xs">
                        {tool}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
  <h4 className="font-typewriter text-xs sm:text-sm text-muted-foreground mb-2">REPOSITORY:</h4>
  <motion.a
    href={selectedCase.repo}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 font-serif text-sm sm:text-base text-primary hover:text-primary/80 transition-colors"
    whileHover={{ x: 4 }}
  >
    <Github className="w-4 h-4" />
    <span>View on GitHub</span>
  </motion.a>
</div>


             <div className="pt-3 md:pt-4 border-t-2 border-ink-black/20">
  {selectedCase.link && selectedCase.link !== '#' ? (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button
        className="w-full font-typewriter text-sm sm:text-base bg-primary hover:bg-primary/90 text-primary-foreground"
        onClick={() => window.open(selectedCase.link, '_blank')}
      >
        <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
        <span className="hidden sm:inline">VIEW LIVE PROJECT</span>
        <span className="sm:hidden">VIEW PROJECT</span>
      </Button>
    </motion.div>
  ) : (
    <Button
      disabled
      className="w-full font-typewriter text-sm sm:text-base bg-primary/50 text-primary-foreground cursor-not-allowed"
    >
      <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
      <span>COMING SOON</span>
    </Button>
  )}
</div>

            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CaseFiles;
