import AreaOfServices from '@/components/AreaOfServices'
import FAQs from '@/components/Faqs'
import Header from '@/components/Header'
import WhyUS from '@/components/WhyUS'
import React from 'react'
import Process from '../_components/Process'

const page = () => {
    return (
        <main className="flex flex-col gap-20">
            <Header cta={true} desc='We provide top-quality residential and commercial roofing services across Florida, ensuring durability and excellence.' title={'Roofing Services In Florida'} />
            <AreaOfServices />
            <Process />
            <WhyUS />
            <FAQs />
        </main>
    )
}

export default page
