import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Status } from './components/Status'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'


function App() {
  const personName = {
    first: 'Ajith',
    last: 'kumar'
  }

  const nameList = [
  {
    first: 'Abdul',
    last: 'Kalam'
  },
  {
    first: 'Elon',
    last: 'Musk'
  },
  {
    first: 'Nikola',
    last: 'Tesla'
  },
  ]
    return (
  <div className="App">
    <Greet name='vishwas' isloggedIn={false} />
    <Person name={personName} />
    <PersonList names={nameList} />
     <Status status='loading' />
      <Heading>Best Student Award</Heading>
      <Oscar>
        <Heading>Year Of The Student Award Goes to Nikola Tesla </Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
          console.log('Button clicked', event, id)
      }}
      />
      <Input value='' handleChange={event => console.log(event)} />
      <Container styles={{border: '1px solid black', padding: '1rem'}} />
  </div>
  )
}

export default App;
