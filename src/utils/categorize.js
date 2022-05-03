const categorize = (categories, arr, compareTerm) => {
  const initializedCategories = {};
  categories.forEach((category) => (initializedCategories[category] = []));
  Object.keys(initializedCategories).forEach(
    (categoryKey) =>
      (initializedCategories[categoryKey] = arr.filter(
        (el) => el[compareTerm] === categoryKey
      ))
  );
  return initializedCategories;
};

export default categorize;
