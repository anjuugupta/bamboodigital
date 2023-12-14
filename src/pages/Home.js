import React from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { HeroBanner } from '../components/herbanner/HeroBanner'
import SideBar from '../components/sidebar/SideBar'
import Shopping from '../components/shoppingcard/Shopping'
import { Brand } from '../components/brand/Brand'
import {Collectionshopping} from "../components/collectionshopping/Collectionshopping"
import { AutumnCard } from '../components/autumn/AutumnCard'
import VideoPlayer from '../components/vidoplayer/VideoPlayer'
import { Trading } from '../components/tranding/Trading'
import { Whychoose } from '../components/whychoose/Whychoose'


export const Home = () => {
  return (
    <>
    <Header/>
    <SideBar/>
    <HeroBanner/>
    <Shopping/>
    <Brand/>
    <Collectionshopping/>
    <AutumnCard/>
    <VideoPlayer/>
    <Trading/>
    <Whychoose/>
    <Footer/>
    </>
  )
}
