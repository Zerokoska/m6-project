import MainView from "../MainView";
import Navigation from "../navigation";

export default function App() {
    return (
        <>
            <div className="mainView">
                <Navigation />
                <MainView />
            </div>
        </>
    );
}
