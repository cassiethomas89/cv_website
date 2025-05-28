import TopBanner from "@/components/TopBanner";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import CVDownload from "@/components/CVDownload";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
  <main className="mainLight">
      <TopBanner/>
      <div id="Main" className="mainCont">
        <div className="hiddenSection topBannerLight"/>
        <Summary/>
        <Skills/>
        <Experience/>
        <CVDownload />
        <ContactForm />
        <div className="footer topBannerLight"></div>
      </div>
  </main>
  );
}