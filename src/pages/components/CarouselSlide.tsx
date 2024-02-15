import { carousel1, carousel2, carousel3 } from "@/data/dummy";
import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function CarouselSlide() {
  return (
    <Carousel className='w-full h-full rounded-2xl shadow-lg overflow-hidden'>
      <div className='relative w-full h-full rounded-2xl overflow-hidden'>
        <Image src={carousel1} alt='...' layout='fill' objectFit='cover' />
      </div>
      <div className='relative w-full h-full rounded-2xl overflow-hidden'>
        <Image src={carousel2} alt='...' layout='fill' objectFit='cover' />
      </div>
      <div className='relative w-full h-full rounded-2xl overflow-hidden'>
        <Image src={carousel3} alt='...' layout='fill' objectFit='cover' />
      </div>
    </Carousel>
  );
}
