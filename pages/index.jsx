/** @jsximport 'theme-ui' */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default function Home ({content}) {

return (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{ content.title }</h1>
    </div>
  </div>
)
}

export function getStaticProps() {
  // get data from CMS

  return {
    props: {
      content: {
        title: 'This is my dope app'
      }
    }
  }
}