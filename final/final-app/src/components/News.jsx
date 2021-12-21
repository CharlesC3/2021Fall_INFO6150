import React from 'react';
import '../CSS/News.css'
import mentalhealth from '../pics/mentalhealth.jpg'
import research from '../pics/research.jpg'
import rainbow from '../pics/Rainbow_flag.jpg'

function News(){
    return(
        <div className='news'>
            <h2>Discover the cutting-edge research of depression</h2>
            <div className='news-pieces'>
                <a href='https://www.nytimes.com/2021/12/07/science/pandemic-adolescents-depression-anxiety.html'>
                    <img src={mentalhealth} alt="school-life"/>
                    <h3>Surgeon General Warns of Youth Mental Health Crisis</h3>
                    <p>The coronavirus pandemic intensified a rise in adolescent depression, anxiety and mental health distress that was underway before the spring of 2020.</p>
                </a>
            </div>
            <div className='news-pieces'>
                <a href="https://newatlas.com/health-wellbeing/white-blood-cells-depression-inflammation-genetic-risk/">
                    <img src={research} alt="cell"/>
                    <h3>New evidence builds on emerging link between depression and inflammation</h3>
                    <p>Furthering understanding into the links between inflammation and depression, a new study has highlighted a fascinating association between white blood cell counts and genetic risk scores for depression.</p>
                </a>
            </div>
            <div className='news-pieces'>
                <a href="https://www.wilx.com/2021/07/09/msu-researchers-find-lgbtq-community-experiences-more-depression-anxiety/">
                    <img src={rainbow} alt="rainbow-flag"/>
                    <h3>MSU Researchers find LGBTQ community experiences more depression and anxiety</h3>
                    <p>Being a part of the LGBTQ community has not only caused anxiety and depression for one Michigander, but it’s been shown to exist among the larger community after an MSU professor researched the mental health disparities among LBGTQ groups.</p>
                </a>
            </div>
        </div>
    );
}

export default News;