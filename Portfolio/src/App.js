import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';

class App extends Component {
  render() {

    const person = {
      avatar: 'https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/11/5/screenshot-2023-11-05-at-090357-16991498959581185862917.png',
      name: 'Ngoc Huyen',
      profession: 'Business Analyst',
      bio: '❤ Im passionate about leveraging business analysis to drive innovation and success. Connect with me on LinkedIn for insights, discussions, and opportunities. Feel free to reach out via email.',
      address: 'Ho Chi Minh, VietNam.',
      social: [
        {name: 'facebook', url: 'https://facebook.com/oscarbarajastavares'},
        {name: 'twitter', url: 'https://twitter.com/gndx'},
        {name: 'github', url: 'https://github.com/gndx'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/oscarbarajas/'}
      ],
      experience: [
        {jobTitle: 'FrontEnd', company: 'CityDrive', startDate: 'Jan 2020', endDate: 'Present', jobDescription: 'Experienced with DevOps and Continuous Integration and Delivery Practice'},
        {jobTitle: 'Business Analyst', company: 'DragonsDev', startDate: 'September 2021', endDate: 'Jan 2023', jobDescription: 'Excellent analytical skills to analyze documents, data, user surveys, and workflows, which will deliver problem-solving solutions, as must-haves.'},
      ],
      education: [
        {degree: 'Management Information Systems (MIS)', institution: 'UCLA', startDate: 'Jan 2016', endDate: 'Jan 2017', description: 'MIS programs emphasize the intersection of business and technology. Graduates gain skills in information systems, data analysis, and process optimization—critical for business analysts.'},
        {degree: 'Project Management Institute', institution: 'Harvard', startDate: 'Jan 2018', endDate: 'Decenber 2019', description: 'The PMP certification is globally recognized and demonstrates that a project manager possesses the knowledge and skills needed to successfully lead projects.'},
      ],
      certificate: [
        {name: 'Business Analysis Professional', institution: 'Platzi', date: 'Jan 2015', description: 'BAP is one of the most recognized certifications for business analysts. It demonstrates advanced skills in business analysis and experience in the field.' },
        {name: 'Agile Analysis Certification (AAC)', institution: 'Udemy', date: 'Jan 2016', description: 'Focuses on business analysis within agile environments, certifying individuals who understand and apply agile principles in their work.' }
      ],
      skills: [ 
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'PHP', percentage: '50%'}
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;