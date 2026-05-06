import { Link } from "react-router-dom";

const routes = [
    { to: "/quote", title: "Quote", desc: "Random quote" },
    { to: "/jokes", title: "Jokes", desc: "Jokes list" },
    { to: "/cats", title: "Random Cat", desc: "Random cat content" },
    { to: "/meals", title: "Meals", desc: "Meals listing" },
    { to: "/users", title: "Random User", desc: "Random user generator" },
    { to: "/youtube", title: "YouTube", desc: "YouTube videos list" },
];

export function Home() {
    return (
        <div className="home">
            <header className="home__header">
                <h1 className="home__title">React Mini Projects</h1>
                <p className="home__subtitle">Pick a route to explore.</p>
            </header>

            <main className="home__grid">
                {routes.map((route) => (
                    <Link key={route.to} className="home__card" to={route.to}>
                        <div className="home__cardTitle">{route.title}</div>
                        <div className="home__cardDesc">{route.desc}</div>
                        <div className="home__cardTo">{route.to}</div>
                    </Link>
                ))}
            </main>
        </div>
    );
}

