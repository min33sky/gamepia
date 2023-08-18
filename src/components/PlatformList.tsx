'use client';

import { PLATFORM } from '@/types/game';
import React from 'react';

import { FaPlaystation, FaXbox, FaWindows, FaLinux } from 'react-icons/fa';

interface PlatformListProps {
  platforms: PLATFORM[];
}

/**
 * PlatformList component
 */
export default function PlatformList({ platforms }: PlatformListProps) {
  const platformList = platforms.map(
    (platform) => platform.platform.name.toLowerCase().split(' ')[0],
  );

  const confirms = new Set(platformList);

  return (
    <div className="flex items-center space-x-2">
      {Array.from(confirms).map((item) => {
        return (
          <div key={item}>
            {item === 'linux' && <FaLinux />}
            {item === 'playstation' && <FaPlaystation />}
            {item === 'pc' && <FaWindows />}
            {item === 'xbox' && <FaXbox />}
          </div>
        );
      })}
    </div>
  );
}
