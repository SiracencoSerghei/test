//=====================================================

// const makeCounter = (initialValue) => {
//     let currentCount = initialValue;

//     const getCurrentCount = () => currentCount;

//     const increaseCount = (value) => {
//         currentCount += value;
//         return currentCount;
//     }

//     const decreaseCount = (value) => {
//         currentCount -= value;
//         return currentCount;
//     }
//     const setCount = (value) => {
//       currentCount = value;
//     }

//     return { getCurrentCount, increaseCount, decreaseCount, setCount }
// }

// const counter1 = makeCounter(10);
// const counter2 = makeCounter(20);

// counter2.increaseCount(20);
// console.log(counter2.getCurrentCount());

// counter1.increaseCount(10);
// console.log(counter1.getCurrentCount());

// counter1.increaseCount(10);
// console.log(counter1.getCurrentCount());

// counter1.decreaseCount(20);
// console.log(counter1.getCurrentCount());

// counter1.setCount(42);
// console.log(counter1.getCurrentCount()); // 42

// class AnimalCreator {
//     constructor(name, type, age) {
//         this.name = name,
//         this.type = type,
//         this.age = age
//     }
// }

// const horse = new AnimalCreator('Lucky', 'Horse', 10)
// // const horse = {...new AnimalCreator('Lucky', 'Horse', 10)}
// horse.name = 'Dandy'
// console.log(horse.type)

// function animalCreator (name, type, age) {
//     return {
//         name, type, age
//     }
// }

// const horse = animalCreator('Lucky', 'Horse', 10)
// console.log('horse ', horse )

// ========================================

// const personBob = {
//     name: 'Bob',
//     showName: ()=>{
//         console.log(this.name)
//     }
// }
// console.log(personBob.showName())

// const personBill = {
//     name: 'Bill',
//     showName(){
//         const func = () => {
//             console.log(this.name)
//         }
//         func()
//     }
// }
// // personBill.showName()
// personBob.showMyName = personBill.showName
// personBob.showMyName()
// console.log(personBob)

// ==================================

// function show(...args) {
//     console.log('This: ', this)
//     console.log('arguments: ', args)
// }
// show(1,2,3)

// show.call({name: 'Bob'}, 'Hey', 'this')
// show.apply({name: 'Bob'}, ['Hey', 'this2'])
// const showBinded = show.bind({name: 'Bill'}, 'Hey', 'this3')
// showBinded()

//================================

// function multiply(x, y) {
//     return x*y
// }

// const multiply5 = multiply.bind(null, 5)
// console.log('multiply5', multiply5)
// console.log(multiply5(10))

// const letterArray = [].map.call('someString', (letter) => letter)
// console.log('letterArray', letterArray)

//==========================================

// const animals = [
//     {kind: 'Cow', order: 3, food: 100, speed: 10},
//     {kind: 'Dog', order: 1, food: 20, speed: 100},
//     {kind: 'Cat', order: 2, food: 3, speed: 150},
// ]
// const filterAnimals = (filteringFunc, sortingFunc, animals) => {
//     return animals
//     .filter(filteringFunc)
//     .sort(sortingFunc)
// }
// const speedFilter = (animal) => animal.speed > 90
// const foodFilter = ({food}) => food > 19

// const sortByDesc = (animal1, animal2) => animal1.order > animal2.order ? 1 : -1;
// const sortByAsc = (animal1, animal2) => animal1.order > animal2.order ? -1 : 1

// const res1 = filterAnimals(speedFilter, sortByDesc, animals)
// const res2 = filterAnimals(foodFilter, sortByAsc, animals)

// console.log('res1', res1)
// console.log('res2', res2)

//+++======================================

// const lowerCase = s => { return s.toLowerCase()}

// const reverseString = s => {
//     return s.split('').reverse().join('')
// }
// const addSymbol = s => `${s}!`

// const compose = (...allFunc) => {
//     return arg =>
//       allFunc.reduce((prevFuncRes, currFunc) => currFunc(prevFuncRes), arg);
// }

// const processString = compose(
//     lowerCase,
//     reverseString,
//     addSymbol
// )
// console.log(processString('Hello World'))

