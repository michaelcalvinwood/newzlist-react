import './Desktop.scss';
import Header from './Desktop/Header';

const Desktop = props => {
    return (
        <div className='desktop'>
            <Header />
            <div className = 'desktop__container'>
                <p className='desktop__heading'>Hello Desktop</p>
            </div>
        </div>
    )
}

export default Desktop;