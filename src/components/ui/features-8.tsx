import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Infinity, MessageSquare, Video, Workflow, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

export function RecognitionFeatures() {
    const cardVariants = {
        hidden: { opacity: 0, y: 26, scale: 0.98 },
        show: (index: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.55, delay: index * 0.08, ease: 'easeOut' },
        }),
    }

    return (
        <section id="recognition" className="py-16 md:py-32 relative overflow-hidden">
            <motion.div
                aria-hidden="true"
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -top-20 -right-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
            />
            <motion.div
                aria-hidden="true"
                animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -bottom-24 -left-14 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
            />
            <div className="mx-auto max-w-3xl lg:max-w-6xl px-6 relative z-10">
                <div className="text-center mb-16 px-6">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black mb-6 text-zinc-900 tracking-tighter"
                    >
                        لماذا <span className="text-[#d5a294]">لينا</span>؟
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed"
                    >
                        نضمن لك حلولاً تسويقية تزيد من مبيعاتك وتصنع الفارق الحقيقي لعلامتك.
                    </motion.p>
                </div>
                
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-6">
                        
                        {/* Card 1: Point 1 */}
                        <motion.div
                            custom={0}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -8, scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                            className="col-span-full lg:col-span-2"
                        >
                        <Card className="relative flex overflow-hidden group hover:border-primary/50 transition-colors border-primary/20 shadow-lg shadow-primary/5 h-full">
                            <motion.img
                                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=80"
                                alt="جلسة فهم احتياج المشروع"
                                className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
                                animate={{ scale: [1, 1.04, 1] }}
                                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <CardContent className="relative m-auto size-fit pt-6 text-center h-full flex flex-col justify-center min-h-[250px]">
                                <motion.div 
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative mx-auto mb-4 h-32 w-32 rounded-2xl border border-primary/30 bg-primary/5 p-4"
                                >
                                    <svg viewBox="0 0 120 120" className="h-full w-full text-[#d5a294]" fill="none" aria-hidden="true">
                                        <motion.path
                                            d="M26 76C26 58 40 44 58 44H62C80 44 94 58 94 76V82H26V76Z"
                                            stroke="currentColor"
                                            className="text-[#d5a294]"
                                            strokeWidth="3.5"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 1.1 }}
                                        />
                                        <motion.path
                                            d="M43 40C45 27 55 18 68 18C81 18 91 27 93 40"
                                            stroke="currentColor"
                                            className="text-[#d5a294]"
                                            strokeWidth="3.5"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 1.1, delay: 0.2 }}
                                        />
                                        <motion.circle
                                            cx="68"
                                            cy="33"
                                            r="7"
                                            stroke="currentColor"
                                            className="text-[#d5a294]"
                                            strokeWidth="3.5"
                                            initial={{ scale: 0.7, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.45 }}
                                        />
                                    </svg>
                                </motion.div>
                                <h2 className="text-xl font-bold mb-2">محتوى لا يعتمد على قوالب</h2>
                                <p className="text-foreground/80 font-medium text-sm px-2">لأن المحتوى هنا يُبنى على فهم احتياج مشروعك. كل مشروع له صوته، وسياقه، وطريقته الخاصة في الوصول.</p>
                            </CardContent>
                        </Card>
                        </motion.div>

                        {/* Card 2: Point 2 */}
                        <motion.div
                            custom={1}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -8, scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                            className="col-span-full sm:col-span-3 lg:col-span-2"
                        >
                        <Card className="relative overflow-visible group hover:border-primary/50 transition-colors border-primary/20 shadow-lg shadow-primary/5 h-full">
                            <motion.img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80"
                                alt="مؤشرات أداء وتسويق رقمي"
                                className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <CardContent className="pt-6 h-full flex flex-col justify-center min-h-[250px]">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                    className="relative mx-auto mb-6 h-32 w-32 rounded-2xl border border-primary/30 bg-primary/5 p-4"
                                >
                                    <svg viewBox="0 0 120 120" className="h-full w-full text-[#d5a294]" fill="none" aria-hidden="true">
                                        <motion.rect x="16" y="56" width="16" height="34" rx="4" stroke="currentColor" className="text-[#d5a294]" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
                                        <motion.rect x="42" y="44" width="16" height="46" rx="4" stroke="currentColor" className="text-[#d5a294]" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.1 }} />
                                        <motion.rect x="68" y="30" width="16" height="60" rx="4" stroke="currentColor" className="text-[#d5a294]" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />
                                        <motion.path d="M18 28L38 40L56 30L78 18" stroke="currentColor" className="text-[#d5a294]" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
                                        <motion.path d="M71 16H84V29" stroke="currentColor" className="text-[#d5a294]" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.7, delay: 0.45 }} />
                                    </svg>
                                </motion.div>
                                <div className="relative z-10 space-y-2 text-center">
                                    <h2 className="text-xl font-bold text-foreground">عين على الرسالة.. والنتيجة</h2>
                                    <p className="text-foreground/80 font-medium text-sm px-2">ما نكتبه وما ننفذه يجب أن يخدم هدفًا حقيقيًا، لا مجرد شكل جميل.</p>
                                </div>
                            </CardContent>
                        </Card>
                        </motion.div>

                        {/* Card 3: Point 3 */}
                        <motion.div
                            custom={2}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -8, scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                            className="col-span-full sm:col-span-3 lg:col-span-2"
                        >
                        <Card className="relative overflow-hidden group hover:border-primary/50 transition-colors border-primary/20 shadow-lg shadow-primary/5 h-full">
                            <motion.img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=80"
                                alt="تخطيط وتنفيذ مدروس للمشروع"
                                className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
                                animate={{ scale: [1, 1.03, 1] }}
                                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <CardContent className="pt-6 h-full flex flex-col justify-center min-h-[250px]">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut' }}
                                    className="relative mx-auto mb-6 h-32 w-32 rounded-2xl border border-primary/30 bg-primary/5 p-4"
                                >
                                    <svg viewBox="0 0 120 120" className="h-full w-full text-[#d5a294]" fill="none" aria-hidden="true">
                                        <motion.circle cx="60" cy="60" r="36" stroke="currentColor" className="text-[#d5a294]" strokeWidth="3.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
                                        <motion.path d="M60 24V60L84 72" stroke="currentColor" className="text-[#d5a294]" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.15 }} />
                                        <motion.path d="M60 16V8M60 112V104M16 60H8M112 60H104" stroke="currentColor" className="text-[#d5a294]/80" strokeWidth="3" strokeLinecap="round" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.5 }} />
                                    </svg>
                                </motion.div>
                                <div className="relative z-10 space-y-2 text-center">
                                    <h2 className="text-xl font-bold text-foreground">لا حلول مستعجلة</h2>
                                    <p className="text-foreground/80 font-medium text-sm px-2">لأن مشروعك يُعامل بما يليق به. لا عمل مكرر، بل فهم دقيق وتنفيذ مدروس.</p>
                                </div>
                            </CardContent>
                        </Card>
                        </motion.div>

                        {/* Card 4: Point 4 */}
                        <motion.div
                            custom={3}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -8, scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                            className="col-span-full lg:col-span-3"
                        >
                        <Card className="relative overflow-hidden group hover:border-[#d5a294]/50 transition-colors border-[#d5a294]/20 shadow-lg shadow-[#d5a294]/5 h-full">
                            <motion.img
                                src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=900&auto=format&fit=crop&q=80"
                                alt="وضوح واحترافية في العمل"
                                className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <CardContent className="grid pt-6 sm:grid-cols-2 gap-6 h-full items-center min-h-[250px]">
                                <div className="relative z-10 flex flex-col justify-center space-y-6">
                                    <div className="space-y-3 text-right">
                                        <h2 className="text-3xl font-bold text-foreground">الوضوح جزء من الاحتراف</h2>
                                        <p className="text-foreground/80 leading-relaxed text-lg">من أول خطوة حتى التسليم، نحرص أن تكون الرحلة واضحة، مرتبة، ومبنية بثقة.</p>
                                    </div>
                                </div>
                                <div className="relative h-56 sm:h-full p-6 flex items-center justify-center overflow-visible">
                                    
                                    {/* Central Icon */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-[#d5a294]/20 border border-[#d5a294]/40 rounded-2xl shadow-xl shadow-[#d5a294]/20 flex items-center justify-center">
                                        <Workflow className="text-[#d5a294] w-8 h-8" />
                                    </div>

                                    {/* Orbit rings */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/20 rounded-full border-dashed" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/10 rounded-full" />

                                    {/* Single Orbit for all 3 icons spaced 120deg apart */}
                                    <motion.div 
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-1/2 left-1/2 w-48 h-48 -mt-24 -ml-24 pointer-events-none"
                                    >
                                        {/* Meta - 0deg */}
                                        <motion.div 
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                            className="absolute -top-4 left-1/2 -translate-x-1/2 w-11 h-11 bg-white border border-[#d5a294]/20 rounded-full shadow-lg flex items-center justify-center overflow-hidden p-2"
                                        >
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="w-full h-full object-contain" />
                                        </motion.div>

                                        {/* Slack - 120deg */}
                                        <motion.div 
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                            style={{ left: '93%', top: '75%' }}
                                            className="absolute -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white border border-[#d5a294]/20 rounded-full shadow-lg flex items-center justify-center overflow-hidden p-2"
                                        >
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" alt="Slack" className="w-full h-full object-contain" />
                                        </motion.div>

                                        {/* Zoom - 240deg */}
                                        <motion.div 
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                            style={{ left: '7%', top: '75%' }}
                                            className="absolute -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white border border-[#d5a294]/20 rounded-full shadow-lg flex items-center justify-center overflow-hidden p-2"
                                        >
                                            <img src="https://www.vectorlogo.zone/logos/zoomus/zoomus-icon.svg" alt="Zoom" className="w-full h-full object-contain" />
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </CardContent>
                        </Card>
                        </motion.div>

                        {/* Card 5: Extra Summary */}
                        <motion.div
                            custom={4}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -8, scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                            className="col-span-full lg:col-span-3"
                        >
                        <Card className="relative overflow-hidden group hover:border-primary/50 transition-colors border-primary/20 shadow-lg shadow-primary/5 h-full">
                            <motion.img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=80"
                                alt="فريق عمل متعاون لبناء المشروع"
                                className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
                                animate={{ scale: [1, 1.04, 1] }}
                                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <CardContent className="grid h-full pt-6 sm:grid-cols-2 gap-6 min-h-[250px] items-center">
                                <div className="relative z-10 flex flex-col justify-center space-y-6">
                                    <div className="space-y-3 text-right">
                                        <h2 className="text-3xl font-bold text-foreground">بناء بثقة</h2>
                                        <p className="text-foreground/80 leading-relaxed text-lg">كل خطوة في العمل معنا مصممة لتضمن أن مشروعك ينمو بخطى ثابتة ومدروسة.</p>
                                    </div>
                                </div>
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                                    className="relative h-56 sm:h-full p-4 bg-primary/5 rounded-2xl border border-primary/10 overflow-hidden"
                                >
                                    <svg viewBox="0 0 220 150" className="h-full w-full text-[#d5a294]" fill="none" aria-hidden="true">
                                        <motion.rect x="22" y="30" width="48" height="90" rx="10" stroke="currentColor" className="text-[#d5a294]/70" strokeWidth="2.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.9 }} />
                                        <motion.rect x="86" y="18" width="48" height="102" rx="10" stroke="currentColor" className="text-[#d5a294]/80" strokeWidth="2.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.15 }} />
                                        <motion.rect x="150" y="42" width="48" height="78" rx="10" stroke="currentColor" className="text-[#d5a294]" strokeWidth="2.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.3 }} />
                                        <motion.path d="M42 75H50M42 90H62M106 58H114M106 72H122M170 88H182M170 102H190" stroke="currentColor" className="text-[#d5a294]/70" strokeWidth="2.8" strokeLinecap="round" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} />
                                        <motion.path d="M46 132C72 114 114 112 174 66" stroke="currentColor" className="text-[#d5a294]" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.1, delay: 0.45 }} />
                                        <motion.circle cx="174" cy="66" r="6" stroke="currentColor" className="text-[#d5a294]" strokeWidth="3" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.4, delay: 1 }} />
                                    </svg>
                                </motion.div>
                            </CardContent>
                        </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