// // String.prototype.reverseString = function() {
// //     return this.split('').reverse().join('');
// //   };

// //   String.prototype.addSymbol = function() {
// //     return `${this}!`;
// //   };

// // const res = 'Hello World'.toLowerCase().reverseString().addSymbol()
// // console.log( res)

//==================================================

// const loggerDecorator = (fn) => {
//     return (...args) => {
//         console.log('operation worked!!!')

//         return fn(...args)
//     }
// }
// const saveToLocalStorage = (key, data) => localStorage.setItem(key, data)
// const saveWithLogs = loggerDecorator(saveToLocalStorage)

// const bob = {
//     name: 'Bob',
//     age: 40
// }

// saveWithLogs('person', JSON.stringify(bob)) // can see in localStorage
// console.log(localStorage.getItem('person')) // can see in console

//=================================================

// const multiply = (num1, num2) => {
//     return num1 * num2
// }

// const multiplyBy5 = (num) => multiply(5, num)
// const multiplyBy10 = multiply.bind(this, 10)

// console.log('multiplyBy10(3)', multiplyBy10(3))
// console.log('multiplyBy5(2)', multiplyBy5(2))

//=================================================

// const multiplyNum = (num1, num2) => {
//     if(num2) {
//         return num1 * num2
//     }
//     return (num2) => num1 * num2
// }

// console.log('multiplyNum(2,3)', multiplyNum(2,3))

// const curryingFunc5 = multiplyNum(5)

// console.log('curryingFunc5(2)', curryingFunc5(2))

// const multiplyNumWithBind = (num1, num2) => {
//     if(num2) {
//         return num1 * num2
//     }
//     return multiplyNumWithBind.bind(null, num1)
// }

// console.log('multiplyNumWithBind(6, 10)', multiplyNumWithBind(6, 10))
// console.log('multiplyNumWithBind(6)(20)', multiplyNumWithBind(6)(20))

//================================================

// const animals = [
//     {kind: 'Cow', order: 3, food: 100, speed: 10},
//     {kind: 'Dog', order: 1, food: 20, speed: 100},
//     {kind: 'Cat', order: 2, food: 3, speed: 150},
// ]
// const res = animals.map((el, i, arr) => {
//     console.log(`el number ${i}`, el)
//     console.log('speed: ', el.speed)
//     console.log('arr', arr)
//     return el
// })
// console.log('res', res)

//=============================================

// const newArr = animals.reduce((animalsMap, animal) => {

//     animalsMap[animal.kind] = animal
//     return animalsMap
// }, {})
// console.log('newArr()', newArr)

// const speed = animals.reduce((totalSpeed, animal) => {

//     return totalSpeed + animal.speed
// }, 0)
// console.log('speed ', speed )

// [0, 1, 2, 3, 4].reduce(function (previousValue, currentValue, index, array) {
//     return previousValue + currentValue;
//   });

//+======================================

// const arr = [ 1, 8, 5, 3, [4, 9, [6, [7]]]]

// const arr1 = arr.flat()
// const arr2 = arr.reduce((acc, val) => acc.concat(val), []);

// function flatten (input) {
//     const stack = [...input]
//     const res = []

//     while (stack.length) {
//         const next = stack.pop()

//         if (Array.isArray(next)) {
//             stack.push(...next)
//         } else {
//             res.push(next)
//         }
//     }
//     return res.reverse()
// }
//   const arr3 = flatten(arr)

// console.log('arr', arr)
// console.log('arr1', arr1)
// console.log('arr2', arr2)
// console.log('arr3', arr3)

//================================

//  const arr = [1, 2, 3, 4, 5];

//  try {
//     arr.forEach(item => {
//       if (item === 3) {
//         throw new Error('StopIteration');
//       }
//       console.log(item);

//     });
//   } catch (error) {
//     console.log('error', error)
//   }

// const result = arr.map(item => {
//     try {
//           if (item === 3) {
//             throw new Error('StopIteration');
//             return
//           }
//           console.log(item);
//           return item * 2;
//       } catch (error) {
//         console.log('error', error);
//         return
//       }

