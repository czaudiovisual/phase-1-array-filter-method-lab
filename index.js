// Code your solution here


// function findMatching(driver, string){
//     return driver.filter(function(name){
//         return name.toLowerCase().indexOf(string.toLowerCase()) !== -1
//     })
// }
// console.log(findMatching(drivers, 'Bobby'))


function findMatching(drivers, names){
    return drivers.filter(function(name){
        return name.toLowerCase().indexOf(names.toLowerCase()) === 0;
    })
}
findMatching(drivers, 'Bobby');



function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase().indexOf(letters.toLowerCase()) === 0;
    });
}

fuzzyMatch(drivers, 'Sa'); 





const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(drivers, driverName) {
    return drivers.filter(driver => driver.name === driverName)
  }

matchName(drivers, 'Bobby');