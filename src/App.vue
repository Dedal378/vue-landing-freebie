<template>
  <div id="app">
    <Header />
    <main>
      <BigSlider />
      <Customers />
      <PlanAndManage />
      <Features />
      <Stats />
      <Blog />
      <Quotes />
      <Faq />
      <GetStarted />
      <Newsletter />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import BigSlider from './components/BigSlider'
import Customers from './components/Customers'
import Blog from './components/Blog'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import GetStarted from './components/GetStarted'
import PlanAndManage from './components/PlanAndManage'
import Quotes from './components/Quotes'
import Stats from './components/Stats'

export default {
  name: 'App',
  components: {
    Header, BigSlider, Customers, Blog, Faq, Features, Footer, Newsletter, PlanAndManage, Quotes, Stats, GetStarted
  }
}
</script>

<style lang="scss">

</style>
