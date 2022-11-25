import 'normalize.css/normalize.css';
import 'styles/_variables.scss';
import 'styles/globals.scss';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
