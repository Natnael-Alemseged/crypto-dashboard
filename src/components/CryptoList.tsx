import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';
import CryptoCard from './CryptoCard';

export interface Coin {
    id: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    price_change_percentage_24h: number;
}

function CryptoList() {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
            .then((res) => setCoins(res.data))
            .catch((err) => console.error(err));
    }, []);

    const filteredCoins = useMemo(() => {
        return coins.filter((coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [coins, search]);

    return (
        <div>
            <input
                placeholder="Search coin..."
                className="p-2 mb-4 w-full border rounded"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredCoins.map((coin) => (
                    <CryptoCard key={coin.id} coin={coin} />
                ))}
            </div>
        </div>
    );
}

export default CryptoList;
