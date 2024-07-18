import React from 'react'
import Hero from '../../Action/hero'
import { featuresData } from '../../Data/data'
import Feature from '../../Action/feature'

const Home = () => {
    return (
        <main>
            <Hero />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {featuresData.map((feature, index) => {
                    return (
                        <Feature
                            key={index}
                            src={feature.src}
                            title={feature.title}
                            desc={feature.desc}
                        />
                    )
                })}
            </section>
        </main>
    )
}


export default Home