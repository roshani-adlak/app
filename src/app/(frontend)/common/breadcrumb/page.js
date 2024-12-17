'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import PropTypes from 'prop-types';

const NextBreadcrumb = ({
  homeElement = 'Home Pages',
  separator,
  containerClasses = 'ap-breadcrumb-wrap',
  listClasses = 'ap-bredcrumb-link',
  activeClasses = 'active',
  capitalizeLinks = false,
}) => {
  const paths = usePathname() || '/';
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <div>
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href="/">{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`;
          const itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          const itemLink = capitalizeLinks
            ? link.charAt(0).toUpperCase() + link.slice(1)
            : link;

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

// Define PropTypes
NextBreadcrumb.propTypes = {
  homeElement: PropTypes.node.isRequired, // Any React node
  separator: PropTypes.node.isRequired, // Any React node
  containerClasses: PropTypes.string, // CSS class as a string
  listClasses: PropTypes.string, // CSS class as a string
  activeClasses: PropTypes.string, // CSS class as a string
  capitalizeLinks: PropTypes.bool, // Boolean flag
};

export default NextBreadcrumb;
