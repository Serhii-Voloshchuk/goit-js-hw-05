const getTotalBalanceByGender = (clients, gender) =>{
    return clients
    .filter(client => client.gender === gender)
    .map(client => client.balance)
    .reduce((totalBalance, clientBalance) => {
     return totalBalance + clientBalance;
    }, 0);
    
}



const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863

// const getTotalBalanceByGender = (clients, gender) => {
//     return clients
//       .filter(client => client.gender === gender) // Фильтруем клиентов по полу
//       .map(client => client.balance) // Преобразуем массив клиентов в массив балансов
//       .reduce((totalBalance, clientBalance) => {
//         return totalBalance + clientBalance; // Суммируем балансы
//       }, 0); // Начальное значение аккумулятора равно 0
//   }
  
//   const clients = [
//     {
//       name: "Moore Hensley",
//       gender: "male",
//       balance: 2811
//     },
//     {
//       name: "Sharlene Bush",
//       gender: "female",
//       balance: 3821
//     },
//     {
//       name: "Ross Vazquez",
//       gender: "male",
//       balance: 3793
//     },
//     {
//       name: "Elma Head",
//       gender: "female",
//       balance: 2278
//     },
//     {
//       name: "Carey Barr",
//       gender: "male",
//       balance: 3951
//     },
//     {
//       name: "Blackburn Dotson",
//       gender: "male",
//       balance: 1498
//     },
//     {
//       name: "Sheree Anthony",
//       gender: "female",
//       balance: 2764
//     }
//   ];
  
//   console.log(getTotalBalanceByGender(clients, "male")); // 12053
//   console.log(getTotalBalanceByGender(clients, "female")); // 8863