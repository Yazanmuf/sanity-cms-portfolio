// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import project from './project'
import blog from './blog'
// import blockContent from './blockContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({

  // We name our schema
  name: 'mySchema',

  // Then proceed to concatenate our our document types (just one, for now)
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    project,
    blog
    // blockContent
  ])
})

