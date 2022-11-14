import Header from './components/Header';
import SalesCard from './components/SalesCard';
import NotificationButton from './components/NotificationButton';
import './index.css';

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

export default App;
