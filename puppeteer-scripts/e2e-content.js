 window.fetch = () => {
   console.log('fetching')
   return Promise.resolve(JSON.stringify({
     value: {
       joke: 'When you are Chuck Norris, anything + anything is equal to 1. One roundhouse kick to the face.'
     }
   }));
 }
