import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Code,
  FileCode,
  Palette,
  Database,
  Zap,
  Layout,
  GitBranch,
  TestTube,
  Wrench
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
  category: string;
}

const skills: Skill[] = [
  // Languages

  { name: 'JavaScript', icon: FileCode, category: 'Language' },
  { name: 'TypeScript', icon: FileCode, category: 'Language' },

  // Frontend
  { name: 'React.js', icon: Zap, category: 'Frontend' },
  { name: 'Next.js', icon: Zap, category: 'Frontend' },
  { name: 'TailwindCSS', icon: Palette, category: 'Frontend' },
  { name: 'Zustand', icon: Layout, category: 'Frontend' },

  // Backend
  { name: 'Node.js', icon: Zap, category: 'Backend' },
  { name: 'Express.js', icon: Zap, category: 'Backend' },
  { name: 'Socket.io', icon: Zap, category: 'Backend' },

  // Databases
  { name: 'MongoDB', icon: Database, category: 'Database' },
  { name: 'PostgreSQL', icon: Database, category: 'Database' },
  { name: 'MySQL', icon: Database, category: 'Database' },

  // Tools / Platforms
  { name: 'GitHub', icon: GitBranch, category: 'Tools' },
  { name: 'Docker', icon: Wrench, category: 'Tools' },
  { name: 'Postman', icon: TestTube, category: 'Tools' },
  { name: 'VS Code', icon: Code, category: 'Tools' },
];

const Skills = () => {
  return (
    <section id="tools" className="scroll-mt-[70px] md:scroll-mt-20 py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="font-typewriter text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-3 md:mb-4 text-primary tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          TECH STACK
        </motion.h2>
        <motion.p
          className="font-serif text-center text-muted-foreground mb-8 md:mb-12 text-sm sm:text-base md:text-lg px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technologies and tools I work with
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-card/50 p-8 border-2 border-border relative overflow-hidden">
            {/* Circuit pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="grid grid-cols-12 gap-4 w-full h-full p-4">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-foreground/20" />
                ))}
              </div>
            </div>

            <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={`${skill.name}-${skill.category}`}
                    className="flex flex-col items-center touch-none"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                  >
                    <div className="relative mb-2 sm:mb-3">
                      <motion.div
                        className="relative w-12 h-12 sm:w-16 sm:h-16 bg-card border-2 border-border rounded-full flex items-center justify-center md:hover:bg-primary md:hover:border-primary transition-all duration-300 shadow-lg overflow-hidden"
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary md:group-hover:text-primary-foreground transition-colors relative z-10" />
                      </motion.div>
                      <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 w-1 h-2 sm:h-3 bg-border rounded-full" />
                    </div>

                    <div className="text-center">
                      <p className="font-typewriter text-[10px] sm:text-xs text-foreground transition-colors leading-tight">
                        {skill.name}
                      </p>
                      <p className="font-serif text-[9px] sm:text-[10px] text-muted-foreground mt-0.5 sm:mt-1">
                        {skill.category}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
