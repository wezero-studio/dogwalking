import React from 'react';
import Image from 'next/image';

const ChannelsGrid = () => {
  const channels = [
    {
      title: 'Email',
      description: 'Catch violations at draft time, not in supervision queues weeks later',
      icons: [
        'https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219/698661625902b7042a20ca8a_gmail.svg',
        'https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219/6986616231c5139045391e92_outlook.svg'
      ],
      gridPos: 'col-span-1 row-span-1'
    },
    {
      title: 'Social',
      description: 'Check LinkedIn posts before publish',
      icons: [
        'https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219/698661623838f73fdd27e8d0_linkedin.svg'
      ],
      gridPos: 'col-span-1 row-span-1'
    },
    {
      title: 'Web',
      description: 'Check fund pages and campaign content in the browser',
      icons: [
        'https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219/698661625537549887707f45_firefox.svg',
        'https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219/69866162591605f63567793d_edge.svg',
        'https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219/69866162b7ae4d00898495a1_chrome.svg'
      ],
      gridPos: 'col-span-1 row-span-1'
    },
    {
      title: 'Documents',
      description: 'Review decks, letters, and fact sheets',
      icons: [
        'https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219/6986616233ce10ce85be66be_word.svg',
        'https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219/698661614051e7fec7472855_ppt.svg',
        'https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219/69866161e71f46487e47dfa9_docs.svg',
        'https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219/69866161e0f065a7f920da68_slides.svg'
      ],
      gridPos: 'col-span-1 row-span-1'
    },
    {
      title: 'AI content',
      description: 'Apply your rules to ChatGPT and Copilot output before it reaches clients',
      icons: [
        'https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219/69866161f365313a36f6d62f_claude.svg',
        'https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219/69866161829e24699564177b_perplexity.svg',
        'https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219/69866161ee34b6dbb064c57b_chatgpt.svg',
        'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/6986abacddc292574d40788f_copilot-color-12.avif'
      ],
      gridPos: 'col-span-1 row-span-1'
    },
    {
      title: 'Email',
      description: 'Catch violations at draft time, not in supervision queues weeks later',
      icons: [
        'https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219/698661625902b7042a20ca8a_gmail.svg',
        'https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219/6986616231c5139045391e92_outlook.svg'
      ],
      gridPos: 'col-span-1 row-span-1'
    }
  ];

  return (
    <section className="bg-[#F5F5F5] py-[120px] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side Content */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center h-full min-h-[400px]">
            <h2 className="text-[56px] leading-[1.1] font-normal tracking-[-0.01em] text-[#1A1A1A] mb-8 max-w-[450px]">
              Every Channel. Every Person. Enforced.
            </h2>
            <p className="text-[20px] leading-[1.5] text-[#7D7D7D] mb-10 max-w-[420px]">
              Your whole firm communicates with confidence. Issues get fixed at the source. Compliance focuses on what matters.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2.5 bg-white border border-[#E6E6E6] rounded-[4px] text-[14px] font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                Workflow
              </button>
              <button className="px-6 py-2.5 bg-white border border-[#E6E6E6] rounded-[4px] text-[14px] font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                Team
              </button>
              <button className="px-6 py-2.5 bg-white border border-[#E6E6E6] rounded-[4px] text-[14px] font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                Industry
              </button>
            </div>
          </div>

          {/* Right Side Grid */}
          <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {channels.map((channel, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[12px] p-8 border border-[#E6E6E6] shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col"
              >
                <div className="flex gap-4 mb-6">
                  {channel.icons.map((icon, iconIdx) => (
                    <div key={iconIdx} className="w-8 h-8 relative flex items-center justify-center bg-white rounded-md p-1 shadow-sm border border-neutral-100">
                      <Image
                        src={icon}
                        alt=""
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
                <h3 className="text-[28px] font-medium text-[#1A1A1A] mb-3 leading-[1.3]">
                  {channel.title}
                </h3>
                <p className="text-[16px] leading-[1.5] text-[#7D7D7D]">
                  {channel.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelsGrid;