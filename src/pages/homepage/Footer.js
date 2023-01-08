import { SocialIcon } from 'react-social-icons';

const Footer = () => {



  return(
    <div className="bg-black p-24  text-white">
      <div className="container flex gap-10 flex-col xl:flex-row">
        <div className="flex flex-col w-60 gap-6">
          <h1 className="text-xl font-squidgy text-slate-800 select-none">Prototype</h1>
          <p className="text-base font-medium mt-4 pr-8">The easy way to create stunning videos, edit 'em, add subtitles and grow your audience.</p>
          <div className="flex gap-3 justify-center items-center">
            <SocialIcon url="https://linkedin.com/" target="_blank" network="linkedin"/>
            <SocialIcon url="https://linkedin.com/" target="_blank" network="facebook"/>
            <SocialIcon url="https://linkedin.com/" target="_blank" network="twitter"/>
            <SocialIcon url="https://linkedin.com/" target="_blank" network="youtube"/>
          </div>
          <p className="text-slate-500 font-thin">©Copyright 2022 Prototype</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20 ">
          <div className="flex flex-col text-xs font-semibold">
            <a href="#" className="text-white text-base font-semibold pb-5">Tools</a>
            <a href="#" className="text-slate-400 py-2">Video Editor</a>
            <a href="#" className="text-slate-400 py-2">Subtitles</a>
            <a href="#" className="text-slate-400 py-2">Screen Recorder</a>
            <a href="#" className="text-slate-400 py-2">Video Compressor</a>
            <a href="#" className="text-slate-400 py-2">Podcast Recording Software</a>
            <a href="#" className="text-slate-400 py-2">All Tools</a>
          </div>
          <div className="flex flex-col text-xs font-semibold">
            <a href="#" className="text-white text-base font-semibold pb-5">Create</a>
            <a href="#" className="text-slate-400 py-2">Social Media Videos</a>
            <a href="#" className="text-slate-400 py-2">Business Videos</a>
            <a href="#" className="text-slate-400 py-2">Promo Videos</a>
            <a href="#" className="text-slate-400 py-2">All Create</a>
          </div>
          <div className="flex flex-col text-xs font-semibold">
            <a href="#" className="text-white text-base font-semibold pb-5">Product</a>
            <a href="#" className="text-slate-400 py-2">Pricing</a>
            <a href="#" className="text-slate-400 py-2">Enterprise</a>
          </div><div className="flex flex-col text-xs font-semibold">
            <a href="#" className="text-white text-base font-semibold pb-5">Resources</a>
            <a href="#" className="text-slate-400 py-2">Prototype Blog</a>
            <a href="#" className="text-slate-400 py-2">Youtube Guides</a>
            <a href="#" className="text-slate-400 py-2">Tiktok Guide</a>
            <a href="#" className="text-slate-400 py-2">All Guides</a>
          </div><div className="flex flex-col text-xs font-semibold">
            <a href="#" className="text-white text-base font-semibold pb-5">Tools</a>
            <a href="#" className="text-slate-400 py-2">Video Editor</a>
            <a href="#" className="text-slate-400 py-2">Subtitles</a>
            <a href="#" className="text-slate-400 py-2">Screen Recorder</a>
            <a href="#" className="text-slate-400 py-2">Video Compressor</a>
            <a href="#" className="text-slate-400 py-2">Podcast Recording Software</a>
            <a href="#" className="text-slate-400 py-2">All Tools</a>
          </div>
        </div>
      </div>
      <div className="">

      </div>
    </div>
  )
}

export default Footer;