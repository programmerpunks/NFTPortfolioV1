export default function get_category_Filtered(categoryItem, categoryData) {
    let filtered_category = {};
    for (let index = 0; index < categoryData.length; index++) {
        if (categoryData[index].title === categoryItem) {
          categoryData[index].id = index;
          filtered_category =categoryData[index];
        }
      }
      return filtered_category;
  }
  