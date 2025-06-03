'use client'

import TopBanner from "@/components/TopBanner";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import CVDownload from "@/components/CVDownload";
import ContactForm from "@/components/ContactForm";
import BottomBanner from "@/components/BottomBanner";
import Certfications from "@/components/Certifications";

export default function Home() {
  return (
  <main className="mainLight">
      <TopBanner/>
      <div id="Main" className="mainCont">
        <div className="hiddenSection lightModeDarkest"/>
        <div className="section lightModeLight"><Summary /></div>
        <div className="section lightModeDark"><Skills /></div>
        <div className="section lightModeLight"><Experience /></div>
        <div className="section lightModeDark"><Certfications /></div>
        <div className="section lightModeLight"><CVDownload /></div>
        <div className="section lightModeDark"><ContactForm /></div>
        <div className="footer lightModeDarkest"><BottomBanner /></div>
      </div>
  </main>
  );
}