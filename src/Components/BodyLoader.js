import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={600}
    height={300}
    viewBox="0 0 600 300"
    backgroundColor="#f5f5f5"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="600" height="51" /> 
    <rect x="0" y="75" rx="0" ry="0" width="600" height="263" />
  </ContentLoader>
)

export default MyLoader