import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const universityFeatures = [
  {
    title: "تنسيق البحوث",
    description: "تنسيق احترافي للأوراق العلمية والبحوث الجامعية وفق المعايير الأكاديمية.",
    image: "/academic_writing_desk_transparent.png"
  },
  {
    title: "مشاريع التخرج",
    description: "دعم في صياغة المحتوى الأكاديمي والرسائل العلمية لمشاريع التخرج المتميزة.",
    image: "/graduation_cap_scroll_transparent.png"
  },
  {
    title: "التدقيق اللغوي",
    description: "تدقيق لغوي ونحوي شامل لضمان سلامة النصوص وخلوها من الأخطاء.",
    image: "/pen_correction_paper_transparent.png"
  },
  {
    title: "تطوير المشاريع الجامعية",
    description: "مساعدة شاملة في تطوير الأفكار الأكاديمية وتحويلها إلى مشاريع متميزة.",
    image: "/project_development_transparent.png"
  },
  {
    title: "دعم السيرة الذاتية والخطابات",
    description: "كتابة وتنسيق السير الذاتية الأكاديمية وخطابات الغرض من الدراسة.",
    image: "/cv_support_transparent.png"
  },
  {
    title: "الترجمة الأكاديمية",
    description: "ترجمة احترافية للأبحاث والأوراق العلمية لضمان دقة المصطلحات الأكاديمية.",
    image: "/academic_translation_transparent.png"
  }
];

export default function UniversityServices() {
  return (
    <section id="university-services" className="w-full py-24 bg-background overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto mb-24 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-zinc-900"
          >
            الخدمات <span className="text-[#d5a294]">الجامعية</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            نساعد الطلاب والباحثين في صياغة وتنسيق بحوثهم العلمية ومشاريع التخرج بأعلى معايير الجودة الأكاديمية.
          </motion.p>
        </div>

        {/* Card Block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-items-center">
          {universityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-full aspect-square max-w-[280px] mb-8 bg-primary/5 rounded-3xl p-8 flex items-center justify-center overflow-hidden border border-primary/10 transition-all duration-500 group-hover:bg-primary/10 group-hover:border-primary/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d5a294]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
                  src={feature.image}
                  alt={feature.title}
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-base text-foreground/70 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