//     }
//     );

// console.log(result);

//================================================

// const animals = [
//   {kind: 'Cow', order: 3, food: 100, speed: 10},
//   {kind: 'Dog', order: 1, food: 20, speed: 100},
//   {kind: 'Cat', order: 2, food: 3, speed: 150},
// ]

// const animalsArr = animals.map(animal => animal.kind)
// console.log('animalsArr', animalsArr)

// const iteratorAnimals = animalsArr.entries()
// console.log(iteratorAnimals.next())
// console.log(iteratorAnimals.next())
// console.log(iteratorAnimals.next())
// console.log(iteratorAnimals.next())

//===============================================

// const sendRequest = () => {
//     return fetch('https://pokeapi.co/api/v2/pokemon/1')
//     .then(resp => resp.json())
// }

// const runPromise = (param) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//         if(param) {
//             console.log("Error")
//             reject()
//         } else {
//             console.log('Success')
//             resolve()
//         }
//     }, 2000)
// })
// }
// // 1) with Promise.then
// runPromise(false)
// .then(sendRequest)
// // .then(scrollToPokemon)
// .catch()

// 2) with Promise await
// await runPromise()
// await renderPokemon()
// await scrollToPokemon()

// 3) with callback
// runWithCallback(false, () => renderPokemon(()=>scrollToPokemon()))

// const runWithCallback = (param, cbFunc) => {

//         setTimeout(() => {
//         if(param) {
//             console.log("Error")
//             throw new Error('Error happened')
//         } else {
//             console.log('Success')

//             cbFunc()
//         }
//     }, 2000)
// }

// sendRequest()
// .then(data => {
//     console.log(data)
// })
// .catch(error => {
//     console.log('Error caught: ', error)
// })

// ( async() => {
//     const response = await sendRequest()
//     console.log(response)
// })()

//=============================================

// const fetchPokemon = (indexPokemon) => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             fetch(`https://pokeapi.co/api/v2/pokemon/${indexPokemon}`)
//     .then(resp => resp.json())
//     .then((pokemon) => resolve(pokemon))
//         }, 2000)
//     })
//     }

// ( async() => {
//     const pokemon1 = await fetchPokemon(1)
//     console.log(pokemon1)

//     const pokemon2 = await fetchPokemon(2)
//     console.log(pokemon2)

//     const pokemon3 = await fetchPokemon(3)
//     console.log(pokemon3)
// })()

// fetchPokemon(1)
// .then(pokemon1 => {
//     console.log(pokemon1)

//     return fetchPokemon(2)
// })
// .then(pokemon2 => {
//     console.log(pokemon2)

//     return fetchPokemon(3)
// })
// .then(pokemon3 => {
//     console.log(pokemon3)
// })

//+================================

// const fetchPokemon = indexPokemon => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${indexPokemon}`).then(resp =>
//     resp.json(),
//   );
// };

// const pokemon1 = fetchPokemon(1);
// const pokemon2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             fetchPokemon(10)
//             // .then(resolve)
//             .then(()=>reject('pokemon2 error'))
//         }, 3000)
//     })
// }
// const pokemon3 = fetchPokemon(12);

// const insertToDom = pokemon => {
//   const body = document.querySelector('body');
//   const image = document.createElement('img');
//   image.src = pokemon?.sprites?.front_default;

//   body.appendChild(image);
// };

// pokemon1.then((resp) => insertToDom(resp))
// pokemon2.then((resp) => insertToDom(resp))
// pokemon3.then((resp) => insertToDom(resp))

// Promise.all([
//     pokemon1,
//     pokemon2(),
//     pokemon3
// ]).then((responsesList) => {
//     console.log('All done: ', responsesList)
//     responsesList.forEach(insertToDom)
// }).catch((err)=> console.log('Err caught'))

// Promise.allSettled([
//     pokemon1,
//     pokemon2(),
//     pokemon3
// ]).then((responsesList) => {
//     console.log('All done: ', responsesList)

