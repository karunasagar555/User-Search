import { useEffect } from 'react';

const useKeyboardNavigation = (activeIndex, setActiveIndex, filteredUsers) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();  // Prevent the default action to avoid scrolling the browser window
        const nextIndex = activeIndex < filteredUsers.length - 1 ? activeIndex + 1 : activeIndex;
        setActiveIndex(nextIndex);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();  // Prevent the default action to avoid scrolling the browser window
        const prevIndex = activeIndex > 0 ? activeIndex - 1 : 0;
        setActiveIndex(prevIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, setActiveIndex, filteredUsers.length]);

  // Automatically scroll the active user card into view
  useEffect(() => {
    if (activeIndex >= 0 && filteredUsers[activeIndex]) {
      const cardElement = document.getElementById(`user-card-${filteredUsers[activeIndex].id}`);
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [activeIndex, filteredUsers]);
};

export default useKeyboardNavigation;
