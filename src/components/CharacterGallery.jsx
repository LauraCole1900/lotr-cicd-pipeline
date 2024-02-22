import characterData from '../data/characterData.json';
import Character from './Character';

const CharacterGallery = () => {
  const characterComponents = characterData.map((char, i) => <Character {...char} key={i} />)

  return (
    <section>
      {characterComponents}
    </section>
  )
}

export default CharacterGallery;