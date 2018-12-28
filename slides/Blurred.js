import React from 'react'
import Layout from './Layout'

export default ({ children }) => (
  <div
    style={{
      filter: 'blur(10px)'
    }}>
        <Layout>
            {children}
        </Layout>
  </div>
)