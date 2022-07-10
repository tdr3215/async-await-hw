// RANDOM NUMBER

// const getRandomNumber = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(Math.random());
//     }, 500);
//   });
// };

// const resolveRand = async () => {
//   const randNum = await getRandomNumber();
//   console.log(randNum);
// };

// resolveRand();

// REMOTE DATA

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

const coords = async (city) => {
  await fetch(`https://geocode.xyz/${city}?json=1`, requestOptions)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(
        `This is the long: ${json.longt}, This is the latt: ${json.latt}`
      );
    });
};

coords("atlanta");
