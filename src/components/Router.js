import React from 'react'
import { Link } from '@reach/router'
export { Link, Router, useLocation } from '@reach/router'

export const NavLink = props => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          className: isCurrent ? 'active' : ''
        };
      }}
    />
  );