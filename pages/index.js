import Head from "next/head";
import styles from "../styles/Main.module.css";
import Header from '../src/components/Header'
import SliderContainer from '../src/components/SliderContainer/index'
import WelcomeContainer from '../src/components/WelcomeContainer/index'
import OurServicesContainer from '../src/components/OurServicesContainer/index'
import OurPortfolioContainer from '../src/components/OurPortfolioContainer/index'
import ContactUsContainer from '../src/components/ContactUsContainer.jsx'
import Footer from '../src/components/Footer'

export default function Home() {
	return (
		<>
			<Head>
				<title>LandingPage</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<SliderContainer />
			<WelcomeContainer />
			<OurServicesContainer />
			<OurPortfolioContainer />
			<ContactUsContainer />
			<Footer />
		</>
	);
}
