'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const defaultCards = [
  {
    num: "1",
    desc: "Two decades of transforming landscapes into landmarks. We build visionary projects in the lap of nature, bringing you closer to your deepest desires.",
    giant: "Legacy",
    img: "/images/unit_vision.webp",
    gradient: "from-[#E8F5E9] via-[#E8F5E9] to-[#E8F5E9]/80"
  },
  {
    num: "2",
    desc: "Ready-to-build plots with seamless, pre-installed facilities. Bypass the setup and begin living your architectural dream instantly.",
    giant: "Facilities",
    img: "/images/unit_facilities.webp",
    gradient: "from-[#E8F5E9] via-[#E8F5E9] to-[#E8F5E9]/80"
  },
  {
    num: "3",
    desc: "An intimate 3-acre community limited to just 10 equal plots. Unparalleled privacy, meticulously prepared for your vision.",
    giant: "Exclusivity",
    img: "/images/unit_exclusivity.webp",
    gradient: "from-[#E8F5E9] via-[#E8F5E9] to-[#E8F5E9]/80"
  },
  {
    num: "4",
    desc: "A tranquil riverfront retreat perfectly secluded in nature, yet moments away from Nashik and the revered Trimbakeshwar temple.",
    giant: "Location",
    img: "/images/unit_location.webp",
    gradient: "from-[#E8F5E9] via-[#E8F5E9] to-[#E8F5E9]/80"
  }
];

export function UnitInfrastructure() {
  const [cards, setCards] = useState(defaultCards);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const res = await fetch('/api/abloom?collection=Abloom_images');
        const json = await res.json();
        if (json.success && json.data.length > 0) {
          const slotMap: Record<string, string> = {};
          json.data.forEach((item: any) => { slotMap[item.slot] = item.src; });
          setCards((prev) => prev.map((card) => {
            const fileName = card.img.split('/').pop()?.replace('.webp', '');
            const mapped = fileName && slotMap[fileName] ? slotMap[fileName] : null;
            return mapped ? { ...card, img: mapped } : card;
          }));
        }
      } catch { /* fallback */ }
    };
    loadImages();
  }, []);

  return (
    <section className="bg-[#FDFBF7] text-forest w-full relative z-20">
      {/* Sticky Full-Width Heading with Solid Background */}
      <div className="sticky top-0 z-50 w-full bg-[#FDFBF7] pt-28 pb-8 border-b border-black/5 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-light font-serif tracking-wide text-[#1B5E20]">
            Unit Infrastructure & <span className="opacity-70 italic">Key Highlights</span>
          </h2>
        </div>
      </div>

      {/* Cards container */}
      <div className="flex flex-col relative w-full">
        {cards.map((card, idx) => (
          <StickyCard key={idx} card={card} index={idx} />
        ))}
      </div>
    </section>
  );
}

function StickyCard({ card, index }: { card: any, index: number }) {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: slideProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  
  // Fade in the tint and text as the card locks into its sticky position
  const contentOpacity = useTransform(slideProgress, [0.4, 1], [0, 1]);

  return (
    <div 
      ref={targetRef} 
      className="sticky top-0 w-full h-[70vh] md:h-[80vh] flex items-center overflow-hidden bg-[#FDFBF7]"
      style={{ zIndex: index + 1 }}
    >
      <motion.div 
        className="absolute inset-0 w-full h-[130%]"
        style={{ y }}
      >
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r ${card.gradient} z-10`} 
          initial={{ opacity: 0 }}
          style={{ opacity: contentOpacity }}
        />
        {/* Removed the multiply blend so the original image colors and details are much more clearly visible */}
        <img src={card.img} alt={card.giant} className="w-full h-full object-cover opacity-100" />
      </motion.div>

      <motion.div 
        className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-[#1B5E20]"
        initial={{ opacity: 0 }}
        style={{ opacity: contentOpacity }}
      >
        
        <div className="md:w-1/3 flex flex-col gap-6 md:pr-12">
          <div className="w-12 h-12 rounded-full border border-[#1B5E20]/30 flex items-center justify-center backdrop-blur-md bg-white/60">
            <span className="font-serif text-lg">{card.num}</span>
          </div>
          <p className="text-lg md:text-xl font-light leading-relaxed text-[#1B5E20]">
            {card.desc}
          </p>
        </div>

        <div className="md:w-2/3 flex items-center justify-start md:justify-end w-full mt-12 md:mt-0">
          <h3 className="text-[14vw] md:text-[9vw] font-sans font-black tracking-normal uppercase leading-none text-[#1B5E20]/90 mr-4 md:mr-10">
            {card.giant}
          </h3>
        </div>

      </motion.div>
    </div>
  );
}
