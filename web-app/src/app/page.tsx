import connectMongoDB from '../../config/mongodb';
import Welcome from '../components/Welcome';

export default function Home() {
  connectMongoDB();
  return (
    <div>
      <Welcome/>
    </div>
  )
}


