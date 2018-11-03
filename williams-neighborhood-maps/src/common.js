/* The function located at https://stackoverflow.com/questions/48493960/using-google-map-in-react-component
    was directly taken to load the google maps api. 
*/ 

/* Concept of using a separate utlity file came from https://www.youtube.com/watch?v=5J6fs_BlVC0&feature=youtu.be
*/

  export function createGoogleMapsInstance() {
     return new Promise((resolve) => {
        window.resolveGoogleMapsPromise = () => {
          resolve(window.google);
          delete window.resolveGoogleMapsPromise;
        };
        const script = document.createElement("script");
        const API = 'AIzaSyCUmimnNaC738CQKm0it8ZYabmy0z8eg7U';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
        script.async = true;
        document.body.appendChild(script);
      });
  }