export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Elias</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">UX/UI Designer</span>{" "}
                        <br/>
                        Frontend Developer
                    </h1>
                    <p className="hero--section--description"> 
                        Aspiring UX Design and research student, with knowledge of programming and technologies
                        <br/> Located both in Helsinki and Tampere in Finland
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
        </section>

    )
}
