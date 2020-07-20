

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/src/pages/404.js'), universalOptions)
      t_0.template = '__react_static_root__/src/pages/404.js'
      
const t_1 = universal(import('__react_static_root__/src/pages/contact/index.js'), universalOptions)
      t_1.template = '__react_static_root__/src/pages/contact/index.js'
      
const t_2 = universal(import('__react_static_root__/src/pages/index.js'), universalOptions)
      t_2.template = '__react_static_root__/src/pages/index.js'
      
const t_3 = universal(import('__react_static_root__/src/pages/programs/hockey/ice-rental.js'), universalOptions)
      t_3.template = '__react_static_root__/src/pages/programs/hockey/ice-rental.js'
      
const t_4 = universal(import('__react_static_root__/src/pages/programs/hockey/index.js'), universalOptions)
      t_4.template = '__react_static_root__/src/pages/programs/hockey/index.js'
      
const t_5 = universal(import('__react_static_root__/src/pages/programs/hockey/pre-season-skills-and-skating.js'), universalOptions)
      t_5.template = '__react_static_root__/src/pages/programs/hockey/pre-season-skills-and-skating.js'
      
const t_6 = universal(import('__react_static_root__/src/pages/programs/horses/hunter-jumper-shows.js'), universalOptions)
      t_6.template = '__react_static_root__/src/pages/programs/horses/hunter-jumper-shows.js'
      
const t_7 = universal(import('__react_static_root__/src/pages/programs/horses/index.js'), universalOptions)
      t_7.template = '__react_static_root__/src/pages/programs/horses/index.js'
      
const t_8 = universal(import('__react_static_root__/src/pages/programs/horses/riding-lessons.js'), universalOptions)
      t_8.template = '__react_static_root__/src/pages/programs/horses/riding-lessons.js'
      
const t_9 = universal(import('__react_static_root__/src/pages/programs/horses/schooling-ring-rental.js'), universalOptions)
      t_9.template = '__react_static_root__/src/pages/programs/horses/schooling-ring-rental.js'
      
const t_10 = universal(import('__react_static_root__/src/pages/programs/horses/trail-rides.js'), universalOptions)
      t_10.template = '__react_static_root__/src/pages/programs/horses/trail-rides.js'
      
const t_11 = universal(import('__react_static_root__/src/pages/programs/index.js'), universalOptions)
      t_11.template = '__react_static_root__/src/pages/programs/index.js'
      
const t_12 = universal(import('__react_static_root__/src/pages/staff/index.js'), universalOptions)
      t_12.template = '__react_static_root__/src/pages/staff/index.js'
      

// Template Map
export default {
  '__react_static_root__/src/pages/404.js': t_0,
'__react_static_root__/src/pages/contact/index.js': t_1,
'__react_static_root__/src/pages/index.js': t_2,
'__react_static_root__/src/pages/programs/hockey/ice-rental.js': t_3,
'__react_static_root__/src/pages/programs/hockey/index.js': t_4,
'__react_static_root__/src/pages/programs/hockey/pre-season-skills-and-skating.js': t_5,
'__react_static_root__/src/pages/programs/horses/hunter-jumper-shows.js': t_6,
'__react_static_root__/src/pages/programs/horses/index.js': t_7,
'__react_static_root__/src/pages/programs/horses/riding-lessons.js': t_8,
'__react_static_root__/src/pages/programs/horses/schooling-ring-rental.js': t_9,
'__react_static_root__/src/pages/programs/horses/trail-rides.js': t_10,
'__react_static_root__/src/pages/programs/index.js': t_11,
'__react_static_root__/src/pages/staff/index.js': t_12
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/src/pages/404.js"

