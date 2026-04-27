import React from "react"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { SlideTabs } from "@/components/ui/slide-tabs"
import { ServiceCard } from "@/components/ui/service-card"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1"
import { RecognitionFeatures } from "@/components/ui/features-8"
import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery"
import { CinematicFooter } from "@/components/ui/motion-footer"
import FeatureCarousel, { FeatureCarouselItem } from "@/components/ui/feature-carousel"
import { ContactSection } from "@/components/ui/contact"
import FeaturesCards from "@/components/ui/feature-shader-cards"
import { FeatureCard } from "@/components/ui/feature-card"
import UniversityServices from "@/components/ui/university-services"
import { motion } from "framer-motion"
import { PenTool, Megaphone, Target, BarChart, Mic, Rocket, Phone, Mail, BookOpen, FileText, FilePenLine, UserRoundPen, Search, Crosshair, MessageCircleCode } from "lucide-react"

function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const contentWritingFeatures: FeatureCarouselItem[] = [
    {
      id: "website-content",
      label: "كتابة محتوى المواقع",
      icon: FilePenLine,
      image: "/images/service-website-v2.png",
      description: "محتوى احترافي يعرّف مشروعك بوضوح ويقنع الزائر من أول سطر."
    },
    {
      id: "profiles",
      label: "البروفايلات التعريفية",
      icon: UserRoundPen,
      image: "/images/service-profile-v2.png",
      description: "صياغة هوية مكتوبة تُظهر نقاط القوة وتبني صورة موثوقة."
    },
    {
      id: "social-media",
      label: "محتوى السوشيال ميديا",
      icon: Megaphone,
      image: "/images/service-social-v2.png",
      description: "منشورات متناسقة تعزز حضور علامتك وتزيد التفاعل الحقيقي."
    },
    {
      id: "seo-store",
      label: "محتوى المتاجر والسيو",
      icon: Search,
      image: "/images/service-seo-v2.png",
      description: "وصف منتجات وصفحات مُهيّأ لمحركات البحث لرفع الظهور والمبيعات."
    },
    {
      id: "ad-copy",
      label: "النصوص الإعلانية",
      icon: Crosshair,
      image: "/images/service-ads-v2.png",
      description: "رسائل إعلانية مركّزة تدفع الجمهور لاتخاذ قرار واضح وسريع."
    },
    {
      id: "brand-tone",
      label: "رسائل ونبرة العلامة",
      icon: MessageCircleCode,
      image: "/images/service-brand-v2.png",
      description: "نبرة موحّدة وهوية لغوية تجعل علامتك مميزة وسهلة التذكّر."
    }
  ]

  const digitalMarketingServices = [
    { title: "الدراسات والتحليل", description: "Research & Analysis", icon: <BarChart className="w-8 h-8" />, href: "#", variant: "default" },
    { title: "الاستراتيجيات التسويقية", description: "Marketing Strategies", icon: <Target className="w-8 h-8" />, href: "#", variant: "primary" },
    { title: "البراندنج والهوية", description: "Branding & Identity", icon: <PenTool className="w-8 h-8" />, href: "#", variant: "default" },
    { title: "كتابة المحتوى", description: "Content Writing", icon: <FileText className="w-8 h-8" />, href: "#", variant: "primary" },
    { title: "التصميم", description: "Design", icon: <PenTool className="w-8 h-8" />, href: "#", variant: "default" },
    { title: "بناء المواقع الإلكترونية", description: "Website Development", icon: <Rocket className="w-8 h-8" />, href: "#", variant: "primary" },
    { title: "إدارة صفحات التواصل", description: "Social Media Management", icon: <Megaphone className="w-8 h-8" />, href: "#", variant: "default" },
    { title: "الحملات الممولة", description: "Paid Campaigns", icon: <Target className="w-8 h-8" />, href: "#", variant: "primary" },
    { title: "تهيئة محركات البحث (SEO)", description: "Search Engine Optimization", icon: <BarChart className="w-8 h-8" />, href: "#", variant: "default" },
    { title: "التقارير والمتابعة", description: "Reporting & Follow-up", icon: <FileText className="w-8 h-8" />, href: "#", variant: "primary" }
  ]

  const academicServices = [
    { title: "إعادة الصياغة الأكاديمية", description: "Academic Paraphrasing", icon: <PenTool className="w-8 h-8" />, href: "#", variant: "primary" },
    { title: "تنسيق المحتوى العلمي", description: "Scientific Formatting", icon: <BookOpen className="w-8 h-8" />, href: "#", variant: "default" },
    { title: "المساعدة في إعداد الأبحاث", description: "Research Assistance", icon: <BarChart className="w-8 h-8" />, href: "#", variant: "primary" },
    { title: "تطوير المشاريع الجامعية", description: "Project Development", icon: <Rocket className="w-8 h-8" />, href: "#", variant: "default" },
    { title: "دعم السيرة الذاتية والخطابات", description: "CV & Cover Letters", icon: <FileText className="w-8 h-8" />, href: "#", variant: "primary" }
  ]

  const testimonialsData = [
    { text: "تجربة رائعة مع فريق لينا، تم إدارة حساباتنا بشكل احترافي مما زاد المبيعات بشكل ملحوظ في وقت قياسي.", image: "https://randomuser.me/api/portraits/women/4.jpg", name: "سارة عبد الله", role: "مديرة تسويق" },
    { text: "التزام بالمواعيد، وأفكار إبداعية في المحتوى غيرت من شكل علامتنا التجارية تماماً. أنصح بالتعامل معهم بقوة.", image: "https://randomuser.me/api/portraits/men/3.jpg", name: "أحمد الماجد", role: "مؤسس متجر إلكتروني" },
    { text: "الحملات الإعلانية كانت موجهة بدقة شديدة وحققنا عائد ممتاز على الاستثمار. شكراً لينا على هذا الشغف.", image: "https://randomuser.me/api/portraits/women/12.jpg", name: "نورة القحطاني", role: "صاحبة مشروع" },
    { text: "سرعة في الاستجابة وتفهم عميق لاحتياجاتنا كعملاء. التعليق الصوتي كان إضافة مبهرة لإعلاناتنا.", image: "https://randomuser.me/api/portraits/men/22.jpg", name: "فيصل العمر", role: "المدير التنفيذي" },
    { text: "استراتيجيات السيو التي طبقوها قفزت بموقعنا للصفحة الأولى في جوجل خلال أشهر قليلة فقط.", image: "https://randomuser.me/api/portraits/women/24.jpg", name: "مريم الصالح", role: "مديرة مبيعات" },
    { text: "فريق لينا يتميز بالإبداع الحقيقي والاهتمام بالتفاصيل الدقيقة التي تصنع الفارق للعلامة التجارية.", image: "https://randomuser.me/api/portraits/men/32.jpg", name: "خالد المطيري", role: "رائد أعمال" },
    { text: "خدماتهم التسويقية هي استثمار حقيقي، لقد لمسنا فرقاً واضحاً في وعي الجمهور بعلامتنا.", image: "https://randomuser.me/api/portraits/women/42.jpg", name: "لمى التميمي", role: "صاحبة عيادة" },
    { text: "دعم فني وتواصل مستمر وتجاوب سريع في كل التعديلات المطلوبة. راضون جداً عن الخدمة.", image: "https://randomuser.me/api/portraits/men/44.jpg", name: "سعود الحربي", role: "مدير تقنية المعلومات" },
    { text: "إخراج فني مبدع لكل التصاميم وحملات سوشيال ميديا مدروسة أحدثت ضجة إيجابية لمنتجاتنا الجديدة.", image: "https://randomuser.me/api/portraits/women/62.jpg", name: "حصة العتيبي", role: "أخصائية علاقات عامة" }
  ]

  const portfolioData: GalleryItem[] = [
    { title: 'إطلاق هوية بصرية', category: 'محتوى للمشاريع والعلامات التجارية', photo: { url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&auto=format&fit=crop&q=80' } },
    { title: 'حملة سوشيال ميديا', category: 'محتوى للمشاريع والعلامات التجارية', photo: { url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&auto=format&fit=crop&q=80' } },
    { title: 'بروفايل احترافي', category: 'رسائل وهوية المحتوى', photo: { url: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=900&auto=format&fit=crop&q=80' } },
    { title: 'نبرة العلامة التجارية', category: 'رسائل وهوية المحتوى', photo: { url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&auto=format&fit=crop&q=80' } },
    { title: 'استراتيجية وتخطيط', category: 'تسويق رقمي متكامل', photo: { url: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=900&auto=format&fit=crop&q=80' } },
    { title: 'إدارة حملات متقدمة', category: 'تسويق رقمي متكامل', photo: { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80' } }
  ]

  const col1 = testimonialsData.slice(0, 3)
  const col2 = testimonialsData.slice(3, 6)
  const col3 = testimonialsData.slice(6, 9)

  return (
    <div className="w-full min-h-screen font-sans bg-background">
      
      {/* Fixed Navigation */}
      <div className="fixed top-6 left-0 right-0 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <SlideTabs onTabChange={scrollTo} />
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero">
        <AuroraBackground>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh] pt-12 pb-0">
            
            {/* Right side visually in RTL (First in DOM) - The Illustration */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="flex justify-center lg:justify-start order-1 lg:order-1"
            >
               <img src="/hero_line_art_transparent.png" alt="Huna Lina Line Art" className="w-full max-w-md lg:max-w-xl object-contain drop-shadow-sm opacity-90" />
            </motion.div>

            {/* Left side visually in RTL (Second in DOM) - The Text */}
            <motion.div
              initial={{ opacity: 0.0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start text-right order-2 lg:order-2"
            >
               <h1 className="text-6xl md:text-[8rem] font-black dark:text-white tracking-tighter leading-tight mb-4 text-foreground whitespace-nowrap">
                 هنا <span className="text-foreground opacity-70">لينا</span>
               </h1>
               
               <h2 className="text-xl md:text-3xl font-normal text-foreground/80 mb-6 leading-snug">
                 أساعد المشاريع والعلامات التجارية على بناء رسالة أوضح، محتوى أقوى، وحضور يليق بها.
               </h2>

               <p className="font-light text-base md:text-lg text-foreground/70 mb-10 leading-relaxed max-w-xl">
                 أقدّم خدمة كتابة المحتوى وأشرف على فريق متكامل يقدّم حلول التسويق الرقمي للمشاريع الطموحة.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full">
                 <LiquidButton variant="primary" size="xl" onClick={() => scrollTo('services')} className="w-full sm:w-auto text-center justify-center">
                   أريد كتابة محتوى لمشروعي
                 </LiquidButton>
                 <LiquidButton variant="secondary" size="xl" onClick={() => scrollTo('digital-marketing')} className="w-full sm:w-auto text-center justify-center">
                   أريد خدمات تسويق متكاملة
                 </LiquidButton>
               </div>
               
               <div className="text-sm md:text-base font-semibold opacity-70 text-foreground">
                 للمشاريع التي لا تبحث عن الظهور فقط… بل عن حضورٍ حقيقي يصنع فرقًا.
               </div>
            </motion.div>

          </div>
        </AuroraBackground>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="pt-32 md:pt-0 pb-32 px-6 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 text-right mb-24">
             {/* Text Side (Right in RTL) */}
             <div className="lg:w-1/2 order-1 lg:order-1">
                <h2 className="text-3xl md:text-7xl font-black mb-10 leading-[1.25] text-zinc-900 tracking-tighter">
                  أعمل مع المشاريع التي تستحق أن <span className="text-[#d5a294]">تُرى بوضوح</span>
                </h2>
                
                <p className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed max-w-xl">
                  أساعد المشاريع والعلامات التجارية على بناء رسالة واضحة ومحتوى يخدم أهدافها فعلًا. لا حشو، لا قوالب جاهزة.
                </p>
             </div>

             {/* Image Side (Left in RTL) */}
             <div className="lg:w-1/2 order-2 lg:order-2 relative flex justify-center lg:justify-start mt-12 lg:mt-0">
                {/* Decorative circles behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
                  <div className="absolute -top-16 -right-16 w-96 h-96 border border-[#d5a294]/20 rounded-full" />
                  <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-[#d5a294]/5 rounded-full" />
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 w-full max-w-xl rounded-[3rem] overflow-hidden shadow-2xl shadow-[#d5a294]/10"
                >
                  <img 
                    src="/images/lina3.jpeg" 
                    alt="Lina Portrait" 
                    className="w-full h-auto object-cover" 
                  />
                </motion.div>
             </div>
           </div>
           
           <div className="relative py-12">
              {/* Background Art Lines */}
              <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none">
                <svg viewBox="0 0 800 600" className="w-full h-full opacity-20 text-[#d5a294]" fill="none" preserveAspectRatio="none">
                  <motion.path
                    d="M-100,300 C150,100 350,500 500,300 C650,100 850,400 1000,200"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M-50,400 C200,200 400,600 550,400 C700,200 900,500 1100,300"
                    stroke="currentColor"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.7 }}
                    transition={{ duration: 3.5, delay: 0.5, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="400"
                    cy="300"
                    r="250"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="10 10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-12 mb-24 relative">
                <FeatureCard 
                  title="خدمة فردية"
                  description="أقدّمها بنفسي في كتابة المحتوى الإبداعي والمتخصص للمشاريع التي تبحث عن العمق والأثر."
                  items={["كتابة محتوى المواقع", "كتابة نصوص البروفايلات", "صياغة الرسائل التسويقية", "كتابة مقالات متخصصة"]}
                  buttonText="أطلب خدمة فردية"
                  onButtonClick={() => scrollTo('services')}
                />
                <FeatureCard 
                  isFeatured={true}
                  title="خدمات متكاملة"
                  description="في التسويق الرقمي يقدّمها فريق عمل متخصص تحت إشرافي المباشر لضمان الجودة."
                  items={["إدارة حسابات التواصل", "حملات إعلانية ممولة", "بناء استراتيجيات النمو", "تحليل الأداء والتقارير"]}
                  buttonText="أطلب خدمات متكاملة"
                  onButtonClick={() => scrollTo('digital-marketing')}
                />
              </div>
           </div>

           <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-20 text-right">
             <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.15] tracking-tight text-zinc-900">
                  <span className="text-[#d5a294] block mb-2">هنا لينا…</span>
                  <span className="block">ليست مجرد اسم،</span>
                  <span className="text-zinc-500 font-medium text-2xl md:text-3xl block mt-4">
                    بل مساحة تُبنى فيها الرسائل بعناية، وتُقدَّم المشاريع بالطريقة التي تليق بها.
                  </span>
                </h2>
                <div className="flex gap-2">
                  <div className="w-12 h-1.5 bg-primary/40 rounded-full" />
                  <div className="w-4 h-1.5 bg-primary/20 rounded-full" />
                </div>
             </div>

             <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
                {/* 2 Decorative Circles - Terracotta for high visibility */}
                <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full border-2 border-[#d5a294]/40 -z-10" />
                <div className="absolute -bottom-16 -left-8 w-56 h-56 bg-[#d5a294]/10 rounded-full -z-10" />
                
                {/* Floating Rectangular Image Container */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src="/images/lina1.jpeg" 
                    alt="Lina" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </motion.div>
             </div>
           </div>
        </div>
      </motion.section>


      {/* Content Writing Services */}
      <motion.section 
        id="services" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-6 relative overflow-hidden bg-background"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-black mb-6 text-zinc-900 tracking-tighter">كتابة محتوى أقدّمها بنفسي</h2>
            <p className="text-[#d5a294] font-bold text-xl mb-4">محتوى لا يملأ المساحة… بل يبني حضورًا.</p>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              أكتب محتوى احترافيًا يوضح رسالة مشروعك ويقربك من جمهورك. التركيز هنا على نص يخدم الهدف ويصنع حضورًا واضحًا.
            </p>
          </div>
          
          <FeatureCarousel features={contentWritingFeatures} />

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20 p-12 md:p-20 rounded-[3rem] bg-[#d5a294]/5 border border-[#d5a294]/10 relative overflow-hidden group"
          >
             {/* Background decorative glow */}
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#d5a294]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
             <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#d5a294]/5 rounded-full blur-3xl" />
             
             <h3 className="text-3xl md:text-6xl font-black text-zinc-900 mb-8 leading-[1.2] relative z-10">
               الكتابة هنا ليست حشوًا… <br />
               <span className="text-[#d5a294]">بل أداة نمو حقيقية لمشروعك.</span>
             </h3>
             
             <p className="text-zinc-500 text-lg md:text-2xl mb-12 max-w-2xl mx-auto relative z-10 font-medium">
               حوّل رسائلك من مجرد كلمات إلى أثر ملموس ونتائج واضحة.
             </p>
             
             <div className="relative z-10">
               <LiquidButton variant="primary" size="xxl" onClick={() => scrollTo('contact')} className="mx-auto shadow-2xl shadow-[#d5a294]/40 px-16">
                 أطلب خدمة كتابة محتوى
               </LiquidButton>
             </div>
          </motion.div>
        </div>
      </motion.section>



      {/* Digital Marketing Services */}
      <motion.section 
        id="digital-marketing" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative z-20"
      >
        <FeaturesCards />
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center pb-32 px-6 bg-background relative z-30"
        >
           <div className="p-10 md:p-24 rounded-[3rem] md:rounded-[4rem] bg-[#d5a294] text-zinc-950 relative overflow-hidden shadow-2xl shadow-[#d5a294]/20">
              {/* Subtle decorative background gradient */}
              <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/30 to-transparent pointer-events-none" />
              
              <h3 className="text-3xl md:text-7xl font-black mb-10 leading-tight text-zinc-900">
                من الفكرة إلى <span className="text-white">الظهور</span>، <br />
                ومن الظهور إلى <span className="text-white">النمو</span>.
              </h3>
              
              <p className="text-zinc-900/80 text-xl md:text-2xl mb-14 max-w-3xl mx-auto font-medium">
                لا تكتفِ بالتواجد الرقمي العادي. ابنِ استراتيجية تسويقية متكاملة تضمن لعلامتك الصدارة والتوسع الحقيقي.
              </p>
              
              <div className="relative z-10">
                <LiquidButton variant="secondary" size="xxl" onClick={() => scrollTo('contact')} className="mx-auto px-8 md:px-20 lg:scale-110 lg:hover:scale-125 transition-transform duration-500 bg-white text-[#d5a294] border-none shadow-xl shadow-black/10">
                  أطلب خدمات تسويق متكاملة
                </LiquidButton>
              </div>
           </div>
        </motion.div>
      </motion.section>


      {/* Recognition Section (Why Huna Lina) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <RecognitionFeatures />
      </motion.div>


      {/* Portfolio Section */}
      <motion.section 
        id="portfolio" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full bg-background" 
        style={{ height: '220vh' }}
      >
        <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
          <div className="text-center mb-8 absolute top-16 z-10 w-full px-6">
            
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 text-zinc-900">
              نماذج من <span className="text-[#d5a294]">الأعمال</span>
            </h2>
            
            <p className="text-zinc-600 mt-4 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
              أعمال مختارة لمشاريع وعلامات تجارية وشركات، اشتغلت عليها في المحتوى، الرسائل التسويقية، والحضور الرقمي، بما يخدم أهدافًا واضحة ويصنع أثرًا يمكن ملاحظته.
            </p>
          </div>
          <div className="w-full h-full mt-24">
            <CircularGallery items={portfolioData} />
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        id="testimonials" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-32 px-6 relative overflow-hidden bg-[#fdfaf8]"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d5a294]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d5a294]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/3 space-y-8 text-center lg:text-right">
            <div className="flex justify-start">
               <div className="inline-flex items-center gap-2 bg-white border border-[#d5a294]/20 shadow-sm px-4 py-1.5 rounded-full">
                 <div className="w-2 h-2 rounded-full bg-[#d5a294] animate-pulse" />
                 <span className="text-zinc-600 text-sm font-bold tracking-wide">آراء العملاء</span>
               </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black leading-[1.1] text-zinc-900">
              ماذا يقول عملاؤنا <span className="text-[#d5a294]">عنا؟</span>
            </h2>
            
            <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium">
              نجاح شركائنا هو أبلغ دليل على جودة ما نقدمه. <br className="hidden md:block" />
              استمع لتجاربهم المباشرة معنا.
            </p>
            
            <div className="pt-4 flex justify-start">
              <div className="w-20 h-1.5 bg-[#d5a294]/20 rounded-full" />
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] h-[600px] overflow-hidden">
              <TestimonialsColumn testimonials={col1} duration={15} />
              <TestimonialsColumn testimonials={col2} duration={19} className="hidden md:block" />
              <TestimonialsColumn testimonials={col3} duration={17} className="hidden lg:block" />
            </div>
          </div>
        </div>
      </motion.section>



      {/* Contact Section */}
      <section id="contact" className="pt-12 pb-0 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ContactSection />
        </motion.div>
      </section>

      {/* Cinematic Footer Section */}
      <CinematicFooter />
    </div>
  )
}

export default App