//     responsesList.forEach((pokemonResponse) =>{
//         if(pokemonResponse.status === 'fulfilled') {
//             insertToDom(pokemonResponse.value)
//         }
//     })
// })
// .catch((err)=> console.log('Err caught'))

// (async() => {

//     const responsesList = await Promise.allSettled([
//         pokemon1,
//         pokemon2(),
//         pokemon3
//     ])
//     console.log('All done: ', responsesList)
//     responsesList.forEach((pokemonResponse) =>{
//             if(pokemonResponse.status === 'fulfilled') {
//                 insertToDom(pokemonResponse.value)
//             }
//         })
//     })()

//==================================================

// const fetchPokemon = (pokemonId) => {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(resp => resp.json());
//   };

//   const pokemonsCache = {
//     // '1': {name: 'bulbosaur'}
//   }

//   const getPokemon = async (pokemonId) => {

//     if(pokemonsCache[pokemonId]) {
//         console.log('from cache', pokemonId)

//         // return new Promise((resolve) => {
//         //     resolve(pokemonsCache[pokemonId])
//         // })

//         return Promise.resolve(pokemonsCache[pokemonId])

//     }

//     const pokemon = await fetchPokemon(pokemonId)
//     pokemonsCache[pokemonId] = pokemon`https://pokeapi.co/api/v2/pokemon/${indexPokemon}`

//     console.log('from server', pokemonId)
//     return pokemon
//   }

//   window.getPokemon  = getPokemon

//==============================================

// const insertToDom = pokemon => {
//   const body = document.querySelector('body');
//   const image = document.createElement('img');
//   image.src = pokemon?.sprites?.front_default;

//   body.appendChild(image);
// };

// const fetchPokemon = pokemonId => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(resp =>
//     resp.json(),
//   );
// };

// const pokemon1 = fetchPokemon(101);
// const pokemon2 = fetchPokemon(10);
// const pokemon3 = () => {
//   // fetchPokemon(25)
//   return Promise.reject('Pokemon ERRRORRR');
// };

//   (async() => {
//     try {
//     const pokemon = await Promise.race([
//         pokemon1,
//         pokemon2,
//         pokemon3()
//       ])
//       insertToDom(pokemon)
//     }
//     catch (error) {
//         console.log(error)
//     }
//   })()

//   (async() => {
//     const pokemon = await Promise.any([
//         pokemon1,
//         pokemon2,
//         pokemon3()
//       ])
//       insertToDom(pokemon)
//   })()

// Promise.any([pokemon1, pokemon2, pokemon3()])
// .then(insertToDom)
// .catch(error => console.log('Error caught', error))
// .finally(()=> console.log('final'))

//==================================================

// const imagesList = [
//   'http://gallery-motorcycles.com/wp-content/uploads/2017/05/gallery-motorcycles-harley-davidson-SHOWROOM_sx.jpg',
//   'https://journal.riserapp.com/wp-content/uploads/2019/02/48_riserblog_yard_built_yamaha_bunkers_eu_custom-6.jpg',
//   'http://gallery-motorcycles.com/wp-content/uploads/2017/05/gallery-motorcycles-harley-davidson-SHOWROOM_REV.jpg',
//   'http://gallery-motorcycles.com/wp-content/uploads/2016/12/fronte-copia.jpg',
//   'https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-4.jpg',
//   'http://gallery-motorcycles.com/wp-content/uploads/2016/12/retro-copia.jpg',
//   'http://gallery-motorcycles.com/wp-content/uploads/2016/12/trequarti.jpg',
//   'https://journal.riserapp.com/wp-content/uploads/2019/02/48_riserblog_yard_built_yamaha_bunkers_eu_custom-7.jpg',
//   'https://journal.riserapp.com/wp-content/uploads/2019/02/21_riserblog-yamaha-mt-10-naked-eicma-2015-10.jpg',
//   'https://journal.riserapp.com/wp-content/uploads/2019/02/36_riserblog-yamaha-mt-07-fluo-3.jpg',
//   'https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-3.jpg',
//   'https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-6.jpg',
//   'https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-7.jpg',
//   'https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-1.jpg',
// ];

