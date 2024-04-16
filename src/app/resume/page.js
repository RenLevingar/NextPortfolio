import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

export default function Home() {
  return (
    <main>
      <Header listItem={"resume"}/>

      <section className='resumeSection'>
        <h1>Experience</h1>

        <div>
          <div>
            <h2>Math Tutor</h2>
            <h3>Mathnasium | September 2023-Present</h3>
          </div>
          <p>Provided tailored tutoring sessions for children spanning from kindergarten through calculus, enhancing their comprehension and proficiency in mathematics.</p>
        </div>

        <div>
          <div>
            <h2>President</h2>
            <h3>Future Business Leaders of America | August 2022 - August 2023</h3>
          </div>
          <p>Helped plan events, meetings, and competitions. Assisted in classroom management.</p>
        </div>

        <div>
          <div>
            <h2>Troop Guide</h2>
            <h3>Scouts of America | July 2022 and December 2022</h3>
          </div>
          <p>Served as a Troop Guide at two separate National Youth Leadership Training Courses. Guided patrols, gave presentations on using effective communication, and helped Scouts learn leadership skills.</p>
        </div>
      </section>

      <section className='resumeSection'>
        <h1>Education</h1>

        <div>
          <div>
            <h2>West-MEC</h2>
            <h3>August 2022 - Present</h3>
          </div>
          <p>This two-year interactive program prepares students for a career as a web designer. The program teaches students how to design and develop software, build apps for phones, tablets, websites, and write and test computer code.</p>
        </div>

        <div>
          <div>
            <h2>Mountain Ridge High School</h2>
            <h3>August 2020 - Present</h3>
          </div>
          <p>GPA 4.12 weighted, 3.67 unweighted</p>
        </div>
      </section>
      
      <section className='skillSection'>
        <h1>Key Skills</h1>

        <div>
          <div>
            <h4>Autodesk</h4>
            <p>Proficient in Autodesk software for two years, showcasing expertise in design.</p>
          </div>

          <div>
            <h4>Coding</h4>
            <p>Skilled in coding languages such as HTML, CSS, and JavaScript, specializing in web design.</p>
          </div>

          <div>
            <h4>Team Setting</h4>
            <p>Experienced in utilizing GitHub and adept at collaborating within team settings.</p>
          </div>
        </div>

      </section>

      <Footer listItem={"resume"}/>
    </main>
  );
}
