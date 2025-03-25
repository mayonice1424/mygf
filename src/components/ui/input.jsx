import * as React from "react";
import { motion } from "framer-motion"; // Importing framer-motion

import { cn } from "@/lib/utils";

function InputLogin({ className, type, label, ...props }) {
  return (
    <div className="w-full relative">
      {/* Fokus pada input akan mengubah warna label */}
      <motion.label
        className="absolute font-normal top-1/2 transform z-10 -translate-y-1/2 transition-all duration-300 text-muted-foreground peer-focus:text-blue-500" // Menggunakan peer-focus untuk perubahan warna label
        initial={{ top: "50%", fontSize: "1rem", opacity: 0.8 }}
        animate={{
          top: -5,
          fontSize: "1rem",
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        htmlFor={label}
      >
        {label}
      </motion.label>
      <motion.input
        type={type}
        data-slot="input"
        id={label} // For accessibility, link the label with the input
        className={cn(
          "dark:border-gray-600 hover:border-zinc-400 placeholder:text-muted-foreground selection:bg-primary px-3 mt-4 selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-[#d5e1f811] dark:bg-[#1e2634d5] py-5 text-base shadow-xs transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus:border-blue-400 focus:ring-2 focus:ring-blue-200/40",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className,
          "peer" // Menambahkan peer ke input
        )}
        {...props}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          ease: ["easeIn", "easeOut"],
          stiffness: 300,
          damping: 30,
        }}
      />
    </div>
  );
}

export { InputLogin };
