
import Hero from "./Hero";
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
export default function ProductsPage() {
    return (
        <>
            <Hero />
            <LeftSection imageUrl='/media/kite.png' productName='Kite' productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.' tryDemo='try demo' learnMore='learn more' />
            <RightSection imageUrl='/media/console.png' productName='console' productDescription='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.' learnMore=''/>
            <LeftSection imageUrl='/media/coin.png' productName='Coin' productDescription='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.' tryDemo='Coin' learnMore=''  />
            <RightSection imageUrl='/media/kiteconnect.png' productName='Kite Connect API' productDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.' learnMore='kite connect'/>
             <LeftSection imageUrl='/media/varsity.png' productName='Varsity mobile' productDescription='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.' tryDemo='' learnMore='' />
             <Universe />
        </>
    )
}