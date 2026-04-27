import { cn } from "@/lib/utils";

export function CallToAction() {
    return (
        <div className="max-w-5xl py-16 md:w-full mx-auto flex flex-col items-center justify-center text-center bg-linear-to-b from-[#f28fd6] to-[#e075c2] rounded-[3rem] p-10 text-[#3D0026] shadow-2xl shadow-pink-200/50">
            <div className="flex flex-wrap items-center justify-center p-1 rounded-full bg-white/20 backdrop-blur border border-white/40 text-sm">
                <div className="flex items-center">
                    <img className="size-6 md:size-7 rounded-full border-2 border-white"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
                    <img className="size-6 md:size-7 rounded-full border-2 border-white -translate-x-2"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
                    <img className="size-6 md:size-7 rounded-full border-2 border-white -translate-x-4"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                        alt="userImage3" />
                </div>
                <p className="ml-2 font-bold opacity-80">انضم لأكثر من ١٠٠ مشروع ناجح</p>
            </div>
            <h1 className="text-4xl md:text-5xl md:leading-[60px] font-black max-w-xl mt-5 text-[#3D0026]">
                اجعل مشروعك يتحدث بلغة النجاح اليوم.
            </h1>
            <p className="text-lg mt-4 font-medium opacity-80 max-w-lg">
                نحن هنا لنحول أفكارك إلى محتوى مؤثر واستراتيجيات تنمو فعلياً.
            </p>
        </div>
    );
}
