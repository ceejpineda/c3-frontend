'use client'
import Link from "next/link"
import Button from '@mui/material/Button';
import Header from "../components/header";
import './Page.css'



export default function Component() {
  const backgroundImage = "https://media.discordapp.net/attachments/1182487847278747658/1182766054481612882/Screenshot_2023-12-05_225613.png?ex=6585e3ba&is=65736eba&hm=976317f4ae566700b366be6e6a496a101c47616900838218a52e3f9645f1c64f&=&format=webp&quality=lossless"; // replace with your image URL

  return (
    <div className="flex flex-col">
     <Header></Header>
     <section className="hero relative flex justify-center items-center h-[80vh] text-center">
        <div className="hero-background" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}></div>
        <h1 className="text-6xl font-bold text-white z-10">PLACEHOLDER-TEXT</h1>
      </section>
    </div>
  )
}