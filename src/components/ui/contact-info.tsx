import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
    return (
        <div className="max-w-5xl w-full mx-auto p-10 text-foreground">
            <div className="text-center mb-12">
                <span className="px-4 py-1.5 text-xs font-bold border border-[#f28fd6] rounded-full text-[#f28fd6] uppercase tracking-widest">تواصل معنا</span>
                <h1 className="text-4xl md:text-5xl font-black mt-6">
                    يسعدنا سماع صوتك.
                </h1>
                <p className="mt-4 text-lg text-foreground/70">
                    أو تواصل معنا مباشرة عبر 
                    <a href="mailto:lm7757448@gmail.com" className="text-[#f28fd6] hover:underline font-bold mr-2">lm7757448@gmail.com</a>
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 mt-16 text-center">
                <div className="flex flex-col items-center group">
                    <div className="bg-[#f28fd6]/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <Mail className="text-[#f28fd6] size-8" />
                    </div>
                    <p className="text-xl font-black mt-4">الدعم عبر البريد</p>
                    <p className="text-foreground/60 mt-1 mb-4 font-medium">فريقنا جاهز للرد على استفساراتكم.</p>
                    <a href="mailto:lm7757448@gmail.com" className="text-[#f28fd6] font-bold hover:underline">
                        lm7757448@gmail.com
                    </a>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="bg-[#f28fd6]/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="text-[#f28fd6] size-8" />
                    </div>
                    <p className="text-xl font-black mt-4">موقعنا</p>
                    <p className="text-foreground/60 mt-1 mb-4 font-medium">تفضل بزيارتنا في مقرنا.</p>
                    <span className="text-[#f28fd6] font-bold">
                        المملكة العربية السعودية، الرياض
                    </span>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="bg-[#f28fd6]/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <Phone className="text-[#f28fd6] size-8" />
                    </div>
                    <p className="text-xl font-black mt-4">اتصل بنا مباشرة</p>
                    <p className="text-foreground/60 mt-1 mb-4 font-medium">متاحون خلال ساعات العمل.</p>
                    <span className="text-[#f28fd6] font-bold" dir="ltr">
                        (+966) 5XX XXX XXX
                    </span>
                </div>
            </div>
        </div>
    );
}
