import './App.css';

export function getImageUrl(imageId, size = 's') {
  return (
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
  );
}

function Profile({info}) {
    const imageSize = info.width < 90 ? 's' : 'b';
  return (
      <>
        <h2>{info.name}</h2>
        <img
            className="avatar"
            src={getImageUrl(info.image, imageSize)}
            alt={info.name}
            width={info.width}
            height={info.width}
        />
      </>
  )
}

function Item({ name, isPacked }) {
    return (
        <li className="item">
            {/*{isPacked ? name + ' ✔' : name}*/}
            {/*{isPacked*/}
            {/*    ? (<del>{name + ' ✔'}</del>)*/}
            {/*    : (name)}*/}

            {name} {isPacked && '✔'}
        </li>
    );
}

function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}

function Gallery() {
  return (
      <div>
        <h1>Notable Scientists</h1>
        <section className="profile">
          <Profile info={{name:'Maria Skłodowska-Curie', width: '70', image:'szV5sdG'}}/>
        </section>
        <section className="profile">
          <Profile info={{name:'Katsuko Saruhashi', width: '180', image:'YfeOqp2'}}/>
        </section>
      </div>
  );
}

const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

function List() {
    const listItems = people.map(person =>
        <li>{person}</li>
    );
    return <ul>{listItems}</ul>;
}


function App() {
  return (
    <>
      <p>Some text will be here</p>
      <Gallery />
        <PackingList />
        <List />
    </>
  );
}

export default App;
