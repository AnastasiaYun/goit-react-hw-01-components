import Profile from './components/Profile/profile';
import user from './components/data/user.json';

export default function App() {
    return <div>
          <Profile
    avatar={user.avatar}
    name={user.name}
    tag={user.tag} />,
      </div>;
};

