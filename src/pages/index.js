import React from 'react';

import Home from '../components/home/home';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';
import {Helmet} from "react-helmet";

const IndexPage = () => (
    <>
    <Helmet
        script={[{
            type: 'text/javascript',
            innerHTML: '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(89221526, "init", {clickmap:true,trackLinks:true,accurateTrackBounce:true});'
        }]}>


    </Helmet>
  <Layout>
    <SEO title="Руслан Черкес — мошенник, кидала и обманщик" />
    <Home />
  </Layout>
        </>
);

export default IndexPage;
