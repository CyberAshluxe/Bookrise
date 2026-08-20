import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

const featuredVideos = [
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
]

export default function VideoHighlightsSection() {
  return (
    <section className="section-padding bg-ae-bg-secondary border-t border-ae-border/10">
      <div className="container-luxury">
        <SectionHeader
          tag="Video Storytelling"
          title="Thriller Videos We Produced for Book Campaigns"
          subtitle="Three recent thriller videos from our portfolio, designed to build suspense, drive engagement, and showcase your story in motion."
        />

        <div className="grid gap-6 lg:grid-cols-3 mb-10">
          {featuredVideos.map((video) => (
            <div key={video.id} className="glass-card overflow-hidden rounded-none border border-ae-border/20 shadow-sm">
              <video
                className="h-56 w-full object-cover"
                src={video.src}
                muted
                playsInline
                loop
                autoPlay
              />
              <div className="p-6">
                <h3 className="font-display text-xl text-ae-text-primary mb-3">{video.title}</h3>
                <p className="text-ae-text-secondary text-sm leading-relaxed mb-4">{video.description}</p>
                <div className="inline-flex items-center gap-2 border-l-2 border-ae-gold pl-3 py-1 text-xs uppercase tracking-[0.2em] text-ae-text-secondary">
                  Thriller Campaign
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/videos"
            className="inline-flex items-center gap-2 px-8 py-4 gold-gradient text-ae-text-inverse font-medium rounded-full hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.02]"
          >
            View All 5 Videos
          </Link>
        </div>
      </div>
    </section>
  )
}
