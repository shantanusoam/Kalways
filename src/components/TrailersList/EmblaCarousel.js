import React, { useState, useEffect, useCallback, useRef } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Trailers } from "../../trailer.js";
import "./embla.css";

const EmblaCarousel = ({ slides, options = { loop: true }, id }) => {
  const data = Trailers[id];
  const media = data.subImages;
  const mediaByIndex = (index) => media[index % media.length];
  const autoplay = useRef(
    Autoplay(
      { delay: 900, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );
  function startAutoplay(lol) {
    const delayInMilliseconds = 999;
    if (lol) {
      emblaApi.scrollNext();
      setTimeout(function () {
        //your code to be executed after 1 second
        emblaApi.scrollNext();
      }, delayInMilliseconds);
    }
  }
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  // const scrollNext = useCallback(() => {
  //   if (!emblaApi) return;
  //   emblaApi.scrollNext();
  //   autoplay.current.reset();
  // }, [emblaApi]);

  // const scrollPrev = useCallback(() => {
  //   if (!emblaApi) return;
  //   emblaApi.scrollPrev();
  //   autoplay.current.reset();
  // }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    // setPrevBtnEnabled(emblaApi.canScrollPrev());
    // setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div
      className="embla "
      onMouseEnter={() => startAutoplay(true)}
      onMouseLeave={() => startAutoplay(false)}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <img
                  className="rounded-t-xl object-cover h-96 w-full"
                  src={mediaByIndex(index)}
                  alt="Trailers"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
