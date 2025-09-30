
import { useState, useEffect } from "react";
import { Fragment } from "react";
import { projects } from "@/lib/data";
import { ExternalLink, Lock } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import AnimatedText from "./ui/AnimatedText";

const Portfolio = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  // Track current image index for each project
  const [carouselIndexes, setCarouselIndexes] = useState(projects.map(() => 0));

  // Auto-advance carousel every 5 seconds for open project
  useEffect(() => {
    if (openIndex === null) return;
    const images = projects[openIndex].images || [];
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCarouselIndexes((prev) => {
        const next = [...prev];
        next[openIndex] = (next[openIndex] + 1) % images.length;
        return next;
      });
  }, 10000);
    return () => clearInterval(interval);
  }, [openIndex, projects]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          title="My Projects"
          subtitle="A selection of my recent work and personal projects"
        />
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={project.title} className="border rounded-xl bg-white dark:bg-[#18181b] shadow-lg transition-all duration-200">
              <button
                className={`w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none hover:bg-gray-100 dark:hover:bg-[#23232a] rounded-xl transition-colors duration-150 ${openIndex === index ? 'bg-gray-100 dark:bg-[#23232a]' : ''}`}
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-xl text-blue-600 dark:text-blue-400">{project.title}</span>
                <span className={`transform transition-transform text-2xl ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 dark:text-gray-300" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                aria-hidden={openIndex !== index}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="flex flex-col gap-6 items-center">
                    <div className="w-full flex justify-center overflow-visible">
                      <div className="relative group flex items-center justify-center hover:cursor-pointer" style={{ width: '100%', maxWidth: '900px', height: '350px' }}>
                        {project.images && project.images.length > 0 ? (
                          <>
                            {/* Left Arrow */}
                            <button
                              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-gray-900 bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                setCarouselIndexes((prev) => {
                                  const next = [...prev];
                                  next[index] = (next[index] - 1 + project.images.length) % project.images.length;
                                  return next;
                                });
                              }}
                              aria-label="Previous image"
                            >
                              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                            </button>
                            {/* Right Arrow */}
                            <button
                              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-gray-900 bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                setCarouselIndexes((prev) => {
                                  const next = [...prev];
                                  next[index] = (next[index] + 1) % project.images.length;
                                  return next;
                                });
                              }}
                              aria-label="Next image"
                            >
                              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                            </button>
                            {/* Images */}
                            {project.images.map((img, imgIdx) => {
                              // Calculate position: -1 = left, 0 = center, 1 = right
                              const current = carouselIndexes[index];
                              let pos = imgIdx - current;
                              if (pos < -1) pos += project.images.length;
                              if (pos > 1) pos -= project.images.length;
                              let style = "absolute top-0 transition-all duration-500";
                              let extra = "";
                              if (pos === 0) {
                                style += " left-1/2 -translate-x-1/2 z-20";
                                extra = "scale-100 opacity-100 shadow-xl animate-slideInRight";
                              } else if (pos === -1) {
                                style += " left-0 z-10";
                                extra = "scale-90 opacity-60 blur-sm";
                              } else if (pos === 1) {
                                style += " right-0 z-10";
                                extra = "scale-90 opacity-60 blur-sm";
                              } else {
                                style += " opacity-0 pointer-events-none";
                              }
                              return (
                                <img
                                  key={img.src}
                                  src={img.src}
                                  alt={img.caption || project.title}
                                  className={`h-full object-cover rounded-lg bg-gray-100 dark:bg-gray-900 mx-auto cursor-zoom-in ${style} ${extra}`}
                                  style={{ aspectRatio: '16/9', width: pos === 0 ? '100%' : '70%' }}
                                  onClick={() => setZoomedImage(img.src)}
                                />
                              );
                            })}
                            {/* Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {project.images.map((_, dotIdx) => (
                                <span
                                  key={dotIdx}
                                  className={`w-3 h-3 rounded-full transition-all duration-300 ${carouselIndexes[index] === dotIdx ? 'bg-blue-500 scale-110 shadow' : 'bg-gray-300 dark:bg-gray-700 opacity-60'}`}
                                />
                              ))}
                            </div>
                            <span className="absolute bottom-2 right-2 bg-black bg-opacity-20 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Click to zoom</span>
                          </>
                        ) : (
                          <img
                            src={project.image?.startsWith('/') ? project.image : `/${project.image}`}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-lg bg-gray-100 dark:bg-gray-900 shadow-md mx-auto transition-transform duration-300 group-hover:scale-110 cursor-zoom-in"
                            style={{ aspectRatio: '16/9' }}
                            onClick={() => setZoomedImage(project.image?.startsWith('/') ? project.image : `/${project.image}`)}
                          />
                        )}
                      </div>
                    </div>
      {/* Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 animate-fadeIn"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative group flex flex-col items-center justify-center w-full h-full hover:cursor-pointer" style={{ maxWidth: '80vw', maxHeight: '80vh' }} onClick={e => e.stopPropagation()}>
            {/* Find which project and image index is zoomed */}
            {(() => {
              const projectIdx = openIndex;
              const images = (projectIdx !== null && projects[projectIdx] && Array.isArray(projects[projectIdx].images)) ? projects[projectIdx].images : [];
              const imgIdx = images.length > 0 ? images.findIndex(img => img.src === zoomedImage) : -1;
              if (images.length === 0 || imgIdx === -1) {
                return (
                  <img
                    src={zoomedImage}
                    alt="Zoomed project"
                    className="max-w-4xl max-h-[80vh] rounded-lg shadow-2xl border-4 border-white animate-zoomIn"
                    style={{ objectFit: 'contain' }}
                  />
                );
              }
              return (
                <>
                  {/* Left Arrow */}
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-gray-900 bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={e => {
                      e.stopPropagation();
                      const prevIdx = (imgIdx - 1 + images.length) % images.length;
                      setZoomedImage(images[prevIdx].src);
                    }}
                    aria-label="Previous image"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                  </button>
                  {/* Right Arrow */}
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-gray-900 bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={e => {
                      e.stopPropagation();
                      const nextIdx = (imgIdx + 1) % images.length;
                      setZoomedImage(images[nextIdx].src);
                    }}
                    aria-label="Next image"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </button>
                  {/* Image */}
                  <img
                    src={zoomedImage}
                    alt="Zoomed project"
                    className="max-w-4xl max-h-[80vh] rounded-lg shadow-2xl border-4 border-white animate-zoomIn"
                    style={{ objectFit: 'contain' }}
                  />
                  {/* Caption in Modal - only if exists */}
                  {images[imgIdx]?.caption && (
                    <div className="mt-2 text-center text-xs font-normal text-gray-200 bg-black bg-opacity-40 px-3 py-1 rounded w-fit max-w-[70vw]">
                      {images[imgIdx].caption}
                    </div>
                  )}
                  {/* Dots */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {images.map((_, dotIdx) => (
                      <span
                        key={dotIdx}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${imgIdx === dotIdx ? 'bg-blue-500 scale-110 shadow' : 'bg-gray-300 dark:bg-gray-700 opacity-60'}`}
                      />
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

                    <div className="w-full">
                      {/* Image Caption - smaller font */}
                      {project.images && Array.isArray(project.images) && project.images.length > 0 && (
                        <div className="text-center text-xs font-normal text-gray-600 dark:text-gray-400 mb-2 min-h-[1.2em]">
                          {project.images[carouselIndexes[index]]?.caption}
                        </div>
                      )}
                      <p className="text-gray-800 dark:text-gray-200 text-lg mb-4 text-center">{project.description}</p>
                      <div className="flex flex-wrap gap-3 mb-4 justify-center">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-semibold shadow"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-center">
                        {project.title === "Talk-twah: your personal AI voice coaching assistant" ? (
                          <button
                            onClick={() => window.open("https://www.canva.com/design/DAGm858Ri6c/Xd0kVVvx3ZpCo1QPfJC-Bg/view?utm_content=DAGm858Ri6c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2b0b2d6a35", "_blank")}
                            className="button-transition inline-flex items-center text-base font-semibold px-5 py-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 shadow-md hover:scale-105 transition-all mt-2"
                          >
                            View project
                            <ExternalLink size={18} className="ml-2" />
                          </button>
                        ) : project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-transition inline-flex items-center text-base font-semibold px-5 py-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 shadow-md hover:scale-105 transition-all"
                          >
                            View Project
                            <ExternalLink size={18} className="ml-2" />
                          </a>
                        ) : (
                          <span className="inline-flex items-center text-base font-semibold px-5 py-2 rounded-full bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-300 opacity-80 cursor-not-allowed select-none">
                            <Lock size={18} className="mr-2" /> Confidential
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
