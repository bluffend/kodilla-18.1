var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        src: 'http://meetinthelobby.com/wp-content/uploads/2011/07/HarryPotter_SorcerersStone.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        src: 'https://e.allegroimg.com/s512/011f93/0076c18045ba8698132081c1b27e'
    },
    { 
        id: 3,
        title: 'Terminator',
        desc: 'Robot z przyszłości',
        src: 'https://dkanut5j171nq.cloudfront.net/0012/4982/ti103170_large.jpg' 
    },
    {
        id: 4,
        title: 'Vabank',
        desc: 'Król kasiarzy w przedwojennej Warszawie',
        src: 'https://1.fwcdn.pl/po/11/46/1146/7678914.3.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.src, height: 100, width: 100})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));