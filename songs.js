const SONGS = [
  { id: "canzone-1",  title: "Just The Way You Are",  artist: "Bruno Mars",  cover: "img/cover-1.jpg",  lyricsPage: "testi/canzone-1.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-2",  title: "Lazy Song",  artist: "Bruno Mars",  cover: "img/cover-2.jpg",  lyricsPage: "testi/canzone-2.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-3",  title: "Locked out of Heaven",  artist: "Bruno Mars",  cover: "img/cover-3.jpg",  lyricsPage: "testi/canzone-3.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-4",  title: "Treasure",  artist: "Bruno Mars",  cover: "img/cover-4.jpg",  lyricsPage: "testi/canzone-4.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-5",  title: "When I was your man",  artist: "Bruno Mars",  cover: "img/cover-5.jpg",  lyricsPage: "testi/canzone-5.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-6",  title: "Versace on the floor",  artist: "Bruno Mars",  cover: "img/cover-6.jpg",  lyricsPage: "testi/canzone-6.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-7",  title: "Uptown funk",  artist: "Bruno Mars",  cover: "img/cover-7.jpg",  lyricsPage: "testi/canzone-7.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-8",  title: "Stay with me",  artist: "Sam Smith",  cover: "img/cover-8.jpg",  lyricsPage: "testi/canzone-8.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-9",  title: "I'm not the only one",  artist: "Sam Smith",  cover: "img/cover-9.jpg",  lyricsPage: "testi/canzone-9.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-10", title: "Daisies", artist: "Justin Bieber", cover: "img/cover-10.jpg", lyricsPage: "testi/canzone-10.html", links:{ spotify:"#", apple:"#", youtube:"#"} },

  { id: "canzone-11", title: "Yukon", artist: "Justin Bieber", cover: "img/cover-11.jpg", lyricsPage: "testi/canzone-11.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-12", title: "Fast Car", artist: "Justin Bieber", cover: "img/cover-12.jpg", lyricsPage: "testi/canzone-12.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-13", title: "Sorry", artist: "Justin Bieber", cover: "img/cover-13.jpg", lyricsPage: "testi/canzone-13.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-14", title: "Love Yourself", artist: "Justin Bieber", cover: "img/cover-14.jpg", lyricsPage: "testi/canzone-14.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-15", title: "Stay", artist: "Justin Bieber", cover: "img/cover-15.jpg", lyricsPage: "testi/canzone-15.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-16", title: "Peaches", artist: "Justin Bieber", cover: "img/cover-16.jpg", lyricsPage: "testi/canzone-16.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-17", title: "Photograph", artist: "Ed Sheeran", cover: "img/cover-17.jpg", lyricsPage: "testi/canzone-17.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-18", title: "Shape of you", artist: "Ed Sheeran", cover: "img/cover-18.jpg", lyricsPage: "testi/canzone-18.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-19", title: "Perfect", artist: "Ed Sheeran", cover: "img/cover-19.jpg", lyricsPage: "testi/canzone-19.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-20", title: "Thinking out loud", artist: "Ed Sheeran", cover: "img/cover-20.jpg", lyricsPage: "testi/canzone-20.html", links:{ spotify:"#", apple:"#", youtube:"#"} },

  { id: "canzone-21", title: "Don't / Love yourself", artist: "Ed Sheeran", cover: "img/cover-21.jpg", lyricsPage: "testi/canzone-21.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-22", title: "The A Team", artist: "Ed Sheeran", cover: "img/cover-22.jpg", lyricsPage: "testi/canzone-22.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-23", title: "Lego House", artist: "Ed Sheeran", cover: "img/cover-23.jpg", lyricsPage: "testi/canzone-23.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-24", title: "She will be loved", artist: "Maroon 5", cover: "img/cover-24.jpg", lyricsPage: "testi/canzone-24.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-25", title: "Sunday Morning", artist: "Maroon 5", cover: "img/cover-25.jpg", lyricsPage: "testi/canzone-25.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-26", title: "This Love", artist: "Maroon 5", cover: "img/cover-26.jpg", lyricsPage: "testi/canzone-26.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-27", title: "Sugar", artist: "Maroon 5", cover: "img/cover-27.jpg", lyricsPage: "testi/canzone-27.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-28", title: "Girls like you", artist: "Maroon 5", cover: "img/cover-28.jpg", lyricsPage: "testi/canzone-28.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-29", title: "Titolo Canzone 29", artist: "Artista 29", cover: "img/cover-29.jpg", lyricsPage: "testi/canzone-29.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-30", title: "Titolo Canzone 30", artist: "Artista 30", cover: "img/cover-30.jpg", lyricsPage: "testi/canzone-30.html", links:{ spotify:"#", apple:"#", youtube:"#"} },

  { id: "canzone-31", title: "Titolo Canzone 31", artist: "Artista 31", cover: "img/cover-31.jpg", lyricsPage: "testi/canzone-31.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-32", title: "Titolo Canzone 32", artist: "Artista 32", cover: "img/cover-32.jpg", lyricsPage: "testi/canzone-32.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-33", title: "Titolo Canzone 33", artist: "Artista 33", cover: "img/cover-33.jpg", lyricsPage: "testi/canzone-33.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-34", title: "Titolo Canzone 34", artist: "Artista 34", cover: "img/cover-34.jpg", lyricsPage: "testi/canzone-34.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-35", title: "Titolo Canzone 35", artist: "Artista 35", cover: "img/cover-35.jpg", lyricsPage: "testi/canzone-35.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-36", title: "Titolo Canzone 36", artist: "Artista 36", cover: "img/cover-36.jpg", lyricsPage: "testi/canzone-36.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-37", title: "Titolo Canzone 37", artist: "Artista 37", cover: "img/cover-37.jpg", lyricsPage: "testi/canzone-37.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-38", title: "Titolo Canzone 38", artist: "Artista 38", cover: "img/cover-38.jpg", lyricsPage: "testi/canzone-38.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-39", title: "Titolo Canzone 39", artist: "Artista 39", cover: "img/cover-39.jpg", lyricsPage: "testi/canzone-39.html", links:{ spotify:"#", apple:"#", youtube:"#"} },
  { id: "canzone-40", title: "Titolo Canzone 40", artist: "Artista 40", cover: "img/cover-40.jpg", lyricsPage: "testi/canzone-40.html", links:{ spotify:"#", apple:"#", youtube:"#"} }
];





