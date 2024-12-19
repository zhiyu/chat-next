import React from 'react';
import CategoryIcon from '~/components/Prompts/Groups/CategoryIcon';

export default function ListCard({
  category,
  name,
  snippet,
  onClick,
  children,
}: {
  category: string;
  name: string;
  snippet: string;
  onClick?: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  children?: React.ReactNode;
}) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.(event as unknown as React.MouseEvent<HTMLDivElement | HTMLButtonElement>);
    }
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="relative mt-2 flex w-full cursor-pointer flex-col gap-2 rounded-lg px-4 pb-4 pt-3 text-start
      align-top shadow-lg transition-all duration-300 ease-in-out hover:bg-surface-tertiary"
      role="button"
      tabIndex={0}
      aria-labelledby={`card-title-${name}`}
    >
      <div className="flex w-full justify-between">
        <div className="flex flex-row gap-2">
          <CategoryIcon category={category} className="icon-md" aria-hidden="true" />
          <h3
            id={`card-title-${name}`}
            className="break-word select-none text-balance text-sm font-semibold text-text-primary"
          >
            {name}
          </h3>
        </div>
        <div>{children}</div>
      </div>
      <div className="ellipsis max-w-full select-none text-balance text-sm text-text-secondary">
        {snippet}
      </div>
    </div>
  );
}
