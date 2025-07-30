import './Skeleton.css'

export const RecentChatsSkeleton = () => {
  return (
    <div className="chat-skeleton-list">
      {[...Array(5)].map((_, index) => (
        <div className="chat-skeleton-item" key={index}>
          <div className="skeleton avatar"></div>
          <div className="skeleton-text-group">
            <div className="skeleton name"></div>
            <div className="skeleton message"></div>
          </div>
          <div className="skeleton date"></div>
        </div>
      ))}
    </div>
  );
};
