import TopBanner from "@/components/TopBanner";
import Summary from "@/components/Summary";

export default function Home() {
  return (
  <main className="mainLight">
      <TopBanner/>
      <div id="Main" className="mainCont">
        <div className="hiddenSection"></div>
        <div className="section sectionOdds" id="Summary">
          <Summary/>
        </div>
        <div className="section sectionEvens skillsSection" id="Skills">
          <h1>Skills</h1>
          <div className="skillsList">
            <div>C#</div>
            <div>SQL</div>
            <div>Javascript</div>
            <div>jQuery</div>
            <div>React</div>
            <div>Typescript</div>
            <div>HTML</div>
            <div>CSS</div>
          </div>
        </div>
        <div className="section sectionOdds" id="Experience">
          <h1>Experience</h1>
          This section has not yet been added
        </div>
        <div className="section sectionEvens sectionCV" id="CV">
          <h1>CV</h1>
          <p>If you would like copy of my CV you can download that here</p>
          <div className="downloadButtons">
            <a className="downloadBtn" href="Cassie_Thomas_CV.pdf" target="_blank" rel="noopener noreferrer" download>
              PDF
            </a>
            <a className="downloadBtn" href="Cassie_Thomas_CV.doc" target="_blank" rel="noopener noreferrer" download>Doc</a>
          </div>
        </div>
        <div className="section sectionOdds contact" id="Contact">
          <h1>Contact Me</h1>
          This section has not yet been added
          {/* <textarea></textarea>
          <br/>
          <button>submit</button>
          <br/>*/}
        </div> 
      </div>
      <div className="footer topBannerLight"></div>
  </main>
  );
}