import AreaOfServices from '@/components/AreaOfServices'
import FAQs from '@/components/Faqs'
import Header from '@/components/Header'
import WhyUS from '@/components/WhyUS'
import React from 'react'

import { serviceAreaPage } from '@/data'
import JsonLd from '@/components/JsonLd'
import { JsonLdDataServiceArea } from '@/jsonld'
import Process from '@/app/_components/Process'

const page = () => {
    return (
        <main className="flex flex-col gap-20">
            <Header cta={true} desc={serviceAreaPage.seo.description} title={serviceAreaPage.seo.title}/>
            <AreaOfServices />
            <Process />
            <WhyUS />
            <FAQs />
            <JsonLd data={JsonLdDataServiceArea} />
        </main>
    )
}

export default page
