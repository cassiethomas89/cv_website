const Summary = () => {
    return <div id="Summary">
       
        <div className="summarySection">       
            <div className="photo">
                <div style={{height:'1.5em'}}></div>
                <img src="me.jpeg"/>
            </div>
            <div><div><h1>Summary</h1></div> 
                <p>
                    I am a full-stack software engineer with 7 years professional experience building and maintaining full-stack web applications across finance, 
                    research and SaaS platforms. </p>
                    <br/>
                    <p>
                    In my most recent role at Symplectic, I independently led an accessibility audit across our Grant Tracker console, identifying key improvements and 
                    writing documentation that helped shape our internal development standards going forward. 
                    I also took full ownership of upgrading jQuery across multiple of our grant tracker products from v1.12.2 to v3.7.1 – 
                    an effort that involved extensive dependency management, ticket creation and QA coordination. 
                    Throughout my career I have primarily used C#, SQL, Javacript, HTML and CSS, but I am always enthusiastic about any opportunity to learn new skills.
                </p>
            </div>
        </div>
    </div>    
}

export default Summary;