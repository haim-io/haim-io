import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Landing from '../sections/Landing'
import About from '../sections/About'
import Team from '../sections/Team'
import Projects from '../sections/Projects'
import Writing from '../sections/Writing'
import Videos from '../sections/Videos'
import Footer from '../components/Footer'

const Home = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Team />
    <Projects />
    <Writing />
    <Videos />
    <Footer />
    <div className="modal-container" />
  </Layout>
)

export default Home
