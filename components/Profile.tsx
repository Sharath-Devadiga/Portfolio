import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Code, Sparkles, Terminal, Award } from "lucide-react";

const Profile = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "MongoDB", level: 82 },
    { name: "PostgreSQL", level: 80 },
  ];

  return (
    <section id="profile" className="relative py-12 md:py-20 px-4 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
          
          <motion.h2
            className="font-typewriter text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            PROFILE
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
          {/* Left Column - Photo & Quick Stats */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Photo Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-2 border-border p-6 relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <motion.div
                className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 border-4 border-primary/30"
                  animate={{
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="relative w-full h-full border-4 border-border bg-muted overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/assets/photo.jpg" 
                    alt="Sharath" 
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
                
                {/* Floating badge */}
                <motion.div
                  className="absolute -top-3 -right-3"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                
                </motion.div>
              </motion.div>

              {/* Quick Stats */}
             
            </Card>
          </motion.div>

          {/* Right Column - Profile Details */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-2 border-border p-6 md:p-8 relative overflow-hidden group">
              {/* Animated background */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="space-y-6 relative z-10">
                {/* Name */}
                <motion.div
                  className="border-b-2 border-border/50 pb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="font-typewriter text-xs sm:text-sm text-muted-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    NAME
                  </p>
                  <motion.h3
                    className="font-typewriter text-xl sm:text-2xl md:text-3xl text-foreground"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Sharath Devadiga
                  </motion.h3>
                </motion.div>

                {/* Role */}
                <motion.div
                  className="border-b-2 border-border/50 pb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <p className="font-typewriter text-xs sm:text-sm text-muted-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    ROLE
                  </p>
                  <motion.div
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Badge variant="secondary" className="font-typewriter text-sm sm:text-base md:text-lg px-4 py-2">
                      <Code className="w-4 h-4 mr-2" />
                      FULL STACK DEVELOPER
                    </Badge>
                  </motion.div>
                </motion.div>

                {/* Bio */}
                <motion.div
                  className="pb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <p className="font-typewriter text-xs sm:text-sm text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    BIO
                  </p>
                  <motion.p
                    className="font-serif text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Full-stack Web Developer with hands-on experience in the MERN stack and TypeScript. 
                    I build user-friendly, scalable web applications, real-time collaboration tools, 
                    and practical projects. Passionate about problem-solving, clean UI/UX, and continuously 
                    learning to enhance software design and performance.
                  </motion.p>
                </motion.div>

                {/* Skills */}
                
              </div>

              {/* Decorative corner */}
              <motion.div
                className="absolute bottom-0 right-0 w-24 h-24 border-t-2 border-l-2 border-primary/20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;