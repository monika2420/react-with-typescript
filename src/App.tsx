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
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'
import { User } from './components/context/User'
import { UserContextProvider } from './components/context/UserContext'
import { DomRef } from './components/refs/DomRef'
import { MutableRef } from './components/refs/MutableRef'
import { Counter } from './components/class/Counter'
import { List } from './components/generics/List'
  





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
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Counter message='The count value is ' />
      

      <List items={[
      { 
        id: 1,
        first: 'Abdul',
        last: 'Kalam',
      },
      {
        id: 2,
        first: 'Elon',
        last: 'Musk',
      },
      {
        id: 3,
        first: 'Nikola',
        last: 'Tesla',
      },
      ]}
      onClick={(item) => console.log(item)} />
  </div>
  )
}

export default App;
