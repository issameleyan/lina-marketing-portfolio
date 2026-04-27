import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

interface ContactSectionProps {
  title?: string;
  mainMessage?: string;
  contactEmail?: string;
  phoneNumber?: string;
  backgroundImageSrc?: string;
  onSubmit?: (data: any) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = "احجز استشاراتك التسويقية الآن!",
  mainMessage = "يسعدنا تحويل حلم مشروعك إلى واقع 👋",
  contactEmail = "lm7757448@gmail.com",
  phoneNumber = "+966 55 481 0103",
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    projectName: '',
    message: '',
    projectType: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData((prev) => {
      const currentTypes = prev.projectType;
      if (checked) {
        return { ...prev, projectType: [...currentTypes, type] };
      } else {
        return { ...prev, projectType: currentTypes.filter((t) => t !== type) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    console.log("Form submitted:", formData);
    alert("تم إرسال طلبك بنجاح! سنتواصل معك قريباً.");
  };

  const projectTypeOptions = [
    'أريد كتابة محتوى',
    'أريد تسويقًا متكاملًا',
    'أريد استشارة أولية'
  ];

  return (
    <section className="relative w-full bg-background py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Illustration & Title */}
          <div className="flex flex-col items-center lg:items-start space-y-4 order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#3D0026] leading-tight text-center lg:text-right w-full mb-4 whitespace-nowrap">
                {title}
            </h1>
            
            <div className="relative w-full max-w-md animate-float flex justify-center lg:justify-start">
                <img 
                    src="/contact_writing_desk_transparent.png" 
                    alt="Lina Writing Illustration" 
                    className="w-full h-auto object-contain opacity-100 drop-shadow-xl"
                />
                {/* Decorative blobs */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#d5a294]/10 blur-[100px] rounded-full" />
            </div>
            
            <div className="space-y-6 text-center lg:text-right w-full pt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-lg">
                    <a href="https://wa.me/966554810103" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#d5a294] text-white font-bold hover:scale-[1.02] transition-all shadow-lg shadow-[#d5a294]/20 flex-1 whitespace-nowrap">
                        <Phone className="size-5" />
                        <span>تواصل معي عبر الواتساب</span>
                    </a>
                    <a href={`mailto:${contactEmail}`} className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#f7f7f3] border border-[#d5a294]/30 text-[#d5a294] font-bold hover:scale-[1.02] transition-all shadow-lg flex-1 whitespace-nowrap">
                        <Mail className="size-5" />
                        <span>راسلني عبر البريد الإلكتروني</span>
                    </a>
                </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-8 md:p-10 rounded-[3rem] shadow-2xl border border-[#d5a294]/20 relative overflow-hidden">
                {/* Bubble Background Decorations */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d5a294]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#d5a294]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                <h2 className="text-2xl md:text-3xl font-black text-[#3D0026] mb-8">{mainMessage}</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 text-right">
                    <Label htmlFor="name" className="text-sm font-bold text-[#3D0026]/70">الاسم</Label>
                    <Input 
                        id="name" 
                        name="name" 
                        placeholder="اسمح لنا بمعرفة اسمك" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="rounded-2xl border-[#d5a294]/20 focus:border-[#d5a294]"
                    />
                    </div>
                    <div className="space-y-2 text-right">
                    <Label htmlFor="phone" className="text-sm font-bold text-[#3D0026]/70">رقم الجوال</Label>
                    <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="رقم التواصل (واتساب)" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        className="rounded-2xl border-[#d5a294]/20 focus:border-[#d5a294]"
                    />
                    </div>
                </div>

                <div className="space-y-2 text-right">
                    <Label htmlFor="email" className="text-sm font-bold text-[#3D0026]/70">البريد الإلكتروني</Label>
                    <Input 
                        id="email" 
                        name="email" 
                        placeholder="كيف يمكننا الرد عليك؟" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="rounded-2xl border-[#d5a294]/20 focus:border-[#d5a294]"
                    />
                </div>

                <div className="space-y-2 text-right">
                    <Label htmlFor="projectName" className="text-sm font-bold text-[#3D0026]/70">اسم المشروع أو الشركة</Label>
                    <Input 
                    id="projectName" 
                    name="projectName" 
                    placeholder="أخبرنا عن كيانك" 
                    value={formData.projectName} 
                    onChange={handleChange} 
                    className="rounded-2xl border-[#d5a294]/20 focus:border-[#d5a294]"
                    />
                </div>

                <div className="space-y-2 text-right">
                    <Label htmlFor="message" className="text-sm font-bold text-[#3D0026]/70">نبذة قصيرة عن الاحتياج</Label>
                    <Textarea
                    id="message"
                    name="message"
                    placeholder="ما الذي يدور في ذهنك؟"
                    className="min-h-[120px] rounded-2xl border-[#d5a294]/20 focus:border-[#d5a294]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="space-y-4 text-right">
                    <p className="text-sm font-bold text-[#3D0026]/70">نوع الخدمة</p>
                    <div className="flex flex-wrap gap-4 justify-end">
                    {projectTypeOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-2 space-x-reverse bg-[#d5a294]/5 px-4 py-2 rounded-full border border-[#d5a294]/10 hover:border-[#d5a294]/40 transition-colors">
                        <Checkbox
                            id={option.replace(/\s/g, '-').toLowerCase()}
                            checked={formData.projectType.includes(option)}
                            onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                        />
                        <Label htmlFor={option.replace(/\s/g, '-').toLowerCase()} className="text-sm font-bold cursor-pointer">
                            {option}
                        </Label>
                        </div>
                    ))}
                    </div>
                </div>

                <LiquidButton type="submit" variant="primary" size="xl" className="w-full mt-4">
                    إرسال الرسالة
                </LiquidButton>
                </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
