const CVDownload = () => {
    return  <div className="section sectionEvens sectionCV" id="CV">
          <h1>CV</h1>
          <p>If you would like copy of my CV you can download that here</p>
          <div className="downloadButtons">
            <a className="downloadBtn" href="Cassie_Thomas_CV.pdf" target="_blank" rel="noopener noreferrer" download>
              PDF
            </a>
            <a className="downloadBtn" href="Cassie_Thomas_CV.doc" target="_blank" rel="noopener noreferrer" download>Doc</a>
          </div>
        </div>
}

export default CVDownload;