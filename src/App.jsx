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
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <NewsWall />
                <Features />
                <Plans />
                <Gallery />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
