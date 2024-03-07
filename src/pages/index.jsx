import React from 'react'
import Benefits from '../components/Benefits/Benefits.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Header from '../components/Header/Header.jsx'
import Principal from '../components/Principal/Principal.jsx'
import Team from '../components/Team/Team.jsx'
import Technologies from '../components/Technologies/Technologies.jsx'

export default function Index() {
    return (
        <div>
            <div className="bg-black text-white min-h-screen font-inter">
                <Header />
                <Principal />
                <Benefits />
                <Technologies />
                <Team />
                <Footer />
            </div >
        </div>
    )
}

