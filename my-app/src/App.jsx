import Profile from './components/Profile/profile';
import Statistics from './components/Statistics/Statistics';
import Friends from './components/Friends/friends';
import user from './components/data/user.json';
import statisticalData from './components/data/statistical-data.json';
import friends from './components/data/friends.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

       <Friends friends={friends} />
    </div>
  );
}
