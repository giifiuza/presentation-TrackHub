
import Benefits from './components/Benefits/Benefits.jsx'
import Button from './components/ButtonModal/Button.jsx'
import CampoModal from './components/CampoModal/CampoModal.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Principal from './components/Principal/Principal.jsx'
import Team from './components/Team/Team.jsx'
import Technologies from './components/Technologies/Technologies.jsx'

function App() {

  return (
    <div className="relavtive bg-black text-white min-h-screen font-inter">
      {/* <CampoModal title={"Nome"}/> */}
      <Header />
      <div className='.mt-[130px]'>

        <Principal />
        <Benefits />
        <Technologies />
        <Team />
        <Footer />
      </div>

      {/* <Button color={'bg-[#9E2896]'} title={"Adicionar"} colorHover={'hover:bg-[#6E0667]'}/> */}
    </div>
  )
}

export default App
