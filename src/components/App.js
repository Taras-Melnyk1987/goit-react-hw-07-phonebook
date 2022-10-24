import PropTypes from 'prop-types';
import { AppSyles, AppTitle } from './App.styled';
import { Toaster } from 'react-hot-toast';
import AppForm from './Form';
import Section from './Section';
import Filter from './Filter';
import ContactList from './ContactList';
import { useSelector } from 'react-redux';

const App = ({ title }) => {
  const items = useSelector(state => state.contacts.items);

  return (
    <AppSyles>
      <AppTitle>{title}</AppTitle>
      <Section>
        <AppForm />
      </Section>

      <Section title="Contacts">
        {items.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <p>You haven't any contacts yet!</p>
        )}
      </Section>
      <Toaster />
    </AppSyles>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