// У вас есть массив с картинками imagesList

// Нам нужно загружать 3 картинки после чего рендерить их в галерею.
// После того как картинки будут загружены и отрендерены нужно сделать паузу в 2 секунды
// Потом снова загружать 3 картинки, рендерить их в галерею. Снова пауза.
// Потом снова загружать 3 картинки, рендерить их в галерею. Снова пауза.
// И так до конца массива

// В работе используем только нативный джс



// const gallery = document.querySelector('.gallery');
// const IMAGES_PER_GROUP = 3;
// const PAUSE = 2000;

// const renderImageGroup = (group) => {
//   group.forEach((imageUrl) => {
//     const imageElement = document.createElement('img');
//     imageElement.src = imageUrl;
//     imageElement.alt = 'img';
//     imageElement.className = 'img';
//     const wrapper = document.createElement('div');
//     wrapper.className = 'wrapper';
//     wrapper.appendChild(imageElement);
//     gallery.appendChild(wrapper);
//   });
// };

// const fetchAndRenderImages = (startIndex) => {
//   const group = imagesList.slice(startIndex, startIndex + IMAGES_PER_GROUP);
//   if (group.length > 0) {
//     renderImageGroup(group);
//     setTimeout(() => {
//       fetchAndRenderImages(startIndex + IMAGES_PER_GROUP);
//     }, PAUSE);
//   }
// };

// fetchAndRenderImages(0);

   // variant 1

// const fetchImages = (imgUrl, callback) => {

//   fetch(imgUrl, {mode: 'no-cors'})
//   .then(data => {
//     console.log('Image was loaded')
//     callback && callback()
//   })
// }

// const loadNextImage = (imgIndex) => {

//   const currentImageUrl = imagesList[imgIndex]

//   // recursion exit
//   if(!currentImageUrl) {
//     console.log('Done')
//     return
//   }

//   fetchImages(currentImageUrl, () => loadNextImage(imgIndex + 1))
// }

//   loadNextImage(0)

     //==== var2

//      const fetchImages = async (imgUrl) => {
//       return new Promise( (resolve, reject) => {
//         fetch(imgUrl, {mode: 'no-cors'})
//         .then(data => {
//           console.log('Image was loaded')
//           resolve()
//         })
//         .catch(e => {
//           reject(e)
//         })
//       })
//     }
// (async () => {
//   for (let i=0; i < imagesList.length; i++) {
//     const currentImageUrl = imagesList[i]
  
//     await fetchImages(currentImageUrl)
//   }

//==========================================

// const makePokemonURL = (pokemonIndex) => {
//   return `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`
// }

// const pokemonIndices = [1, 10, 12, 45, 64, 78, 3, 21];

// const getPokemonData = async (pokemonIndex) => {
//   const pokemonURL = makePokemonURL(pokemonIndex);
//   const response = await fetch(pokemonURL);
//   const pokemonData = await response.json();
//   return pokemonData;
// };

// const showPokemon = pokemon => {
//   const body = document.querySelector('body')
//   const image = document.createElement('img')
//   image.src = pokemon.sprites.front_default

//   body.appendChild(image)
// }

// variant1

// const displayPokemon = async() => {
//   for (let i = 0; i < pokemonIndices.length; i ++) {
//     const currentPokemonIndex = pokemonIndices[i]
//     const currentPokemon = await getPokemonData(currentPokemonIndex)
//     showPokemon(currentPokemon)
//   }
// }
// displayPokemon()

//  variant2

// const displayPokemonRecurs = async (i) => {
//   if(i >= pokemonIndices.length) {
//     return
//   }
//       const currentPokemonIndex = pokemonIndices[i]
//     const currentPokemon = await getPokemonData(currentPokemonIndex)
//     showPokemon(currentPokemon)

//     displayPokemonRecurs(i + 1)
// };

// displayPokemonRecurs(0)

// variant3

// const pokemonList = pokemonIndices.map(index => makePokemonURL(index));

// const getPokemon = async (pokemonUrl) => fetch(pokemonUrl).then(res => res.json())

