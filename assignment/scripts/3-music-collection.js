console.log('***** Music Collection *****')

// - Create a variable `collection` that starts as an empty array.
let collection = [];

// - Add a function named `addToCollection`. This function should:
  // - Take in the album's `title`, `artist`, `yearPublished` as input parameters
  // - Create a new object having the above properties
  // - Add the new object to the end of the `collection` array
  // - Return the newly created object

  console.log ( `------in addToCollection------- `);
  function addToCollection( title, artist, yearPublished, trackArray ) {
    let album = {
        Title: title,
        Artist: artist,
        year: yearPublished,
        tracks: trackArray
    }
    collection.push( album );
    return album;
  }

// - Test the `addToCollection` function:
  // - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. 
  // (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  // - Console.log each album as added using the returned value.
  // - After all are added, console.log the `collection` array.

  console.log( addToCollection( 'Holly', 'Justin Nozuka', 2007,
  [ `Down In A Cold Dirty Well: 4:22`, `Golden Train: 3:03`, `Be Back Soon: 4:16`, `Mr. Therapy Man: 3:34`,
  `Supposed To Grow Old: 4:16`, `After Tonight: 4:00`, `Criminal: 4:00`, `I'm In Peace: 3:35`, `Oh Mamma: 4:49`,
  `Save Him: 5:20`, `If I Gave You My Life: 4:31`, `Why: 2:31`, `Lullabye: 8:05` ] ) );
  console.log( addToCollection( `We Sing, We Dance, We Steal Things`, 'Jason Mraz', 2008, 
  [ `Make It Mine: 3:08`, `I'm Yours: 4:09`, `Lucky: 3:09`, `Butterfly: 5:00`, `Live High: 4:12`, `Love for a Child: 4:05`,
  `Details in the Fabric: 5:45`, `Coyotes: 3:38`, `Only Human: 4:02`, `The Dynamo of Volition: 3:36`, `If It Kills Me: 4:33`,
  `A Beautiful Mess: 5:37` ] ) );
  console.log( addToCollection( 'Love Is A Four Letter Word', 'Jason Mraz', 2012,
  [ `The Freedom Song: 4:00`, `Living In The Moment: 3:55`, `The Woman That I Love: 3:11`, `I Won't Give Up: 4:00`,
  `5/6: 5:57`, `Everything is Sound: 4:46`, `93 Million Miles: 3:37`, `Frank D. Fixer: 4:45`, `Who's Thinking About You Now: 4:48`,
  `In Your Hands: 4:51`, `Be Honest: 3:25`, `The World As I See It: 3:59`, `I'm Coming Over: 4:29` ] ) );
  console.log( addToCollection( 'Calling off the Dogs', 'Ron Pope', 2014,
  [ `Lick My Wounds: 3:16`, `Empty Page: 3:22`, `Explain: 3:30`, `Silver Spoon: 5:04`, `Signs: 4:55`, `Push Me Away: 4:08`,
  `Nothing: 4:04`, `Off Your Feet: 5:15`, `Back to Bed: 4:43`, `New Friends: 4:09`, `Blood From a Stone: 4:13` ] ) );
  console.log( addToCollection( `Red (Taylor's Version)`, 'Taylor Swift', 2021,
  [ `State of Grace: 4:55`, `Red: 3:34`, `Treacherous: 4:03`, `I Knew You Were Trouble: 3:40`, `All Too Well: 5:29`, `22: 3:51`,
  `I Almost Do: 4:05`, `We Are Never Getting Back Together: 3:13`, `Stay Stay Stay: 3:26`, `The Last Time: 4:59` ] ) );
  console.log( addToCollection( 'Almost There', 'MercyMe', 2001,
  [ `I Worship You: 3:08`, `Here Am I: 4:20`, `On My Way To You: 4:06`, `How Great Is Your Love: 4:13`, `I Can Only Imagine: 4:09`,
  `Bless Me Indeed: 4:15`, `Cannot Say Enough: 4:47`, `House of God: 3:14`, `Call to Worship: 4:52`, `All Fall Down: 3:45`,
  `In You: 4:17` ] ) );

  console.log ( collection );

// - Add a function named `showCollection`. This function should:
  // - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.
  // - Console.log the number of items in the array.
  // - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

  console.log ( `------in showCollection function------- `);
  function showCollection( array ) {
      console.log( array.length );
      for ( let album of array ) {
          console.log ( album.Title + ` by ` + album.Artist + ` published in ` + album.year + `:` + '\n' +
           album.tracks );
      }
  }

// - Test the `showCollection` function.

showCollection( collection );

// - Add a function named `findByArtist`. This function should:
  // - Take in `artist` (a string) parameter
  // - Create an array to hold any results, empty to start
  // - Loop through the `collection` and add any objects with a matching artist to the array.
  // - Return the array with the matching results. If no results are found, return an empty array.

  console.log ( `------in findByArtist function------- `);
  function findByArtist( artistname, array ) {
    let results = [];
    for ( let album of array ) {
        console.log( artistname );
        if ( artistname === album.Artist ) {
            results.push( album );
        }
    }
    return results;
  }

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, 
// as well as an artist you know is not in your collection. Check that for artists with multiple matches, 
// all are found.

console.log( findByArtist( 'Justin Nozuka', collection ) );
console.log( findByArtist( 'Jason Mraz', collection ) );
console.log( findByArtist( 'Eminem', collection ) );


// ### Stretch goals

// - Create a function called `search`. This function should:
  // - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
  // ```
  // { artist: 'Ray Charles', year: 1957 }
  // ```
  // - The returned output from `search` should meet these requirements:
    // - Return a new array of all items in the `collection` matching *all* of the search criteria.
    // - If no results are found, return an empty array.
    // - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

    // Me trying to talk through the code:
    // I want to create a function that uses artist and year as an input search
    // and loops through the array, checking to see if there are matches within the array object.
    // if there is a perfect match, it will return a new array of the matching search criteria.

console.log ( `------in search function------- `);
function search ( find ) {
    let match = [];
    for ( let album of collection ) {
        if ( album.Artist === find.artist && album.year === find.year ) {
            match.push( album );
        }
    } return match;
} 

console.log( search ( { artist: 'Jason Mraz' , year: 2008 } ));
console.log( search ( { artist: 'Ray Charles' , year: 1957 } ));
console.log( search ( { track: `I Won't Give Up` } ) );

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. 
// You will need to update the functions to support this new property:
  // - Update the `addToCollection` function to also take an input parameter for the array of tracks.
  // - Update `search` to allow a `trackName` search criteria.
  // - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
    // TITLE by ARTIST, published in YEAR:
    // 1. NAME: DURATION
    // 2. NAME: DURATION
    // 3. NAME: DURATION
    // TITLE by ARTIST, published in YEAR:
    // 1. NAME: DURATION
    // 2. NAME: DURATION
// ```

