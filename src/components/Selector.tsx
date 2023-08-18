'use client';

import React, { startTransition, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname, useRouter } from 'next/navigation';
import { SearchOrders, getTrendingGameList } from '@/app/actions/games.action';

interface SelectorProps {
  options: { value: string; label: string }[];
  placeholder?: string;
}

export default function Selector({ options, placeholder }: SelectorProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = async (value: string) => {
    setIsLoading(true);
    await getTrendingGameList({
      ordering: value as SearchOrders,
      path: pathname,
    });

    startTransition(() => {
      // router.push('?ordering=' + value);
      router.push(`?ordering=${value}`);
      router.refresh();
      setIsLoading(false);
    });
  };

  return (
    <div>
      <Select onValueChange={handleSelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder || '선택하세요.'} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>옵션</SelectLabel>
            {options.map((option) => {
              return (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      {isLoading && <p>로 딩 중 ..............................</p>}
    </div>
  );
}
