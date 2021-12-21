import '../CSS/About.css'
import building from '../pics/building.jpg'

function About(){
    return(
        <div className="entry-content">
          <h1>About the Survive Depression</h1>
          <p>To support the growth of depression care services in the United States of America through education, systems change, and advocacy.</p>
          <div className="goal">
              <div className="goal-area">
                  <div className="goal-content">
                      <p>
                          <strong>Advance the care of United States patients and families</strong>
                          &nbsp; through the growth of generalist and specialist depression care services in all health care settings.
                      </p>
                      <p>
                          <strong>Advance the knowledge and skills of all health professionals</strong>
                          &nbsp; providing a path of care for all people seeking help.
                      </p>
                      <p>
                          <strong>Advocate for improved Depression care services</strong>
                          &nbsp; through changes in health care policy, regulations and legislation.
                      </p>
                  </div>
                  <div className="about-image">
                      <img src={building}/>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default About;