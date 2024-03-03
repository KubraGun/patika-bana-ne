export default function(data){
  // data = content data
  return Object.keys(data)
   .map(key => {// .keys() --> this method return keys as array element.
      return {
        id: key,
       ...data[key],
      };
   }) // sort by date iso string --> https://stackoverflow.com/questions/12192491/sort-array-by-iso-8601-date
  .sort(function (a, b) {
    return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
  });
}