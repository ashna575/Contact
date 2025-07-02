
import './App.css'
import Navigation from './component/Navigation/navigation'
import ContactForm from './component/ContactForm/ContactForm'
import ContactHeader from './component/ContactHeader/ContactHeader'
function App() {
 

  return (
   <div>
  <Navigation />


   <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main></div>
  

   

)}
export default App;


