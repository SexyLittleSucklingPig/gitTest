import MainPage from './Main';

function LayLout(props) {
    return (
        <div>
            <MainPage />
            {props.children}
        </div >
    );
}

export default LayLout;
