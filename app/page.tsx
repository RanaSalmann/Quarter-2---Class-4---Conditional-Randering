import Image from 'next/image'

import Button from "./components/button/button"
import Card from "@/app/components/button/card/card"
import Compo from "@/app/components/compo"



export default function Home() {
    return (
        <div>
            <h1><center>WELCOME TO HOME PAGE / WE ARE USING PROPS / CARDS / IMPORTING EXPORTING CONCEPT</center></h1>
            
            <Button heading="Button - SAMSUNG S8 ULTRA - props Call" 
            description="The Samsung Galaxy S8 and Samsung Galaxy S8+ are Android smartphones
          produced by Samsung Electronics as the eighth generation of the
          Samsung Galaxy S series." /> 
            
            <Card showTag={true} isHeading={true} heading="CARD - UNITED BANK LTD - props Call" 
            isDescription={true} description="United Bank Limited is a Pakistani multinational commercial bank which
            is based in Karachi, Pakistan. For the year 2020, UBL was designated
            domestic systemically important bank by the State Bank of Pakistan." tag="Custom" />
            
            <Compo heading="COMPONENT - QUALCOMM - props Call" 
            description="Qualcomm Snapdragon 8 Gen 2 is an 8-core chipset with Adreno 740
            graphics and 4-nanometer process technology." />
            
            
        </div>
    )
}
//we can hide whole card by this above conditional randering
// {5==10 &&
//     <Button heading="Button - SAMSUNG S8 ULTRA - props Call" 
//     description="The Samsung Galaxy S8 and Samsung Galaxy S8+ are Android smartphones
//   produced by Samsung Electronics as the eighth generation of the
//   Samsung Galaxy S series." /> }