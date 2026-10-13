import { education, profile, projects } from '../data/portfolio';
import { SectionHeading } from './fx';

export default function ResumeSection({ onView }: { onView: () => void }) {
  return <><SectionHeading kicker="The full story" title="Meet Ajay Kumar K" />
    <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
      <ResumeSheet />
      <div className="self-start lg:sticky lg:top-28">
        <p className="font-serif text-3xl italic text-bone">The next chapter starts with a conversation.</p>
        <p className="mt-4 text-sm leading-relaxed text-mist">My education, projects, and career direction, together in one profile.</p>
        <button onClick={onView} className="mt-6 flex min-h-12 w-full items-center justify-center rounded-md bg-bone px-6 font-semibold text-ink">View Profile</button>
        <a href={`mailto:${profile.email}`} className="mt-3 flex min-h-12 w-full items-center justify-center rounded-md border border-white/25 px-6 text-bone">Get in touch</a>
      </div>
    </div></>;
}
export function ResumeSheet() {
 return <article className="rounded-xl bg-ink-2 p-6 ring-1 ring-white/10 sm:p-10">
   <h3 className="font-display text-5xl text-bone">{profile.fullName}</h3>
   <p className="mt-3 text-sm text-crimson-2">{profile.role}</p>
   <p className="mt-3 text-sm text-mist">{profile.location}</p>
   <a className="mt-2 block break-all text-sm text-bone underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a>
   <div className="mt-4 flex gap-5 text-sm text-bone"><a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
   <h4 className="mb-3 mt-8 text-lg font-semibold text-bone">Education</h4>
   {education.map(e=><div key={e.school}><p className="text-bone">{e.school} · {e.degree}</p><p className="mt-2 text-sm text-mist">{e.period}</p></div>)}
   <h4 className="mb-3 mt-8 text-lg font-semibold text-bone">Projects</h4>
   {projects.map(p=><section key={p.id} className="mb-6"><h5 className="font-semibold text-bone">{p.title}</h5><p className="mt-2 text-sm leading-relaxed text-mist">{p.logline}</p><p className="mt-2 text-xs leading-relaxed text-mist">{p.stack.join(' · ')}</p></section>)}
   <h4 className="mb-3 mt-8 text-lg font-semibold text-bone">Career direction</h4>
   <p className="text-sm leading-relaxed text-mist">Working toward AI engineering and forward deployed engineering, with a focus on practical applications and understanding the problems they solve. My learning roadmap covers AI, software development, and deployment.</p>
 </article>;
}
