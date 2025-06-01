import React from 'react';
import * as Icons from 'lucide-react';
import { Topic } from '../types';

type TopicCardProps = {
  topic: Topic;
  isSelected: boolean;
  onClick: () => void;
};

export const TopicCard: React.FC<TopicCardProps> = ({ topic, isSelected, onClick }) => {
  // Dynamically get the icon component
  const IconComponent = Icons[topic.icon as keyof typeof Icons];

  return (
    <div 
      className={`topic-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
          e.preventDefault();
        }
      }}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className={`p-3 rounded-full ${isSelected ? 'bg-[#0066CC] text-white' : 'bg-gray-100 text-gray-700'} transition-colors duration-200`}>
          {IconComponent && <IconComponent size={24} />}
        </div>
        <h3 className="font-medium text-[15px] leading-tight">{topic.title}</h3>
        
        {isSelected && (
          <div className="absolute top-3 right-3 text-[#0066CC]">
            <Icons.Check size={18} />
          </div>
        )}
      </div>
    </div>
  );
};