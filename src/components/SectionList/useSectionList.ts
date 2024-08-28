const useSectionList = () => {
  const screenHeight: number = window.screen.height;
  const skeletonItemHeight = 200;
  const skeletonItemNumber = screenHeight / skeletonItemHeight;
  const skeletonItems = [];
  for (let index = 0; index < skeletonItemNumber; index++) {
    skeletonItems.push({
      id: index,
    });
  }
  return {
    skeletonItems,
    skeletonItemHeight,
  };
};
export default useSectionList;
