import {useTheme} from './context/ThemeContext';
import CryptoList from './components/CryptoList';

function App() {
    const {theme, toggleTheme} = useTheme();


    return (
        <div className=

                 {theme === 'dark' ?
                     "min-h-screen p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition" :
                     "min-h-screen p-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-black transition"}>
            <header className="flex justify-between items-center mb-4">
                <h1

                    className={theme === 'dark' ? "text-2xl font-bold " : "text-2xl font-bold text-black "}

                >Crypto Dashboard</h1>
                <button
                    onClick={toggleTheme}

                    className=

                        "border px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"

                >
                    Toggle {theme === 'light' ? '🌞' : '🌚'}
                </button>
            </header>
            <CryptoList/>
        </div>
    );
}

export default App;
