import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsWall from './components/NewsWall';
import Features from './components/Features';
import Plans from './components/Plans';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [selectedPlan, setSelectedPlan] = React.useState(null);

    const handleSelectPlan = (planName) => {
        setSelectedPlan(planName);
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="App">
            <NewsWall />
            <Header />
            <main>
                <Hero />
                <Features />
                <Plans onSelectPlan={handleSelectPlan} />
                <Gallery />
                <Contact selectedPlan={selectedPlan} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
