import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  totalAmount: number;
}

function App({totalAmount}: AppScreenProps): JSX.Element {
  return (
    <MainPage totalAmount={totalAmount} />
  );
}

export default App;
