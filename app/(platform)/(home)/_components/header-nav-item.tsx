import React from 'react';

interface HeaderNavItemProps {
  title: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const HeaderNavItem: React.FC<HeaderNavItemProps> = ({ title, onMouseEnter, onMouseLeave }) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="cursor-pointer hover:text-gray-300">
      {title}
    </div>
  );
};

export default HeaderNavItem;
