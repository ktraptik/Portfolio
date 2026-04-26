import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import LogoShowcase from './components/LogoShowcase';
import Contact from './components/Contact';
import { profileData } from './data';

function App() {
  return (
    <div className="App">
      <Header name={profileData.name} title={profileData.title} />
      <Hero tagline={profileData.tagline} stats={profileData.snapshot.stats} />
      <Overview overview={profileData.overview} highlights={profileData.keyHighlights} />
      <Experience experiences={profileData.experience} />
      <CaseStudies caseStudies={profileData.caseStudies} />
      <Skills skills={profileData.skills} />
      <LogoShowcase />
      <Contact contact={profileData.contact} />
    </div>
  );
}

export default App;
