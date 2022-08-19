import SneakersItem from "./SneakersItem"

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__title__wrapper">
                    <h1 className="main__title">
                        Все кроссовки
                    </h1>
                    <ul className="sneakers-list">
                        <SneakersItem />
                        <SneakersItem />
                        <SneakersItem />
                        <SneakersItem />
                        <SneakersItem />
                        <SneakersItem />
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Main