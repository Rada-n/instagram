import React from "react"
import ContentLoader from "react-content-loader"

export const SkeletonPost = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="31" cy="31" r="15" /> 
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
    <rect x="0" y="60" rx="2" ry="2" width="400" height="400" /> 
    <rect x="68" y="28" rx="2" ry="2" width="140" height="10" />
  </ContentLoader>
)

export const SkeletonPostImage = (props) => (
    <ContentLoader 
    speed={2}
    width={600}
    height={600}
    viewBox="0 0 600 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="600" height="600" /> 
  </ContentLoader>
)
