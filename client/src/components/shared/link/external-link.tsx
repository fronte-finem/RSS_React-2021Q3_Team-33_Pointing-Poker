import React from 'react';
import classes from './external-link.module.css';

interface LinkProps {
  url: string;
}

export const ExternalLink: React.FC<LinkProps> = ({ url, children }) => {
  return (
    <a
      className={classes.link}
      href={url}
      target="_blank"
      rel="noopener noreferrer">
      {children}
    </a>
  );
};
