"use client"

import type React from "react"
import { Warp } from "@paper-design/shaders-react"
import { MessageSquare, PenTool, Megaphone, Search, Target, BarChart } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "إدارة التواصل الاجتماعي",
    description: "إدارة احترافية لحساباتك تضمن التفاعل والنمو المستمر وبناء مجتمع مخلص لعلامتك.",
    icon: <MessageSquare className="w-12 h-12 text-white" />,
  },
  {
    title: "كتابة المحتوى الإبداعي",
    description: "نصوص إعلانية ومحتوى متخصص يحول القراء إلى عملاء دائمين من خلال قوة الكلمة.",
    icon: <PenTool className="w-12 h-12 text-white" />,
  },
  {
    title: "إعلانات الأداء الموجهة",
    description: "حملات إعلانية ممولة وموجهة بدقة على منصات التواصل لتحقيق أعلى عائد على الاستثمار.",
    icon: <Megaphone className="w-12 h-12 text-white" />,
  },
  {
    title: "تحسين محركات البحث (SEO)",
    description: "تحسين ظهور موقعك في نتائج البحث الأولى لجذب عملاء مهتمين بشكل عضوي ومستدام.",
    icon: <Search className="w-12 h-12 text-white" />,
  },
  {
    title: "هوية المحتوى والرسائل",
    description: "بناء نبرة صوت فريدة ورسائل واضحة تميز علامتك التجارية وتجعلها عالقة في الأذهان.",
    icon: <Target className="w-12 h-12 text-white" />,
  },
  {
    title: "تحليل الأداء والنتائج",
    description: "تقارير دورية دقيقة وشاملة لقياس التقدم المحرز وتحسين الاستراتيجيات بناءً على البيانات.",
    icon: <BarChart className="w-12 h-12 text-white" />,
  },
]

export default function FeaturesCards() {
  const getShaderConfig = (index: number) => {
    // Terracotta-themed shader configs
    const configs = [
      {
        proportion: 0.3,
        softness: 0.8,
        distortion: 0.15,
        swirl: 0.6,
        swirlIterations: 8,
        shape: "checks" as const,
        shapeScale: 0.08,
        colors: ["#d5a294", "#c18b7d", "#e9c4bc", "#3d2b26"],
      },
      {
        proportion: 0.4,
        softness: 1.2,
        distortion: 0.2,
        swirl: 0.9,
        swirlIterations: 12,
        shape: "dots" as const,
        shapeScale: 0.12,
        colors: ["#c18b7d", "#d5a294", "#f7f7f3", "#a67164"],
      },
      {
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 10,
        shape: "checks" as const,
        shapeScale: 0.1,
        colors: ["#d5a294", "#e9c4bc", "#3d2b26", "#c18b7d"],
      },
      {
        proportion: 0.45,
        softness: 1.1,
        distortion: 0.22,
        swirl: 0.8,
        swirlIterations: 15,
        shape: "dots" as const,
        shapeScale: 0.09,
        colors: ["#3d2b26", "#c18b7d", "#d5a294", "#f7f7f3"],
      },
      {
        proportion: 0.38,
        softness: 0.95,
        distortion: 0.16,
        swirl: 0.85,
        swirlIterations: 11,
        shape: "checks" as const,
        shapeScale: 0.11,
        colors: ["#d5a294", "#c18b7d", "#e9c4bc", "#3d2b26"],
      },
      {
        proportion: 0.42,
        softness: 1.0,
        distortion: 0.19,
        swirl: 0.75,
        swirlIterations: 9,
        shape: "dots" as const,
        shapeScale: 0.13,
        colors: ["#c18b7d", "#f7f7f3", "#d5a294", "#3d2b26"],
      },
    ]
    return configs[index % configs.length]
  }

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-7xl font-black text-zinc-900 mb-8 tracking-tighter">حلول تسويق رقمي متكاملة <span className="text-[#d5a294]">تحت إشرافي</span></h2>
          <p className="text-lg md:text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed font-medium">
            نجمع بين الاستراتيجية، المحتوى، والتقنية لنصنع نتائج ملموسة لعلامتك التجارية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const shaderConfig = getShaderConfig(index)
            return (
              <div key={index} className="relative h-80 group cursor-default">
                {/* Unified scaling wrapper */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.05] z-0 shadow-xl group-hover:shadow-2xl shadow-[#d5a294]/10">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={shaderConfig.proportion}
                    softness={shaderConfig.softness}
                    distortion={shaderConfig.distortion}
                    swirl={shaderConfig.swirl}
                    swirlIterations={shaderConfig.swirlIterations}
                    shape={shaderConfig.shape}
                    shapeScale={shaderConfig.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.6}
                    colors={shaderConfig.colors}
                  />
                  {/* Overlay inside the scaling wrapper */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col transition-transform duration-500 group-hover:scale-[1.05]">
                  <div className="mb-6 filter drop-shadow-xl text-white transform group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>

                  <p className="leading-relaxed flex-grow text-white/90 font-medium text-right">{feature.description}</p>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
