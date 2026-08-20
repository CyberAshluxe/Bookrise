import SectionHeader from '../components/SectionHeader'
import { Link } from 'react-router-dom'

const videoLibrary = [
  {
    id: 'thriller-1',
    title: 'Midnight Chase',
    description: 'A gripping thriller trailer that builds suspense and delivers a polished book launch preview.',
    src: '/assets/video/video5922558372728546076.mp4',
  },
  {
    id: 'thriller-2',
    title: 'Hidden Evidence',
    description: 'A fast-paced suspense clip designed to captivate readers and amplify mystery-driven storytelling.',
    src: '/assets/video/video5922558372728546077.mp4',
  },
  {
    id: 'thriller-3',
    title: 'No Way Out',
    description: 'A cinematic book teaser built to hook thriller audiences with tension, pacing, and atmosphere.',
    src: '/assets/video/video5922558372728546078.mp4',
  },
  {
    id: 'thriller-4',
    title: 'Dark Confession',
    description: 'A moody thriller story video that highlights character stakes and impending danger.',
    src: '/assets/video/video5922558372728546079.mp4',
  },
  {
    id: 'thriller-5',
    title: 'Final Witness',
    description: 'An intense thriller showcase built for authors who want cinematic visuals and emotional urgency.',
    src: '/assets/video/video5922558372728546080.mp4',
  },
]

export default function Videos() {
  return (
    <div className="pt-20 section-padding bg-ae-bg-primary">
      <div className="container-luxury">
        <SectionHeader
          tag="Video Portfolio"
          title="View All 5 Thriller Videos"
          subtitle="Explore every video in our thriller campaign collection, designed to amplify suspense and engagement for book launches."
        />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 mt-10">
          {videoLibrary.map((video) => (
            <div key={video.id} className="glass-card overflow-hidden rounded-3xl border border-ae-border/20 shadow-sm">
              <video
                className="h-64 w-full object-cover"
                src={video.src}
                controls
                playsInline
              />
              <div className="p-6">
                <h3 className="font-display text-xl text-ae-text-primary mb-3">{video.title}</h3>
                <p className="text-ae-text-secondary text-sm leading-relaxed mb-4">{video.description}</p>
                <div className="inline-flex items-center gap-2 rounded-full border border-ae-border/40 px-3 py-2 text-xs uppercase tracking-[0.2em] text-ae-text-secondary">
                  Thriller Video
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 border border-ae-border text-ae-text-primary font-medium rounded-full hover:border-ae-border-hover hover:bg-ae-bg-secondary transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
