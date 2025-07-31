import AreaOfServices from '@/components/AreaOfServices'
import FAQs from '@/components/Faqs'
import Header from '@/components/Header'
import WhyUS from '@/components/WhyUS'
import React from 'react'
import Process from '../_components/Process'
import { pages } from '@/data/constants'
import JsonLd from '@/components/JsonLd'
import { JsonLdDataServiceArea } from '@/data/jsonld'

const page = () => {
    return (
        <main className="flex flex-col gap-20">
            <Header cta={true} desc={pages.service_area.seo.description} title={pages.service_area.seo.title} />
            <AreaOfServices />
            <Process />
            <WhyUS />
            <FAQs />
            <JsonLd data={JsonLdDataServiceArea} />
        </main>
    )
}

export default page
