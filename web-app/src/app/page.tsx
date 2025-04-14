import AuthenticatedView from '../components/AuthenticatedView';
import connectMongoDB from '../../config/mongodb';
import Content from '../components/Content';
import Welcome from '../components/Welcome';

export default function Home() {
  connectMongoDB();
  {/* Add these lines and remove current code in the return to go back to the splash
    <Content>
      <Welcome/>
    </Content>  
  */}
  return (
    <div>
      <Welcome/>
    </div>
  )
}


