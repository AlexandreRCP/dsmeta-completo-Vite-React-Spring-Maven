import Header from './assets/components/Header'
import SalesCard from './assets/components/SalesCard'
import NotificationButton from './assets/components/NotificationButton'
import './index.css'

function App() {
  return (
    <>
      <main>
            <section id="sales">
                <div className="dsmeta-container">
                  <Header />
                  <SalesCard />
                  <NotificationButton />
                </div>
        </section>
      </main>             
    </>
  )
}

export default App
