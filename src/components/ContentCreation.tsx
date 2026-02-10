import { motion } from "framer-motion";
import { Play, Film, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const techTags = ["#TechEducation", "#HinglishContent", "#DevCommunity"];
const creativeTags = ["#Philosophy", "#Cinematography", "#Perspective"];

export const ContentCreation = () => {
  return (
    <section id="content" className="py-24 relative">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Beyond the <span className="text-gradient-primary">Terminal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tech advocacy, knowledge sharing, and creative exploration.
          </p>
        </motion.div>

        {/* Split Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Column 1: Technical Advocacy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card rounded-lg p-8 group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 relative"
          >
            {/* Video Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-mono">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              VIDEO
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Tech & Tutorials</h3>
                <p className="font-mono text-primary text-sm">@solitarydev8</p>
              </div>
            </div>

            {/* Phone Frame Mockup with Video Cue */}
            <div className="relative my-6 flex justify-center">
              <div className="w-40 h-72 bg-card border-2 border-card-border rounded-3xl p-2 shadow-lg">
                <div className="w-full h-full bg-muted rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                  {/* Code editor + timeline visual */}
                  <div className="w-full px-3 mb-2">
                    <div className="h-1 bg-primary/30 rounded-full">
                      <div className="h-full w-1/3 bg-primary rounded-full" />
                    </div>
                  </div>
                  <div className="font-mono text-xs text-primary/70 mb-2">&lt;/&gt;</div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/40">
                    <Play className="w-5 h-5 text-primary ml-0.5" />
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-2">Tech & Code</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">
              Breaking down technical topics and engineering logic into high-impact video lessons. From 60-second tips to deep-dive tutorials.
            </p>

            <p className="text-sm text-muted-foreground/70 mb-4 font-mono">
              Reels, Tutorials, & Deep Dives
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {techTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-primary/30 text-primary font-mono text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Social Row */}
            <div className="flex gap-3">
              <Button
                variant="default"
                className="flex-1 gap-2"
                onClick={() => window.open("https://instagram.com/solitarydev8", "_blank")}
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </Button>
              <Button
                variant="outline"
                className="flex-1 gap-2 border-primary/50 hover:text-primary text-primary hover:bg-primary/10"
                onClick={() => window.open("https://youtube.com/@solitarydev8", "_blank")}
              >
                <Youtube className="w-4 h-4" />
                YouTube
              </Button>
            </div>
          </motion.div>

          {/* Column 2: The Unfiltered Archive */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card rounded-lg p-8 group hover:border-amber/50 hover:shadow-[0_0_30px_hsl(var(--amber)/0.15)] transition-all duration-300 relative"
          >
            {/* Video Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-amber/20 text-amber px-2 py-1 rounded-full text-xs font-mono">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              VIDEO
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center">
                <Play className="w-6 h-6 text-amber" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Philosophy & Perspective</h3>
                <p className="font-mono text-amber text-sm">@the.unfiltered.adi</p>
              </div>
            </div>

            {/* Film Frame Visual */}
            <div className="relative my-6 flex justify-center">
              <div className="w-40 h-72 bg-card border-2 border-card-border rounded-3xl p-2 shadow-lg">
                <div className="w-full h-full bg-muted rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-amber/5 to-transparent" />
                  {/* Film strip visual */}
                  <div className="absolute top-2 left-0 right-0 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-2 bg-muted-foreground/20 rounded-sm" />
                    ))}
                  </div>
                  {/* Aperture/lens icon */}
                  <div className="w-16 h-16 rounded-full border-4 border-amber/30 flex items-center justify-center relative">
                    <div className="w-8 h-8 rounded-full border-2 border-amber/50 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-amber/40" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-2 bg-muted-foreground/20 rounded-sm" />
                    ))}
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-4">Unfiltered Thoughts</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">
              A visual diary exploring the intersection of philosophy and human experience. Shadow work, poetry, and unfiltered thoughts in motion.
            </p>

            <p className="text-sm text-muted-foreground/70 mb-4 font-mono">
              Unfiltered Thoughts & Monologues
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {creativeTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-amber/30 text-amber font-mono text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Social Row */}
            <div className="flex gap-3">
              <Button
                variant="default"
                className="flex-1 gap-2 border-amber text-black bg-amber hover:bg-amber/90 hover:text-black"
                onClick={() => window.open("https://instagram.com/the.unfiltered.adi", "_blank")}
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </Button>
              <Button
                variant="outline"
                className="flex-1 gap-2 border-amber/50 text-amber hover:bg-amber/10 hover:text-amber"
                onClick={() => window.open("https://youtube.com/@the.unfilteredAdi", "_blank")}
              >
                <Youtube className="w-4 h-4" />
                YouTube
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
