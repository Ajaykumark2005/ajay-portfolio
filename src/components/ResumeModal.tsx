import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollLock } from '../hooks/smoothScroll';
import { ResumeSheet } from './ResumeViewer';

export default function ResumeModal({ onClose }: { onClose: () => void }) {
 useScrollLock(true);
 const dialog = useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const previous=document.activeElement as HTMLElement | null;
  dialog.current?.querySelector<HTMLButtonElement>('button')?.focus();
  const key=(e:KeyboardEvent)=>{
   if(e.key==='Escape') onClose();
   if(e.key==='Tab') {
    const items=dialog.current?.querySelectorAll<HTMLElement>('a[href],button');
    if(!items?.length)return;
    const first=items[0],last=items[items.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
   }
  };
  window.addEventListener('keydown',key);
  return()=>{window.removeEventListener('keydown',key);previous?.focus();};
 },[onClose]);
 return <motion.div ref={dialog} role="dialog" aria-modal="true" aria-label="Ajay Kumar K profile" className="fixed inset-0 z-[140] overflow-y-auto bg-black/95 p-4 sm:p-10" data-lenis-prevent initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
 <div className="mx-auto max-w-3xl"><div className="mb-4 flex justify-end"><button onClick={onClose} className="min-h-11 rounded-md border border-white/30 px-5 text-bone">Close profile ✕</button></div><ResumeSheet /></div>
 </motion.div>;
}
