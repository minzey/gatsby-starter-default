import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardItem from "../components/card"

import JSONData from "../../content/My-JSON-Content.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    
    <div class="wrapper">
      <div class="cards">

      {JSONData.content.map((data, index) => {
        return <CardItem brandName={data.brand_name} logoImage={data.logo_img} logoStory={data.meaning}></CardItem>
      })}

      </div>
    </div>

  </Layout>
)

export default IndexPage
