import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function About() {
    return (
        <section>
            <h2>Layout Example (About)</h2>
            <p>
                This example adds a property <code>getLayout</code> to your page,
                allowing you to return a React component for the layout. This allows you
                to define the layout on a per-page basis. Since were returning a
                function, we can have complex nested layouts if desired.
            </p>
            <p>
                When navigating between pages, we want to persist page state (input
                values, scroll position, etc.) for a Single-Page Application (SPA)
                experience.
            </p>
            <p>
                This layout pattern will allow for state persistence because the React
                component tree is persisted between page transitions. To preserve state,
                we need to prevent the React component tree from being discarded between
                page transitions.
            </p>
            <h3>Try It Out</h3>
            <p>
                To visualize this, try tying in the search input in the{' '}
                <code>Sidebar</code> and then changing routes. Youll notice the input
                state is persisted.
            </p>
            <Link href="/">
                <a>Home</a>
            </Link>
        </section>
    )
}

About.getLayout = function getLayout(page) {
    return (
        {page}
    )
}