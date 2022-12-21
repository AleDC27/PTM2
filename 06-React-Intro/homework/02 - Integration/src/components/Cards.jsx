import Card from './Card';

export default function Cards(props) {
   let id=0;
   const { characters } = props;
   return <div>
      {
         characters.map(cur=>
            <Card key={id+=1}
            name={cur.name}
            species={cur.species}
            gender={cur.gender}
            image={cur.image}
            onClose={()=>{alert('Emulamos que se cierra la card')}}
            />
         )
      }
   </div>;
}