// const showPokemon = pokemon => {
//   const body = document.querySelector('body')
//   const image = document.createElement('img')
//   image.src = pokemon.sprites.front_default

//   body.appendChild(image)
// }
// (()=>{
//   const pokemonListIterator = pokemonList[Symbol.iterator](); // don't forget to call
//   const getNextPokemon = async (pokemonURL) => {
//     if(!pokemonURL) {
//       console.log('pokemonIndices is Empty');
//       return;
//     }
//     const pokemonToRender = await getPokemon(pokemonURL)
//     showPokemon(pokemonToRender)
//     const nextPokemon = pokemonListIterator.next()
//     if(nextPokemon.done) {
//       console.log('Done')
//       return
//     }
//     getNextPokemon(nextPokemon.value)
//   }
//     const currentPokemon = pokemonListIterator.next()
//     getNextPokemon(currentPokemon.value)

// })()

//=======================

// const makePokemonURL = (pokemonIndex) => {
//   return `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`
// }

// const pokemonIndices = [1, 10, 12, 45, 64, 78, 3, 21];

// const pokemonList = pokemonIndices.map(index => makePokemonURL(index));

// const getPokemon = async (pokemonUrl) => fetch(pokemonUrl).then(res => res.json())

// const showPokemon = pokemon => {
//   const body = document.querySelector('body')
//   const image = document.createElement('img')
//   image.src = pokemon.sprites.front_default  // Promise.all
//   // image.src = pokemon.value.sprites.front_default  // Promise.allSettled

//   body.appendChild(image)
// }

// (async () => {
//   const requestsList = [...pokemonList];

//   const getNextPokemon = async (requestsList) => {
//     if (!requestsList.length) {
//       console.log('Done');
//       return;
//     }
//     const currReqList = requestsList.slice(0, 3);
//     const pokemonsToRender = await Promise.all(currReqList.map(url => getPokemon(url)));
//     pokemonsToRender.forEach(pokemon => showPokemon(pokemon));

//     const nextRqList = requestsList.slice(3);
//     await getNextPokemon(nextRqList);
//   };
//   await getNextPokemon(requestsList);
// })();

// // (()=>{
// //   const requestsList = [...pokemonList]
// //   const getNextPokemon = async(requestsList) => {

// //     if(!requestsList.length) {
// //       console.log('Done')
// //       return
// //     }
// //     const currReqList = requestsList.slice(0, 3);
// //     const pokemonsToRender = await Promise.allSettled(currReqList.map(url => getPokemon(url)))
// //     .then(pokemonToRender => (pokemonToRender.forEach(pokemon => showPokemon(pokemon))))

// //     const nextReqList = requestsList.slice(3)
// //     getNextPokemon(nextReqList)
// //   }
// //   getNextPokemon(requestsList)
// // })()

// ===============================================

// document.addEventListener('load', () => console.log('DOM load'))
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  const makePokemonURL = (pokemonIndex) => {
    return `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
  }

  const pokemonIndices = [1, 10, 12, 45, 64, 78, 3, 21];

  const pokemonList = pokemonIndices.map(index => makePokemonURL(index));

  const getPokemon = async (pokemonUrl) => fetch(pokemonUrl).then(res => res.json());

  const showPokemonAsync = async (pokemon) => {
    const body = document.querySelector('body');
    const image = document.createElement('img');
    image.src = pokemon.value.sprites.front_default;

    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    });

    body.appendChild(image);
  };

  (async () => {
    const requestsList = [...pokemonList];
    const getNextPokemon = async (requestsList) => {
      if (!requestsList.length) {
        console.log('Done');
        return;
      }
      const batchSize = 3;
      const currReqList = requestsList.slice(0, batchSize);
      const pokemonsToRender = await Promise.allSettled(currReqList.map(url => getPokemon(url)));

      const promiseList = pokemonsToRender.map(pokemon => showPokemonAsync(pokemon));

      await Promise.all(promiseList);

      const nextReqList = requestsList.slice(batchSize);
      await getNextPokemon(nextReqList);
    }

    await getNextPokemon(requestsList);
  })();
});
