import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './index.css'

const AccordianComponent = (props) => {
    const {data, allowZeroExpanded} = props
    return (
        <Accordion allowZeroExpanded = {allowZeroExpanded}>
            {data.map(item => {
            return (
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {item.label}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className = 'dj-text'>
                       {item.value}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            )
             })}
            </Accordion>
    )
}

export default AccordianComponent
