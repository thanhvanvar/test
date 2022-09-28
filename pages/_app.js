import '../styles/globals.css';
import '../styles/bootstrap.min.css';
//import '../styles/styles.css';
import Layout from '../components/layout';
export function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
