import React from 'react'
import {useState} from 'react';
import Accordion from './Accordion'
import '../CSS/Faq.css'

const initialFaqs ={
    'What is depression?':`Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think and how you act. Fortunately, it is also treatable. Depression causes feelings of \\n sadness and/or a loss of interest in activities you once enjoyed. It can lead to a variety of emotional and physical problems and can decrease your ability to function at work and at home.`,
    'Is depresson a rare psychological illness?':`4Depression affects an estimated one in 15 adults (6.7%) in any given year. And one in six people (16.6%) will experience depression at some time in their life. Depression can occur at any time, but on average, first appears during the late teens to mid-20s. Women are more likely than men to experience depression. Some studies show that one-third of women will experience a major depressive episode in their lifetime. There is a high degree of heritability (approximately 40%) when first-degree relatives (parents/children/siblings) have depression.`,
    'Is depression the same as sadness or grief?':`Being sad is not the same as having depression. In grief, painful feelings come in waves, often intermixed with positive memories of the deceased. In major depression, mood and/or interest (pleasure) are decreased for most of two weeks.
    In grief, self-esteem is usually maintained. In major depression, feelings of worthlessness and self-loathing are common.
    In grief, thoughts of death may surface when thinking of or fantasizing about “joining” the deceased loved one. In major depression, thoughts are focused on ending one’s life due to feeling worthless or undeserving of living or being unable to cope with the pain of depression.`,
    'Is depression curable?':`Here’s no cure for depression. Symptoms may go away over time, but the condition won’t. But with care and treatment, patients can reach remission and enjoy a long, healthy life.`
}

function Faq(){
    const [faqs] = useState(initialFaqs);

    return (
        <div className="faqs">
            <h2>More about Depression</h2>
           <Accordion content={faqs}/>
        </div>
    );
}

export default Faq;