import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { socialMedia } from "../constants"
import { footerLinks } from "../constants"


const footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
          <img src={footerLogo}
          width={140}
          height={46}
          /></a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get rewards</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
             <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-nornmal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  key = {link.name}>
                    
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
             </div> 
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat curson-pointer  ">
          <img src={copyrightSign}
          alt="copyright sign"
          width={20}
          height={20}
          className="rounded-full m-0"/>
          <p>Copyright. All rights reserved.</p>
        </div>
        <div>
          <p className="font-montserrat cursor-pointer">terms & conditions</p>
        </div>
      </div>
    </footer>
    
  )
}

export default footer