import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, Terminal, Sparkles, ArrowDown } from "lucide-react";

interface HeroProps {
  onStartInvestigation: () => void;
}

const Hero = ({ onStartInvestigation }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Floating code symbols */}
      <motion.div
        className="absolute top-20 left-10 hidden lg:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Terminal className="w-20 h-20 text-primary/30" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-20 hidden lg:block"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Code2 className="w-24 h-24 text-primary/30" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-10 hidden md:block"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <Sparkles className="w-16 h-16 text-primary/40" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        {/* Greeting badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="font-typewriter text-xs md:text-sm text-primary">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main headline with stagger effect */}
        <div className="mb-6">
          <motion.h1
            className="font-typewriter text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: "200% 100%" }}
            >
              Sharath Devadiga
            </motion.span>
          </motion.h1>
        </div>

        {/* Animated underline */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Subtitle with typing effect feel */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p
            className="font-typewriter text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary uppercase tracking-widest"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Coding Stories, Crafting Experiences.
          <br />
          <span className="text-sm md:text-base lg:text-lg">
            Bringing ideas to life through design, code, and purpose.
          </span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={onStartInvestigation}
              size="lg"
              className="group relative font-typewriter text-sm md:text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <ArrowDown className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              <span>EXPLORE</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative lines */}
        <motion.div
          className="mt-16 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
            >
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded blur-sm"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;